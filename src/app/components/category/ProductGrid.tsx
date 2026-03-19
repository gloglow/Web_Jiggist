import { ProductPage } from "@/repositories/product.server";
import SortDropDown from "./products/SortDropDown";
import { useTranslations } from "next-intl";
import ProductCard from "./products/ProductCard";

export default async function ProductGrid(productPage: ProductPage) {
  const products = productPage.products;

  return (
    <div className="flex-1">
      <div className="flex justify-end mb-4">
        <SortDropDown />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
      <div className="mt-16 flex justify-center items-center gap-4">
        <button className="w-10 h-10 rounded-lg bg-neutral-dark border border-border-muted flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold">1</button>
        <button className="w-10 h-10 rounded-lg bg-neutral-dark border border-border-muted text-slate-400 font-bold hover:text-slate-100 transition-all">2</button>
        <button className="w-10 h-10 rounded-lg bg-neutral-dark border border-border-muted text-slate-400 font-bold hover:text-slate-100 transition-all">3</button>
        <span className="text-slate-600">...</span>
        <button className="w-10 h-10 rounded-lg bg-neutral-dark border border-border-muted text-slate-400 font-bold hover:text-slate-100 transition-all">12</button>
        <button className="w-10 h-10 rounded-lg bg-neutral-dark border border-border-muted flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  )
}