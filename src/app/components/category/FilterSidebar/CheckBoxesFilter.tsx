import { CheckBoxesProps } from "../../../../types/propTypes";

export default function CheckBoxesFilter(props: CheckBoxesProps) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-slate-200 text-sm font-semibold flex items-center gap-2">
        <span className="material-symbols-outlined text-lg opacity-70">category</span> Category
      </h4>
      <div className="flex flex-col gap-2">
        {props.options.map((option) => (
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="w-5 h-5 rounded border border-border-muted bg-neutral-dark flex items-center justify-center group-hover:border-primary transition-colors">
              <div className="w-2 h-2 rounded-sm bg-primary opacity-0 check-mark"></div>
            </div>
            <span className="text-slate-400 text-sm group-hover:text-slate-100 transition-colors">{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

/*
<label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-5 h-5 rounded border border-border-muted bg-neutral-dark flex items-center justify-center group-hover:border-primary transition-colors">
            <div className="w-2 h-2 rounded-sm bg-primary opacity-0 check-mark"></div>
          </div>
          <span className="text-slate-400 text-sm group-hover:text-slate-100 transition-colors">Stainless Steel</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-5 h-5 rounded border border-primary bg-primary/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-sm bg-primary"></div>
          </div>
          <span className="text-slate-100 text-sm font-medium">Copper Plated</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="w-5 h-5 rounded border border-border-muted bg-neutral-dark flex items-center justify-center group-hover:border-primary transition-colors">
            <div className="w-2 h-2 rounded-sm bg-primary opacity-0 check-mark"></div>
          </div>
          <span className="text-slate-400 text-sm group-hover:text-slate-100 transition-colors">Gold Finished</span>
        </label>
*/