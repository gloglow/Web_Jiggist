import { Category } from "@/types/product";
import { getFilterProps } from "../../../../repositories/product.server";
import CategoryHero from "../../../components/category/CategoryHero"
import FilterSidebar from "../../../components/category/FilterSidebar/FilterSidebar";
import ProductGrid from "@/app/components/category/ProductGrid";

export default async function Products({
  params }: {
    params: Promise<{ locale: string; category: string }>
  }) {
  const category = (await params).category;

  const filterSidebarProps = await getFilterProps(category as Category);

  return (
    <main className="max-w-7xl mx-auto w-full px-6 md:px-16 py-10">
      <CategoryHero />
      <div className="flex flex-col lg:flex-row gap-10">
        <FilterSidebar
          {...filterSidebarProps}
        />
        <ProductGrid />
      </div>
    </main>
  );
}