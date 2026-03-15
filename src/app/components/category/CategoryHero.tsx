export default function CategoryHero() {
  return (
    <div className="flex flex-col gap-6 mb-12">
      <nav className="flex items-center gap-2 text-sm text-slate-500">
        <a className="hover:text-primary transition-colors" href="#">Home</a>
        <span className="material-symbols-outlined text-xs">chevron_right</span>
        <span className="text-slate-300">Professional Bar Tools</span>
      </nav>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h1 className="text-slate-100 text-5xl font-bold tracking-tight mb-4">Master Your <span className="text-primary">Craft</span></h1>
          <p className="text-slate-400 text-lg">Premium, precision-crafted barware designed for the modern mixologist. From Japanese steel shakers to gold-plated jiggers.</p>
        </div>
      </div>
    </div>
  )
}