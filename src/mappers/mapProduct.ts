import { QueryDocumentSnapshot } from "firebase-admin/firestore";
import Product, { Category } from "../types/product"
import { FirestoreProduct } from "../types/product";

export default function toProduct(
  doc: QueryDocumentSnapshot): Product {
  const data = doc.data() as FirestoreProduct;

  return {
    id: doc.id,
    name: data.name,
    price: data.price,
    brand: data.brand,
    category: data.category as Category,
    subcategory: data.subcategory,
    stock: data.stock,
    rating: {
      rateAvg: data.rateAvg,
      rateCount: data.rateCount
    },
    tags: data.tags,
    images: data.images,
    description: data.description
  }
}