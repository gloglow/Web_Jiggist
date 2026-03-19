'use client'
import { useMemo, useRef, useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const options = ["alphabetical", "priceAsc", "priceDesc"];

type Props = {
  onChange: (value: string) => void
}

export default function SortDropDown({ onChange }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const productT = useTranslations("products");

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("alphabetical");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sort = searchParams.get("sort");
    if(sort){
      setSelected(sort);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const optionLabels = useMemo(
    () =>
      options.map((option) => ({
        value: option,
        label: productT("sort." + option),
      })),
    [options]
  );

  const selectedLabel = optionLabels.find((option) => option.value === selected)?.label ?? "";

  const longestLabel =
    optionLabels.reduce((longest, current) =>
      current.label.length > longest.label.length ? current : longest
    ).label ?? "";

  const handleSelect= (value: string) => {
    if (value != selected) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sort", value);
      router.push(`${pathname}?${params.toString()}`);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-slate-400 text-sm">{productT("sort.label")}</span>

      <div ref={ref} className="relative inline-block">
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="relative flex items-center justify-between gap-2 bg-neutral-dark px-4 py-2 rounded-lg border border-border-muted text-sm font-medium whitespace-nowrap min-w-max"
        >
          <span className="invisible">
            {longestLabel}
          </span>
          <span className="material-symbols-outlined text-sm invisible">
            expand_more
          </span>

          <span className="absolute inset-0 flex items-center justify-between px-4 py-2">
            <span>{selectedLabel}</span>
            <span
              className={`material-symbols-outlined text-sm transition-transform ${open ? "rotate-180" : ""
                }`}
            >
              expand_more
            </span>
          </span>
        </button>

        {open && (
          <div className="absolute left-0 top-full mt-2 w-full overflow-hidden rounded-lg border border-border-muted bg-zinc-900 shadow-lg z-50">            {optionLabels.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                handleSelect(option.value);
                setSelected(option.value);
                setOpen(false);
              }}
              className="block w-full px-4 py-2 text-left text-sm whitespace-nowrap hover:bg-neutral-700"
            >
              {option.label}
            </button>
          ))}
          </div>
        )}
      </div>
    </div>
  );
}