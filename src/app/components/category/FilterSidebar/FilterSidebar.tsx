import FilterHeader from "./FilterHeader"
import FilterGrid from "./FilterGrid"
import { FilterSidebarProps } from "../../../../types/propTypes"

export default function FilterSidebar(props: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="sticky top-28 flex flex-col gap-8">
        <FilterHeader />
        <FilterGrid
          subcategoryInfo={props.subcategoryInfo}
          brandInfo={props.brandInfo}
          priceInfo={props.priceInfo}
        />
        <button className="mt-4 w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg text-sm transition-all shadow-lg shadow-primary/20">
          Apply Filters
        </button>
      </div>
    </aside>
  )
}