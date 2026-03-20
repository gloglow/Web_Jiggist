type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchInput({ value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-slate-200 text-sm font-semibold flex items-center gap-2">
        <span className="material-symbols-outlined text-lg opacity-70">
          search
        </span>
        Search
      </h4>
      <div className="relative hidden lg:flex items-center bg-surface-dark/50 border border-border-dark rounded px-2 py-2 w-65">
        <input
          className="bg-transparent border-none focus:ring-0 text-xs w-full placeholder:text-slate-600 uppercase tracking-widest ml-2"
          placeholder="Search Inventory"
          type="text"
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
}