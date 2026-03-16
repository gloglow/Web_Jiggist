import { ProductPage } from "@/repositories/product.server";
import { t } from "../../../../lib/i18n"
import { Locale } from "@/types/locale"

type props = {
  productPage: ProductPage,
  locale: Locale
}

export default function ProductGrid({ productPage, locale }: props) {
  const products = productPage.products;

  return (
    <div className="flex-1">
      <div className="flex items-center gap-3">
        <span className="text-slate-400 text-sm">Sort by:</span>
        <button className="flex items-center gap-2 bg-neutral-dark px-4 py-2 rounded-lg border border-border-muted text-sm font-medium">
          Featured <span className="material-symbols-outlined text-sm">expand_more</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {products.map((product) => (
          <div className="group relative flex flex-col bg-neutral-dark rounded-xl border border-border-muted overflow-hidden hover:border-primary/50 transition-all duration-300">
            <div className="aspect-4/5 overflow-hidden bg-background-dark relative">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="Professional copper cocktail shaker set on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClNEz3Kyv7b9NfttHAaqzP3lmE_qaJA3xmscSBot2Hr3Rx8SOaxlyOQBRzvgzLw6Xna0TuwvUeeme8UWCTkyTyl4axu0z3PLQAss-ZC_jUqtYATbX-A21rW1HGQjJLY3_duLytmVBaFe_lxF6QhEYikJxM4m6h9PZ7zEwh3pVlAQC7RAU2XDeK4v_If99GHnJNMMnpoyOHMLKQHROHc9wkrNZkIUuNnV3oEfuJd92TYdZLoDb3Nf0S3tUCQ2sp7HkKxrpy8Ehs7Vo" />
              <div className="absolute inset-0 bg-linear-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <button className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Add to Cart
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
                <span className="text-primary font-bold">{product.price}円</span>
              </div>
              <p className="text-slate-400 text-xs line-clamp-2">{t(product.description, locale)}</p>
            </div>
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