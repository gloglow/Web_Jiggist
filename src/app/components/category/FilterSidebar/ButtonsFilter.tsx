import { ButtonsProps } from "../../../../types/propTypes";

export default function ButtonsFilter(props: ButtonsProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-slate-200 text-sm font-semibold flex items-center gap-2">
        <span className="material-symbols-outlined text-lg opacity-70">sell</span> Brand
      </h4>
      <div className="flex flex-wrap gap-2">
        {props.options.map((option) => (
          <button
            className="px-3 py-1.5 rounded-full bg-neutral-dark border border-border-muted text-slate-400 text-xs font-medium hover:text-slate-100 transition-colors"
            key={option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}