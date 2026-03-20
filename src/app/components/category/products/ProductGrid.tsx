import { ProductPage } from "@/repositories/product.server";
import ProductCard from "./ProductCard";

export default async function ProductGrid(productPage: ProductPage) {
  const products = productPage.products;

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
  )
}