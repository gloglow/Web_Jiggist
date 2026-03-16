import { adminDb } from "../../lib/firebase/admin"
import { Query, QuerySnapshot } from "firebase-admin/firestore"
import { CheckboxesProps, FilterSidebarProps, PriceSliderProps } from "../types/propTypes"
import toProduct from "@/mappers/mapProduct"
import Product, { Category } from "@/types/product"

export type ProductPage = {
  products: Product[]
  nextCursor: number | null
}

export type ProductQuery = {
  name?: string,
  minPrice?: number,
  maxPrice?: number,
  brand?: string,
  category?: string,
  subcategory?: string,
  tags?: string[],

  sortBy?: "price",
  sortOrder?: "asc" | "desc",

  limit?: number,
  cursor?: number
}

export async function getProductsPage(
  query: ProductQuery = {}
): Promise<ProductPage> {
  const {
    name,
    minPrice,
    maxPrice,
    brand,
    category,
    subcategory,
    sortBy,
    sortOrder,
    limit,
    cursor
  } = query;

  let ref: Query = adminDb.collection("products");

  const conditions = [
    query.name && ["name", "==", query.name],
    query.minPrice && ["price", ">=", query.minPrice],
    query.maxPrice && ["price", "<=", query.maxPrice],
    query.brand && ["brand", "==", query.brand],
    query.category && ["category", "==", query.category],
    query.subcategory && ["subcategory", "==", query.subcategory],
  ].filter(Boolean) as [string, FirebaseFirestore.WhereFilterOp, any][]

  for (const [field, op, value] of conditions) {
    ref = ref.where(field, op, value);
  }

  ref = ref
    .orderBy(sortBy ?? "price", sortOrder ?? "asc")
    .orderBy("__name__", sortOrder)
    .limit(limit ?? 6);

  if (cursor) {
    ref = ref.startAfter(cursor);
  }

  const snapshot = ref.get();
  const docs = (await snapshot).docs;

  const products = docs.map(toProduct);

  const lastDoc = docs[docs.length - 1];

  const nextCursor = lastDoc
    ? lastDoc.data().createdAt
    : null

  return {
    products,
    nextCursor
  };
}

export async function getFilterProps(
  category: Category): Promise<FilterSidebarProps> {
  // 関数
  const getSubcategory = (products: Product[]): DropdownProps => {
    const options = [
      ...new Set(products.map(product => product.subcategory))
    ];
    return { options }
  }

  const getBrand = (products: Product[]): CheckboxesProps => {
    const options = [
      ...new Set(products.map(product => product.brand))
    ];
    return { options }
  }

  const getPriceRange = (products: Product[]): PriceSliderProps => {
    products.sort((a: Product, b: Product) => {
      return a.price - b.price;
    })

    const minPrice = products[0].price;
    const maxPrice = products[products.length - 1].price;

    return {
      minPrice,
      maxPrice
    };
  }

  let query: Query = adminDb.collection("products");

  if(category){
    query = query.where("category", "==", category);
  }

  const snapshot = await query.get();
  const products = snapshot.docs.map(toProduct);

  return {
    subcategoryInfo: getSubcategory(products),
    brandInfo: getBrand(products),
    priceInfo: getPriceRange(products)
  };
}