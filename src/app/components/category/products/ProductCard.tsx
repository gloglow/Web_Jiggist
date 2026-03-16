'use client'
import Product from "@/types/product";
import { useTranslations } from "next-intl";
import { t } from "../../../../../lib/i18n"
import {useLocale} from 'next-intl';
import { Locale } from "@/types/locale";

export default function ProductCard(product: Product) {
  const locale = useLocale() as Locale;
  const commonT = useTranslations("common");

  return (
    <div className="group relative flex flex-col bg-neutral-dark rounded-xl border border-border-muted overflow-hidden hover:border-primary/50 transition-all duration-300"
      key={product.id}>
      <div className="aspect-4/5 overflow-hidden bg-background-dark relative">
        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="Professional copper cocktail shaker set on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClNEz3Kyv7b9NfttHAaqzP3lmE_qaJA3xmscSBot2Hr3Rx8SOaxlyOQBRzvgzLw6Xna0TuwvUeeme8UWCTkyTyl4axu0z3PLQAss-ZC_jUqtYATbX-A21rW1HGQjJLY3_duLytmVBaFe_lxF6QhEYikJxM4m6h9PZ7zEwh3pVlAQC7RAU2XDeK4v_If99GHnJNMMnpoyOHMLKQHROHc9wkrNZkIUuNnV3oEfuJd92TYdZLoDb3Nf0S3tUCQ2sp7HkKxrpy8Ehs7Vo" />
        <div className="absolute inset-0 bg-linear-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
          <button className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <span className="material-symbols-outlined text-sm">add_shopping_cart</span>{commonT("addToCart")}
          </button>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-primary/90 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Premium</span>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">{product.brand}</p>
            <h3 className="text-slate-100 font-bold group-hover:text-primary transition-colors">{t(product.name, locale)}</h3>
          </div>
          <span className="text-primary font-bold">{product.price}{commonT("yen")}</span>
        </div>
        <p className="text-slate-400 text-xs line-clamp-2">{t(product.description, locale)}</p>
      </div>
    </div>
  );
}