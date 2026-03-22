'use client'
import { useTranslations } from "next-intl";
import { Link } from "../../../../navigation";
import Navigation from "../navigation";

export default function CategoryHero({ category }: { category: string }) {
  const categoryT = useTranslations("category");
  const productT = useTranslations("products");

  return (
    <div>
    <Navigation pageArr={[category]}/>
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