export type LocaleString {
  en: string
  ja: string
  ko: string
}

export type Rating {
  rateAvg: number
  rateCount: number
}

export enum Category {
  "liquor",
  "ingredient",
  "tool",
  "accessory"
}

export interface Product {
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