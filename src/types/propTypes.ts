export type FilterSidebarProps = {
  category: string
  info: FilterInfo
  selected: FilterState
}

export type FilterInfo ={
  subcategories: string[]
  brands: string[]
  maxPrice: number
}

export type FilterState ={
  subcategories: string[]
  brands: string[]
  priceRange: [number, number]
}

export type ButtonsProps = {
  options: string[]
  selected: string[]
  onChange: (value: string[]) => void
}

export type CheckBoxesProps = {
  options: string[]
  selected: string[]
  onChange: (value: string[]) => void
}

export type PriceSliderProps = {
  maxPrice: number
  selected: [number, number]
  onChange: (value: [number, number]) => void
}