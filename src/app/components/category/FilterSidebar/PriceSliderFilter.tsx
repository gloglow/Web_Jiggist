import { PriceSliderProps } from "../../../../types/propTypes"
import CustomPriceSlider from "../../common/CustomPriceSlider"

export default function PriceSliderFilter(props: PriceSliderProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-slate-200 text-sm font-semibold flex items-center gap-2">
        <span className="material-symbols-outlined text-lg opacity-70">payments</span> Price Range
      </h4>
      <div className="px-2">
        <CustomPriceSlider
          maxPrice={props.maxPrice}
          selected={props.selected}
          onChange={props.onChange}
        />
      </div>
    </div>
  )
}