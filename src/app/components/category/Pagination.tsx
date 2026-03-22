'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  page?: number,
  maxPage: number
}

export default function Pagination({ page, maxPage}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const crtPage = page ? page + 1 : 1;

  const pages: (number | "...")[] = [];

  const start = Math.max(1, crtPage - 2);
  const end = Math.min(maxPage, crtPage + 2);

  if (start > 1) {
    pages.push(1);
    if (start > 2) pages.push("...");
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (end < maxPage) {
    if (end < maxPage - 1) pages.push("...");
    pages.push(maxPage);
  }

  const pageClick = (value: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", (value-1).toString());
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="mt-16 flex justify-center items-center gap-4">
      <button className="w-10 h-10 rounded-lg bg-neutral-dark border border-border-muted flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      {pages.map((p, idx) =>
        p === "..." ? (
          <span key={idx} className="text-slate-600 px-1">
            ...
          </span>
        ) : (
          <button
            key={`${p}-${idx}`}
            className={`w-10 h-10 rounded-lg font-bold transition-all
            ${p === crtPage
                ? "bg-primary text-white"
                : "bg-neutral-dark border border-border-muted text-slate-400 hover:text-slate-100"
              }`}
            onClick={() => {
              if (typeof p === "number") {
                pageClick(p);
              }
            }}
          >
            {p}
          </button>
        )
      )}

      <button className="w-10 h-10 rounded-lg bg-neutral-dark border border-border-muted flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  )
}