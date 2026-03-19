'use client'

import FilterHeader from "./FilterHeader"
import ButtonsFilter from "./ButtonsFilter"
import PriceSliderFilter from "./PriceSliderFilter"
import { FilterSidebarProps } from "../../../../types/propTypes"
import { useEffect, useState } from "react"
import CheckBoxesFilter from "./CheckBoxesFilter"
import { usePathname, useRouter } from "next/navigation"

export default function FilterSidebar({ category, info, selected }: FilterSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<[number, number]>([0, info.maxPrice]);

  useEffect(() => {
    setSelectedSubcategories(selected.subcategories)
    setSelectedBrands(selected.brands)
    setSelectedPriceRange(selected.priceRange)
  }, [selected])

  const handleApply = () => {
    const params = new URLSearchParams();

    if (selectedSubcategories.length > 0) {
      params.set("subcategories", selectedSubcategories.join(","));
    }

    if(selectedBrands.length > 0){
      params.set("brands", selectedBrands.join(","));
    }

    params.set("minPrice", selectedPriceRange[0].toString());
    params.set("maxPrice", selectedPriceRange[1].toString());

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="sticky top-28 flex flex-col gap-8">
        <FilterHeader />
        <div className="flex flex-col gap-8">
          <CheckBoxesFilter
            options={info.subcategories}
            selected={selectedSubcategories}
            onChange={setSelectedSubcategories}
          />
          <ButtonsFilter
            options={info.brands}
            selected={selectedBrands}
            onChange={setSelectedBrands}
          />
          <PriceSliderFilter
            maxPrice={info.maxPrice}
            selected={selectedPriceRange}
            onChange={setSelectedPriceRange}
          />
        </div>
        <button
          className="mt-4 w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg text-sm transition-all shadow-lg shadow-primary/20"
          onClick={handleApply}>
          Apply Filters
        </button>
      </div>
    </aside>
  )
}