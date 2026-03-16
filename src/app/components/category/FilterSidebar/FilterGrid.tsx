import { FilterSidebarProps } from "../../../../types/propTypes"
import ButtonsFilter from "./ButtonsFilter"
import DropdownFilter from "./CheckBoxesFilter"
import PriceSliderFilter from "./PriceSliderFilter"

export default function FilterGrid(props: FilterSidebarProps) {
  return (
    <div className="flex flex-col gap-8">
      <DropdownFilter {...props.subcategoryInfo}/>
      <ButtonsFilter {...props.brandInfo}/>
      <PriceSliderFilter {...props.priceInfo}/>
    </div>
  )
}