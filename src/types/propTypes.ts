export type FilterSidebarProps = {
  subcategoryInfo: ButtonsProps,
  brandInfo: CheckBoxesProps,
  priceInfo: PriceSliderProps
}

export type ButtonsProps = {
  options: string[]
}

export type CheckBoxesProps = {
  options: string[]
}

export type PriceSliderProps = {
  minPrice: number,
  maxPrice: number
}