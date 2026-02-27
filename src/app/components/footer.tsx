const Footer = () => {
  return (
    <footer className="bg-background-dark border-t border-border-dark pt-24 pb-12 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">architecture</span>
            </div>
            <h1 className="text-xl font-bold tracking-tighter uppercase serif-heading">Jiggist</h1>
          </div>
          <p className="text-slate-500 leading-relaxed mb-8 text-sm">
            Precision tools for the professional bartender. Curated by industry experts, designed for the theater of the
            pour.
          </p>
          <div className="flex gap-4">
            {["share", "camera"].map((icon) => (
              <a
                key={icon}
                className="w-10 h-10 border border-border-dark flex items-center justify-center hover:text-accent hover:border-accent transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">{icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h6 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-8 text-white">The Shop</h6>
          <ul className="space-y-4 text-slate-500 text-sm">
            {["All Hardware", "New Arrivals", "Limited Editions", "Wholesale"].map((item) => (
              <li key={item}>
                <a className="hover:text-accent transition-colors" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-8 text-white">Concierge</h6>
          <ul className="space-y-4 text-slate-500 text-sm">
            {["Shipping Details", "Returns & Exchanges", "Corporate Gifting", "Contact Support"].map((item) => (
              <li key={item}>
                <a className="hover:text-accent transition-colors" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase tracking-[0.2em] text-[11px] mb-8 text-white">Intelligence</h6>
          <p className="text-slate-500 text-sm mb-6">
            Join our mailing list for drop alerts and professional recipes.
          </p>
          <form className="flex flex-col gap-4">
            <input
              className="bg-surface-dark border-border-dark rounded text-xs px-4 py-4 focus:ring-accent focus:border-accent text-white placeholder:text-slate-700 uppercase tracking-widest"
              placeholder="Enter Email"
              type="email"
            />
            <button className="bg-accent hover:bg-white hover:text-black text-white font-bold py-4 rounded text-[10px] uppercase tracking-widest transition-all duration-300">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto pt-10 border-t border-border-dark flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
        <p>© 2024 Jiggist Co. All Rights Reserved.</p>
        <div className="flex gap-10">
          {["Privacy Policy", "Terms of Use"].map((item) => (
            <a key={item} className="hover:text-white transition-colors" href="#">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;