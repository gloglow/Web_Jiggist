'use client'
import { Locale } from "@/types/locale";
import Product from "@/types/product";
import { useTranslations } from "next-intl";

export default function ProductDetails(
  {product, locale}
  : {product: Product, locale: string}
) {
  const productDetailT = useTranslations("productDetail");

  const localeProductName = product.name[locale as Locale];
  const localeProductDescription = product.description[locale as Locale];

  return (
    <div className="lg:col-span-5 flex flex-col">
      <div className="mb-2">
        <span className="text-primary font-bold tracking-widest text-xs uppercase">{product.brand}</span>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight leading-[1.1]">
        {localeProductName}
      </h1>
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-1 text-primary">
          <span className="material-symbols-outlined fill-1">star</span>
          <span className="material-symbols-outlined fill-1">star</span>
          <span className="material-symbols-outlined fill-1">star</span>
          <span className="material-symbols-outlined fill-1">star</span>
          <span className="material-symbols-outlined">star_half</span>
        </div>
        <span className="text-sm text-neutral-muted font-medium">{"4.8" + "(124" + productDetailT("reviews") + ")"}</span>
      </div>
      <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
        {productDetailT("yen") + product.price}
      </div>
      <div className="space-y-6 mb-10">
        <p className="text-neutral-muted leading-relaxed">
          {localeProductDescription}
        </p>
      </div>
      <div>
        {product.tags.map((tag) => (
          <span>#{tag} </span>
        ))}
      </div>
      <div className="mt-auto space-y-4">
        <div className="flex gap-4">
          <div className="flex items-center border border-neutral-dark/30 rounded-lg overflow-hidden bg-neutral-dark/5 dark:bg-neutral-dark/20">
            <button className="px-3 py-4 text-neutral-muted hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm font-bold">remove</span>
            </button>
            <span className="px-4 font-bold">1</span>
            <button className="px-3 py-4 text-neutral-muted hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-sm font-bold">add</span>
            </button>
          </div>
          <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">shopping_cart</span>
            {productDetailT("addToCart")}
          </button>
        </div>
        <button className="w-full py-4 border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-colors">
          {productDetailT("purchase")}
        </button>
      </div>
    </div>
  );
}