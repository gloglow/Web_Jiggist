import { useTranslations } from "next-intl";

export default function SortDropDown() {
  const productT = useTranslations("products");

  return (
    <div className="flex items-center gap-3">
      <span className="text-slate-400 text-sm">{productT("sort.label")}</span>
      <button className="flex items-center gap-2 bg-neutral-dark px-4 py-2 rounded-lg border border-border-muted text-sm font-medium">
        Featured <span className="material-symbols-outlined text-sm">expand_more</span>
      </button>
    </div>
  )
}