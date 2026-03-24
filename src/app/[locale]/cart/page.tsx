export default function Cart() {
  return (
    <main className="grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10">
        <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white">Shopping Cart</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">You have 2 items in your cart</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl border border-primary/10 bg-white/5 dark:bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="w-24 h-24 shrink-0 bg-primary/10 rounded-lg overflow-hidden border border-primary/20">
              <img className="w-full h-full object-cover" data-alt="Polished gold bartender jigger tool" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz7hpScxeqGoG4-HmLEFUXl2sGiUpWMFbvZvEKfjrvCbtIu9Ad0YX2x3MbV5BFY0PC3sGkD5yHKN9et17NEF8SPlU_mQC8bbYQTGzsCPTX4ZooqjGPWkMsEf_wktG-LuU97fX_i9jsFcXhw2KRrElIsE18azTnf8PvecMeu5zMkgjlLTsmlFuI1242jl7h68_8wa9leqizOzmHJbOAmwVpvgqsfb7p6qMzS7XeVS021Lnm3TQPMCFDW6IfxxyJaop1APwG_SiMKu4" />
            </div>
            <div className="grow text-center sm:text-left">
              <h3 className="font-display text-xl font-bold dark:text-white">Gold Japanese Jigger</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">24k Gold Plated / 1oz &amp; 2oz</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-primary/30 rounded-lg overflow-hidden">
                <button className="px-3 py-1 hover:bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <span className="px-3 py-1 text-sm font-medium dark:text-white">1</span>
                <button className="px-3 py-1 hover:bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
              <div className="text-right min-w-20">
                <p className="font-bold dark:text-white">$45.00</p>
              </div>
              <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl border border-primary/10 bg-white/5 dark:bg-primary/5 hover:bg-primary/10 transition-colors">
            <div className="w-24 h-24 shrink-0 bg-primary/10 rounded-lg overflow-hidden border border-primary/20">
              <img className="w-full h-full object-cover" data-alt="Crystal clear cocktail mixing glass" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Zg4FAq40DEq1ovgdxtZBXX62wH-UFUnx_T9gXWLqQRQRTnqvnG0UnD31gtY1YHFhze3olAVhhUc0yc9KJ6Glq8JprmYj49IWyQekBaTs0Kj5FarpwtQvAmn5Wny_4pS1xB9jh04U4f90NfnYBJNGmmIUOOBpOivSfBXEuCT8lcju1bgTKgRbyrrbsLXX3qNLLzj-PCdpUipUbZ1UUUql_J2XddWCL8TOPreZTFwqfU5BHdYxRIRJxc1g33cqVJopUtKV6Ra0US0" />
            </div>
            <div className="grow text-center sm:text-left">
              <h3 className="font-display text-xl font-bold dark:text-white">Seamless Mixing Glass</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Hand-blown Lead-free Crystal</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-primary/30 rounded-lg overflow-hidden">
                <button className="px-3 py-1 hover:bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <span className="px-3 py-1 text-sm font-medium dark:text-white">1</span>
                <button className="px-3 py-1 hover:bg-primary/20 text-primary">
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
              <div className="text-right min-w-20">
                <p className="font-bold dark:text-white">$65.00</p>
              </div>
              <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          </div>
          <div className="pt-6 border-t border-primary/10">
            <a className="flex items-center gap-2 text-primary hover:gap-4 transition-all font-medium" href="#">
              <span className="material-symbols-outlined">arrow_back</span>
              Continue Shopping
            </a>
          </div>
        </div>
        <div className="lg:col-span-1">
          <div className="bg-primary/5 dark:bg-primary/5 border border-primary/20 rounded-xl p-8 sticky top-28">
            <h3 className="font-display text-2xl font-bold mb-8 dark:text-white">Order Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Subtotal</span>
                <span className="font-medium dark:text-white">$110.00</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Estimated Shipping</span>
                <span className="font-medium dark:text-white">$15.00</span>
              </div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400">
                <span>Tax</span>
                <span className="font-medium dark:text-white">$0.00</span>
              </div>
              <div className="pt-4 border-t border-primary/20 flex justify-between items-center">
                <span className="text-lg font-bold dark:text-white">Total</span>
                <span className="text-2xl font-display font-bold text-primary">$125.00</span>
              </div>
            </div>
            <div className="space-y-4">
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/20 transition-all uppercase tracking-widest text-sm">
                Proceed to Checkout
              </button>
              <div className="flex items-center justify-center gap-4 py-4">
                <span className="material-symbols-outlined text-primary">lock</span>
                <p className="text-xs text-slate-500 dark:text-slate-400">Secure Encrypted Checkout</p>
              </div>
            </div>
            <div className="mt-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Discount Code
                <div className="flex gap-2">
                  <input className="bg-transparent border border-primary/20 rounded-lg px-4 py-2 text-sm focus:ring-primary focus:border-primary grow" placeholder="Enter code" type="text" />
                  <button className="px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary text-xs font-bold rounded-lg transition-colors">Apply</button>
                </div>
              </label></div>
          </div>
        </div>
      </div>
    </main>
  )
}