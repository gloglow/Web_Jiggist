import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-dark bg-background-dark/95 backdrop-blur-md px-6 lg:px-20 py-5">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-primary to-accent rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-white">architecture</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tighter uppercase font-serif">Jiggist</h1>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {['Shop', 'Collections', 'New Arrivals', 'Wholesale'].map((item) => (
              <a key={item} className="text-[11px] font-bold hover:text-accent transition-colors uppercase tracking-[0.2em]" href="#">{item}</a>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center bg-surface-dark/50 border border-border-dark rounded px-4 py-2 w-72">
            <span className="material-symbols-outlined text-slate-500 text-lg">search</span>
            <input
              className="bg-transparent border-none focus:ring-0 text-xs w-full placeholder:text-slate-600 uppercase tracking-widest ml-2"
              placeholder="Search Inventory"
              type="text"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="relative group">
              <span className="material-symbols-outlined text-2xl group-hover:text-accent transition-colors">shopping_cart</span>
              <span className="absolute -top-2 -right-2 bg-primary text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">4</span>
            </button>
            <Link href="/login">
              <button className="group">
                <span className="material-symbols-outlined text-2xl group-hover:text-accent transition-colors">account_circle</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;