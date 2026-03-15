export default function FilterHeader() {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-slate-100 font-bold uppercase tracking-widest text-xs">Filters</h3>
      <button className="text-primary text-xs font-semibold hover:underline">Clear All</button>
    </div>
  )
}