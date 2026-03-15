import { FilterSidebarProps } from "../../../../types/propTypes"
import CheckFilter from "./CheckFilter"
import DropdownFilter from "./DropdownFilter"
import PriceSliderFilter from "./PriceSliderFilter"

export default function FilterGrid(props: FilterSidebarProps) {
  return (
    <div className="flex flex-col gap-8">
      <DropdownFilter {...props.subcategoryInfo}/>
      <CheckFilter {...props.brandInfo}/>
      <PriceSliderFilter {...props.priceInfo}/>
    </div>
  )
}