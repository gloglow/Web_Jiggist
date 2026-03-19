import { Category } from "@/types/product";
import { getFilterInfo, getProductsPage, ProductQuery } from "../../../../repositories/product.server";
import CategoryHero from "../../../components/category/CategoryHero"
import FilterSidebar from "../../../components/category/FilterSidebar/FilterSidebar";
import ProductGrid from "@/app/components/category/ProductGrid";
import { FilterSidebarProps, FilterState } from "@/types/propTypes";

export default async function Products({
  params,
  searchParams }: {
    params: Promise<{ category: string, locale: string }>
    searchParams: Promise<{ subcategories?: string, brands?: string, minPrice?: number, maxPrice?: number, sort?: string}>
  }) {
  const category = (await params).category;
  const locale = (await params).locale;

  const filterInfo = await getFilterInfo(category as Category);

  const awaitedSearchParams = await searchParams;
  const subcategories = awaitedSearchParams.subcategories?.split(",") ?? [];
  const brands = awaitedSearchParams.brands?.split(",") ?? [];
  const priceRange: [number, number] =
    awaitedSearchParams.minPrice != undefined && awaitedSearchParams.maxPrice != undefined
      ? [awaitedSearchParams.minPrice, awaitedSearchParams.maxPrice]
      : [0, filterInfo.maxPrice];
  const sort = awaitedSearchParams.sort;

  const filterState: FilterState = {
    subcategories: subcategories,
    brands: brands,
    priceRange: priceRange
  }

  const query: ProductQuery = {
    //name?: string,
    priceRange: priceRange[0] != -1 ? priceRange : undefined,
    brand: brands.length > 0 ? brands : undefined,
    category: category,
    subcategory: subcategories.length > 0 ? subcategories : undefined,
    //tags?: string[],

    sortBy: sort,

    //limit?: number,
    //cursor?: number
  }

  const productPage = await getProductsPage({query, locale});

  return (
    <main className="max-w-7xl mx-auto w-full px-6 md:px-16 py-10">
      <CategoryHero
        category={category}
      />
      <div className="flex flex-col lg:flex-row gap-10">
        <FilterSidebar
          category={category}
          info={filterInfo}
          selected={filterState}
        />
        <ProductGrid
          {...productPage}
        />
      </div>
    </main>
  );
}