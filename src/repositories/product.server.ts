import { adminDb } from "../../lib/firebase/admin"
import { Query, QuerySnapshot } from "firebase-admin/firestore"
import { ButtonsProps, CheckBoxesProps, FilterInfo, FilterSidebarProps, PriceSliderProps } from "../types/propTypes"
import toProduct from "@/mappers/mapProduct"
import Product, { Category } from "@/types/product"

type Props = {
  query: ProductQuery,
  locale: string
}

export type ProductPage = {
  products: Product[]
  nextCursor: [number, string] | null;
}

export type ProductQuery = {
  name?: string,
  priceRange?: [number, number],
  brand?: string[],
  category?: string,
  subcategory?: string[],
  tags?: string[],

  sortBy?: string,

  limit?: number,
  cursor?: [number, string];
}

export async function getProductsPage(
  { query, locale }: Props
): Promise<ProductPage> {
  const {
    name,
    priceRange,
    brand,
    category,
    subcategory,
    sortBy,
    limit,
    cursor
  } = query;

  let ref: Query = adminDb.collection("products");

  const conditions = [
    name ? ["name", "==", name] : null,
    priceRange?.length === 2 ? ["price", ">=", Number(priceRange[0])] : null,
    priceRange?.length === 2 ? ["price", "<=", Number(priceRange[1])] : null,
    brand?.length ? ["brand", "in", brand] : null,
    category ? ["category", "==", category] : null,
    subcategory?.length ? ["subcategory", "in", subcategory] : null,
  ].filter(
    (v): v is [string, FirebaseFirestore.WhereFilterOp, any] => v !== null
  );

  for (const [field, op, value] of conditions) {
    ref = ref.where(field, op, value);
  }

  if (sortBy) {
    switch (sortBy) {
      case "alphabetical":
        switch (locale) {
          case "en":
            ref = ref.orderBy("name.en");
            break;
          case "ko":
            ref = ref.orderBy("name.ko");
            break;
          case "ja":
            ref = ref.orderBy("name.ja");
            break;
        }
        break;
      case "priceAsc":
        ref = ref.orderBy("price", "asc");
        break;
      case "priceDesc":
        ref = ref.orderBy("price", "desc");
        break;
    }
  }

  ref = ref
    .limit(limit ?? 6);

  if (cursor) {
    ref = ref.startAfter(...cursor);
  }

  const snapshot = await (ref.get());
  const docs = snapshot.docs;

  const products = docs.map(toProduct);

  const lastDoc = docs[docs.length - 1];

  const nextCursor: [number, string] | null = lastDoc
    ? [lastDoc.data().price, lastDoc.id]
    : null;

  return {
    products,
    nextCursor
  };
}

export async function getFilterInfo(
  category: Category): Promise<FilterInfo> {
  // 関数
  const getSubcategory = (products: Product[]): string[] => {
    const options = [
      ...new Set(products.map(product => product.subcategory))
    ];
    return options
  }

  const getBrand = (products: Product[]): string[] => {
    const options = [
      ...new Set(products.map(product => product.brand))
    ];
    return options
  }

  const getMaxPrice = (products: Product[]): number => {
    products.sort((a: Product, b: Product) => {
      return a.price - b.price;
    })

    return products[products.length - 1].price;
  }

  let query: Query = adminDb.collection("products");

  if (category) {
    query = query.where("category", "==", category);
  }

  const snapshot = await query.get();
  const products = snapshot.docs.map(toProduct);

  return {
    subcategories: getSubcategory(products),
    brands: getBrand(products),
    maxPrice: getMaxPrice(products)
  };
}