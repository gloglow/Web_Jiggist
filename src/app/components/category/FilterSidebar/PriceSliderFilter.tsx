import { PriceSliderProps } from "../../../../types/propTypes"

export default function PriceSliderFilter(props: PriceSliderProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-slate-200 text-sm font-semibold flex items-center gap-2">
        <span className="material-symbols-outlined text-lg opacity-70">payments</span> Price Range
      </h4>
      <div className="px-2">
        <div className="h-1 w-full bg-border-muted rounded-full relative">
          <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-full"></div>
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-100 rounded-full border-2 border-primary cursor-pointer shadow-lg"></div>
          <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-100 rounded-full border-2 border-primary cursor-pointer shadow-lg"></div>
        </div>
        <div className="flex justify-between mt-4">
          <span className="text-xs text-slate-400">${props.minPrice}</span>
          <span className="text-xs text-slate-400">${props.maxPrice}</span>
        </div>
      </div>
    </div>
  )
}