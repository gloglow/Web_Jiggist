export type FilterSidebarProps = {
  subcategoryInfo: ButtonsProps,
  brandInfo: CheckboxesProps,
  priceInfo: PriceSliderProps
}

export type ButtonsProps = {
  options: string[]
}

export type CheckboxesProps = {
  options: string[]
}

export type PriceSliderProps = {
  minPrice: number,
  maxPrice: number
}