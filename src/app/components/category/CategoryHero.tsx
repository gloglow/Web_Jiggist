'use client'
import { useTranslations } from "next-intl";

export default function CategoryHero({ category }: { category: string }) {
  const categoryT = useTranslations("category");
  const productT = useTranslations("products");

  return (
    <div className="flex flex-col gap-6 mb-12">
      <nav className="flex items-center gap-2 text-sm text-slate-500">
        <a className="hover:text-primary transition-colors" href="#">Home</a>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-slate-300">{categoryT(`${category}`)}</span>
      </nav>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="text-slate-100 text-5xl font-bold tracking-tight mb-4">{productT.rich(`${category}.title`, {
            highlight: (chunks) => (
              <span className="text-primary">{chunks}</span>
            )
          })}</h1>
          <p className="text-slate-400 text-lg">{productT(`${category}.description`)}</p>
        </div>
      </div>
    </div>
  )
}