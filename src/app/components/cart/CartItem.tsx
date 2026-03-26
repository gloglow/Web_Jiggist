'use client'
import { CartItemWithProduct } from "@/types/cart";
import { Locale } from "@/types/locale";
import { useLocale, useTranslations } from "next-intl";
import { t } from "../../../../lib/i18n"

type Props = {
  cartItem: CartItemWithProduct
}

export default function CartItem({ cartItem }: Props) {
  const commonT = useTranslations("common");
  const locale = useLocale() as Locale;

  const price = cartItem.product.price;
  const quentity = cartItem.quentity;
  const totalPrice = price * quentity;
  
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-xl border border-primary/10 bg-white/5 dark:bg-primary/5 hover:bg-primary/10 transition-colors">
      <div className="w-24 h-24 shrink-0 bg-primary/10 rounded-lg overflow-hidden border border-primary/20">
        <img className="w-full h-full object-cover" data-alt="Polished gold bartender jigger tool" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz7hpScxeqGoG4-HmLEFUXl2sGiUpWMFbvZvEKfjrvCbtIu9Ad0YX2x3MbV5BFY0PC3sGkD5yHKN9et17NEF8SPlU_mQC8bbYQTGzsCPTX4ZooqjGPWkMsEf_wktG-LuU97fX_i9jsFcXhw2KRrElIsE18azTnf8PvecMeu5zMkgjlLTsmlFuI1242jl7h68_8wa9leqizOzmHJbOAmwVpvgqsfb7p6qMzS7XeVS021Lnm3TQPMCFDW6IfxxyJaop1APwG_SiMKu4" />
      </div>
      <div className="grow text-center sm:text-left">
        <h3 className="font-display text-xl font-bold dark:text-white">{t(cartItem.product.name, locale)}</h3>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-primary/30 rounded-lg overflow-hidden">
          <button className="px-3 py-1 hover:bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-sm">remove</span>
          </button>
          <span className="px-3 py-1 text-sm font-medium dark:text-white">{quentity}</span>
          <button className="px-3 py-1 hover:bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
        <div className="text-right min-w-20">
          <p className="font-bold dark:text-white">{totalPrice + commonT("yen")}</p>
        </div>
        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}