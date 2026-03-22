'use client'
import { useTranslations } from "next-intl";
import { Link } from "../../../navigation";

type Props = {
  pageArr: string[];
}

export default function Navigation({ pageArr }: Props) {
  const translation = useTranslations("navigation");

  return (
    <div className="mb-6">
      <nav className="flex items-center gap-2 text-sm text-slate-500">
        <Link className="hover:text-primary transition-colors" href="/">Home</Link>
        {pageArr.map((item) => (
          <div
            key={item}
            className="flex items-center"
          >
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="text-slate-300">{translation(item)}</span>
          </div>
        ))}
      </nav>
    </div>
  );
}

