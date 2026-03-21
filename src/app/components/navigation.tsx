'use client'
import { useTranslations } from "next-intl";

type Props = {
  pageName: string
}

export default function Navigation({ pageName }: Props) {

  const translation = useTranslations("navigation");

  return (
    <nav className="flex items-center gap-2 text-sm text-slate-500">
      <a className="hover:text-primary transition-colors" href="#">Home</a>
      <span className="material-symbols-outlined text-xs">chevron_right</span>
      <span className="text-slate-300">{translation(pageName)}</span>
    </nav>
  );
}