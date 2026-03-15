export type FilterSidebarProps = {
  subcategoryInfo: DropdownProps,
  brandInfo: CheckboxesProps,
  priceInfo: PriceSliderProps
}

export type DropdownProps = {
  options: string[]
}

export type CheckboxesProps = {
  options: string[]
}

export type PriceSliderProps = {
  minPrice: number,
  maxPrice: number
}