import { Category } from "@/types/product";
import { getFilterProps, getProductsPage, ProductQuery } from "../../../../repositories/product.server";
import CategoryHero from "../../../components/category/CategoryHero"
import FilterSidebar from "../../../components/category/FilterSidebar/FilterSidebar";
import ProductGrid from "@/app/components/category/ProductGrid";

export default async function Products({
  params }: {
    params: Promise<{ category: string }>
  }) {
  const category = (await params).category;
  const filterSidebarProps = await getFilterProps(category as Category);

  const query: ProductQuery = {
    //name?: string,
    //minPrice?: number,
    //maxPrice?: number,
    //brand?: string,
    category: category,
    //subcategory?: string,
    //tags?: string[],

    //sortBy?: "price" | "createdAt",
    //sortOrder?: "asc" | "desc",

    //limit?: number,
    //cursor?: number
  }
  const productPage = await getProductsPage(query);

  return (
    <main className="max-w-7xl mx-auto w-full px-6 md:px-16 py-10">
      <CategoryHero
        category={category}
      />
      <div className="flex flex-col lg:flex-row gap-10">
        <FilterSidebar
          {...filterSidebarProps}
        />
        <ProductGrid
          {...productPage}
        />
      </div>
    </main>
  );
}