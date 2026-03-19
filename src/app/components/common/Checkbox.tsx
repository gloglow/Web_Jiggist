type props = {
  text: string
  checked: boolean
  onChange: () => void
}

export default function Checkbox({ text, checked, onChange }: props) {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <input
        type="checkbox"
        checked={checked ?? false}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={`w-5 h-5 rounded bg-neutral-dark flex items-center justify-center transition-colors
        ${checked ? "border border-primary bg-primary/10" : "border border-border-muted group-hover:border-primary"}`}>
        <div
          className={`w-2 h-2 rounded-sm bg-primary transition ${checked ? "opacity-100" : "opacity-0"
            }`}
        />
      </div>
      <span
        className={`text-sm transition-colors ${checked ? "text-slate-100" : "text-slate-400"} text-sm group-hover:text-slate-100 transition-colors`}>
        {text}
      </span>
    </label>

  );
}