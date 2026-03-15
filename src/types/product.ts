import { stringConcat } from "firebase/firestore/pipelines"

export type LocaleString {
  en: string
  ja: string
  ko: string
}

export type Rating {
  rateAvg: number
  rateCount: number
}

export type Category =
  "liquor" |
  "ingredient" |
  "tool" |
  "accessory"

export type FirestoreProduct {
  brand: string
  category: string
  description: LocaleString
  images: string[]
  name: LocaleString
  price: number
  rateAvg: number
  rateCount: number
  stock: number
  subcategory: string
  tags: string[]
}

export default interface Product {
  id: string
  name: LocaleString
  price: number
  brand: string
  category: Category
  subcategory: string
  stock: number
  rating: Rating
  tags: string[]
  images: string[]
  description: LocaleString
}