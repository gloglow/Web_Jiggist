export default function Products() {
  return (
    <main className="max-w-7xl mx-auto w-full px-6 md:px-16 py-10">
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
          <div className="flex items-center gap-3">
            <span className="text-slate-400 text-sm">Sort by:</span>
            <button className="flex items-center gap-2 bg-neutral-dark px-4 py-2 rounded-lg border border-border-muted text-sm font-medium">
              Featured <span className="material-symbols-outlined text-sm">expand_more</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-28 flex flex-col gap-8">
            <div className="flex items-center justify-between">
              <h3 className="text-slate-100 font-bold uppercase tracking-widest text-xs">Filters</h3>
              <button className="text-primary text-xs font-semibold hover:underline">Clear All</button>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-slate-200 text-sm font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-lg opacity-70">science</span> Material
              </h4>
              <div className="flex flex-col gap-2">
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
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-slate-200 text-sm font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-lg opacity-70">category</span> Category
              </h4>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1.5 rounded-full bg-primary text-slate-100 text-xs font-medium">Shakers</button>
                <button className="px-3 py-1.5 rounded-full bg-neutral-dark border border-border-muted text-slate-400 text-xs font-medium hover:text-slate-100 transition-colors">Stirring</button>
                <button className="px-3 py-1.5 rounded-full bg-neutral-dark border border-border-muted text-slate-400 text-xs font-medium hover:text-slate-100 transition-colors">Cutting</button>
                <button className="px-3 py-1.5 rounded-full bg-neutral-dark border border-border-muted text-slate-400 text-xs font-medium hover:text-slate-100 transition-colors">Jiggers</button>
                <button className="px-3 py-1.5 rounded-full bg-neutral-dark border border-border-muted text-slate-400 text-xs font-medium hover:text-slate-100 transition-colors">Strainers</button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-slate-200 text-sm font-semibold flex items-center gap-2">
                <span className="material-symbols-outlined text-lg opacity-70">payments</span> Price Range
              </h4>
              <div className="px-2">
                <div className="h-1 w-full bg-border-muted rounded-full relative">
                  <div className="absolute left-1/4 right-1/4 h-full bg-primary rounded-full"></div>
                  <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-100 rounded-full border-2 border-primary cursor-pointer shadow-lg"></div>
                  <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-100 rounded-full border-2 border-primary cursor-pointer shadow-lg"></div>
                </div>
                <div className="flex justify-between mt-4">
                  <span className="text-xs text-slate-400">$45</span>
                  <span className="text-xs text-slate-400">$250</span>
                </div>
              </div>
            </div>
            <button className="mt-4 w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg text-sm transition-all shadow-lg shadow-primary/20">
              Apply Filters
            </button>
          </div>
        </aside>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <div className="group relative flex flex-col bg-neutral-dark rounded-xl border border-border-muted overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden bg-background-dark relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="Professional copper cocktail shaker set on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClNEz3Kyv7b9NfttHAaqzP3lmE_qaJA3xmscSBot2Hr3Rx8SOaxlyOQBRzvgzLw6Xna0TuwvUeeme8UWCTkyTyl4axu0z3PLQAss-ZC_jUqtYATbX-A21rW1HGQjJLY3_duLytmVBaFe_lxF6QhEYikJxM4m6h9PZ7zEwh3pVlAQC7RAU2XDeK4v_If99GHnJNMMnpoyOHMLKQHROHc9wkrNZkIUuNnV3oEfuJd92TYdZLoDb3Nf0S3tUCQ2sp7HkKxrpy8Ehs7Vo" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <button className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Add to Cart
                  </button>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Premium</span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Yukiwa</p>
                    <h3 className="text-slate-100 font-bold group-hover:text-primary transition-colors">Baron Copper Shaker</h3>
                  </div>
                  <span className="text-primary font-bold">$125.00</span>
                </div>
                <p className="text-slate-400 text-xs line-clamp-2">500ml capacity, heavy-duty copper plating with a precision-fit lid for leak-proof performance.</p>
              </div>
            </div>
            <div className="group relative flex flex-col bg-neutral-dark rounded-xl border border-border-muted overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden bg-background-dark relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="Minimalist crystal mixing glass for cocktails" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcFXG5kUCdpin39EP_iWwVo9foMLW5MocHVLqUeNEr_K5tyTKILmgl-v_cyrC1qmBi8GG70bwIP0qBVCEMVVE4XC5wDkapRc-MDBv_WNx0N-45G7JruSYzcH86Cua0qg_nffRpL6m3Xh2KHIL20RqE5EGGoYcjt-hO48ZtwW6IPKjLCsviScBfwwDWPH9mI93LheKJXBsTfjE6nTiayWtsYWWYTlSIznt6BjTm4X-df9GT-9D6pDejN2cT05scs9jHePuMRmms2WQ" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <button className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Hario</p>
                    <h3 className="text-slate-100 font-bold group-hover:text-primary transition-colors">Japanese Mixing Glass</h3>
                  </div>
                  <span className="text-primary font-bold">$68.00</span>
                </div>
                <p className="text-slate-400 text-xs line-clamp-2">Hand-etched diamond pattern, thick base for stability, and ultra-clear borosilicate glass.</p>
              </div>
            </div>
            <div className="group relative flex flex-col bg-neutral-dark rounded-xl border border-border-muted overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden bg-background-dark relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="Gold plated multi-level Japanese jigger" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5x1bWqUvxgFoL5h91a6uffyBnZyVXEWNjsLdtQhwpqTTjKEz1RpxBrqzXArjHfFSC-SOdO__2vb4k67iD8FH-77rFmJUZs-IYBt_2IATNPV0DvDy8WIba-rojNHmObm-6IK_uE29linCekNlW_YM4QGV6bylzB0zKWs2k7UcnhafKWhbt9nveJv7z63JEete4v7boUqaNnR1Zl5ezaRwkNCr8Vl66c5-kfHqs-VkamhP56syd6x79QBrn9ddBLuVZxDTh2RiyE-4" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <button className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Koriko</p>
                    <h3 className="text-slate-100 font-bold group-hover:text-primary transition-colors">Gold Bell Jigger</h3>
                  </div>
                  <span className="text-primary font-bold">$45.00</span>
                </div>
                <p className="text-slate-400 text-xs line-clamp-2">Precision internal markings for accurate measurements of 1oz and 2oz pours.</p>
              </div>
            </div>
            <div className="group relative flex flex-col bg-neutral-dark rounded-xl border border-border-muted overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden bg-background-dark relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="Stainless steel bar spoon with teardrop handle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5f-pffTiZZBt9zgICqB8BhX1Id0MWpdZkhW5qeOpFWcGjIg-MOJm9K6MYbecpr4DPZE0MEWzbGOnWEYmyR_2zLirwLpxlCrW6VqU9TbyXpoDgARH2lw492hgvtAUU93UqgUngBsktqM1b8OsLK1D7Yo39Y6BG5Kl84IkYBeML6NLMR6XS11oiQDDYL3kk1V9URfqMxvzVj-xBEP_tRFe5BYaHQMOHK_xza9aylsxY9qFsjjYMgMdZxzSNjH4eeXSOEfEi652n3uY" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <button className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Viski</p>
                    <h3 className="text-slate-100 font-bold group-hover:text-primary transition-colors">Teardrop Bar Spoon</h3>
                  </div>
                  <span className="text-primary font-bold">$22.00</span>
                </div>
                <p className="text-slate-400 text-xs line-clamp-2">40cm length with twisted stem for seamless stirring and perfect layering of spirits.</p>
              </div>
            </div>
            <div className="group relative flex flex-col bg-neutral-dark rounded-xl border border-border-muted overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden bg-background-dark relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="Professional grade Hawthorne strainer stainless steel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAndi4JYihTQzM9AA_e-THFy4MMC4uuzWBs8k8_MOmZrT0-3ukpUSZ1N__JXSEyt_YBzq9yx1PKJPWybmiM9eOVMMLXSovjDASGUjEbeCNpI1bmXuq9dj7Hp3CeDWgpYA0aeSZYPdM1GY9bRpiw3nl7jOSNMtyyEwFloL5vsEupDEGBNXDnhdjOw-F2-BiS55zLhfX4Kh_VB0X3IrEbEM-R1k8q64mBbVO-A1p33mcENGFuEe_brv2cP-3zzpeeCakbxHFcSUQRi9U" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <button className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">A Bar Above</p>
                    <h3 className="text-slate-100 font-bold group-hover:text-primary transition-colors">Heavyweight Strainer</h3>
                  </div>
                  <span className="text-primary font-bold">$34.00</span>
                </div>
                <p className="text-slate-400 text-xs line-clamp-2">Extra tight coil for fine straining, made from high-grade 304 stainless steel.</p>
              </div>
            </div>
            <div className="group relative flex flex-col bg-neutral-dark rounded-xl border border-border-muted overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden bg-background-dark relative">
                <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" data-alt="Selection of premium bitters in glass bottles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuOmi3MHTY7hqOCsyfK5IogzhF6S-1HsXN9mjrcdEztJTBC_qfkm_0BUKlvTPdvamQRU_IzxibkC42tjvJqVBkXfE7mMiBj88KX-4xfnhlwht5lU8iplzSAJ-m8a6VuPaVbk_kEdsHtDXH2i0YFH21aG_i8nWuYrUi_sqiXazDbluivmL6YJLvSEDvIjIrbno7K0SjjGiwcH9wLuSivk611Dj5HGDyCiHedtISCsxF3HCcBW7H4jC16a_RDPbKfwcc2MUOx97NPN4" />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <button className="w-full bg-primary text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <span className="material-symbols-outlined text-sm">add_shopping_cart</span> Add to Cart
                  </button>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Bitters Lab</p>
                    <h3 className="text-slate-100 font-bold group-hover:text-primary transition-colors">Artisan Bitters Trio</h3>
                  </div>
                  <span className="text-primary font-bold">$55.00</span>
                </div>
                <p className="text-slate-400 text-xs line-clamp-2">Includes Aromatic, Orange, and Chocolate bitters. Hand-crafted in small batches.</p>
              </div>
            </div>
          </div>
          <div className="mt-16 flex justify-center items-center gap-4">
            <button className="w-10 h-10 rounded-lg bg-neutral-dark border border-border-muted flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 rounded-lg bg-primary text-white font-bold">1</button>
            <button className="w-10 h-10 rounded-lg bg-neutral-dark border border-border-muted text-slate-400 font-bold hover:text-slate-100 transition-all">2</button>
            <button className="w-10 h-10 rounded-lg bg-neutral-dark border border-border-muted text-slate-400 font-bold hover:text-slate-100 transition-all">3</button>
            <span className="text-slate-600">...</span>
            <button className="w-10 h-10 rounded-lg bg-neutral-dark border border-border-muted text-slate-400 font-bold hover:text-slate-100 transition-all">12</button>
            <button className="w-10 h-10 rounded-lg bg-neutral-dark border border-border-muted flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}