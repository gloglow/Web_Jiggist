import { Category } from "@/types/product";
import { getFilterInfo, getProductsMaxPage, getProductsPage, ProductQuery } from "../../../../repositories/product.server";
import CategoryHero from "../../../components/category/CategoryHero"
import FilterSidebar from "../../../components/category/FilterSidebar/FilterSidebar";
import ProductGrid from "@/app/components/category/products/ProductGrid";
import { FilterState } from "@/types/propTypes";
import SortDropDown from "@/app/components/category/SortDropDown";
import Pagination from "@/app/components/category/Pagination";

type Props = {
  params: Promise<{ category: string, locale: string }>,
  searchParams: Promise<{ search?: string, subcategories?: string, brands?: string, minPrice?: number, maxPrice?: number, sort?: string, page?: number}>
}

export default async function Products({
  params,
  searchParams }: Props
) {
  const category = (await params).category;
  const locale = (await params).locale;

  const filterInfo = await getFilterInfo(category as Category);

  const awaitedSearchParams = await searchParams;

  const search = awaitedSearchParams.search;
  const subcategories = awaitedSearchParams.subcategories?.split(",") ?? [];
  const brands = awaitedSearchParams.brands?.split(",") ?? [];
  const priceRange: [number, number] =
    awaitedSearchParams.minPrice != undefined && awaitedSearchParams.maxPrice != undefined
      ? [awaitedSearchParams.minPrice, awaitedSearchParams.maxPrice]
      : [0, filterInfo.maxPrice];
  const sort = awaitedSearchParams.sort;
  const page = Number(awaitedSearchParams.page);

  const filterState: FilterState = {
    subcategories: subcategories,
    brands: brands,
    priceRange: priceRange
  }

  const query: ProductQuery = {
    //name?: string,
    //search: search,
    priceRange: priceRange[0] != -1 ? priceRange : undefined,
    brand: brands.length > 0 ? brands : undefined,
    category: category,
    subcategory: subcategories.length > 0 ? subcategories : undefined,
    //tags?: string[],
    sortBy: sort,

    limit: 6,
    page: page
  }

  const productPage = await getProductsPage({ query, locale });
  const productsMaxPage = await getProductsMaxPage(query);

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
        <div className="flex-1">
          <div className="flex justify-end mb-4">
            <SortDropDown />
          </div>
          <div className="flex-1">
            <ProductGrid
              {...productPage}
            />
            <Pagination
              page={page}
              maxPage={productsMaxPage}
            />
          </div>
        </div>
      </div>
    </main>
  );
}