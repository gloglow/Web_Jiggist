'use client'
import { useTranslations } from "next-intl"

export default function SignUp() {
  const signUpT = useTranslations("signUp");

  return (
    <main className="max-w-7xl mx-auto w-full px-6 md:px-16 py-10">
      <div className="flex flex-col gap-6 mb-12">
        <nav className="flex items-center gap-2 text-sm text-slate-500">
          <a className="hover:text-primary transition-colors" href="#">Home</a>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-300">{signUpT("title")}</span>
        </nav>
        <div className="flex flex-col gap-6 mt-10 mb-10 ml-80 mr-80">
          <div className="mb-16 text-center">
            <span className="text-primary/80 font-label text-xs tracking-[0.4em] uppercase text-outline mb-4 block">Jiggist</span>
            <h1 className="font-headline text-5xl md:text-6xl font-light text-on-surface leading-tight">{signUpT("title")}</h1>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-outline/20"></div>
              <div className="h-px w-12 bg-outline/20"></div>
            </div>
          </div>
          <form className="space-y-8">
            <div className="group">
              <label className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mb-2 block group-focus-within:text-primary transition-colors">{signUpT("fullName")}</label>
              <input className="w-full bg-surface-container-low border border-outline-variant/20 px-4 py-4 rounded text-on-surface placeholder:text-outline/40 focus:ring-0 focus:border-primary focus:shadow-[0_0_8px_rgba(233,195,73,0.1)] transition-all outline-none" id="full_name" name="full_name" placeholder="E.g. Sterling Archer" type="text" />
            </div>
            <div className="group">
              <label className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mb-2 block group-focus-within:text-primary transition-colors">{signUpT("email")}</label>
              <input className="w-full bg-surface-container-low border border-outline-variant/20 px-4 py-4 rounded text-on-surface placeholder:text-outline/40 focus:ring-0 focus:border-primary focus:shadow-[0_0_8px_rgba(233,195,73,0.1)] transition-all outline-none" id="email" name="email" placeholder="credentials@exclusive.com" type="email" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mb-2 block group-focus-within:text-primary transition-colors">{signUpT("password")}</label>
                <input className="w-full bg-surface-container-low border border-outline-variant/20 px-4 py-4 rounded text-on-surface focus:ring-0 focus:border-primary transition-all outline-none" id="password" name="password" type="password" />
              </div>
              <div className="group">
                <label className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mb-2 block group-focus-within:text-primary transition-colors">{signUpT("confirmPassword")}</label>
                <input className="w-full bg-surface-container-low border border-outline-variant/20 px-4 py-4 rounded text-on-surface focus:ring-0 focus:border-primary transition-all outline-none" id="confirm_password" name="confirm_password" type="password" />
              </div>
            </div>
            <div className="group">
              <label className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mb-2 block group-focus-within:text-primary transition-colors">{signUpT("primaryBar")}</label>
              <input className="w-full bg-surface-container-low border border-outline-variant/20 px-4 py-4 rounded text-on-surface placeholder:text-outline/40 focus:ring-0 focus:border-primary transition-all outline-none" id="establishment" name="establishment" placeholder="The Gilded Shaker" type="text" />
            </div>
            <div className="flex items-start gap-4 py-2">
              <div className="relative flex items-center h-5">
                <input className="h-4 w-4 bg-surface-container-low border-outline-variant/40 rounded text-primary focus:ring-primary focus:ring-offset-surface" id="terms" name="terms" type="checkbox" />
              </div>
              <label className="text-xs text-on-surface-variant leading-relaxed">
                {signUpT("termsOfConduct")} <a className="text-primary hover:underline decoration-primary/30 underline-offset-4" href="#">Terms of Conduct</a>.
              </label>
            </div>
            <div className="">
              <button className="metallic-button w-full py-5 rounded-md text-on-primary font-label text-sm tracking-[0.3em] font-bold uppercase shadow-xl shadow-black/40 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center" type="submit">
                {signUpT("signUp")}
                <span className="material-symbols-outlined text-lg" data-icon="chevron_right">chevron_right</span>
              </button>
            </div>
          </form>
          <div className="flex items-center my-8">
            <div className="flex-1 border-t border-border-muted"></div>

            <span className="px-4 text-xs uppercase font-bold tracking-widest bg-neutral-dark">
              {signUpT("orContinueWith")}
            </span>

            <div className="flex-1 border-t border-border-muted"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-border-muted rounded-lg hover:bg-white/5 transition-colors">
              <svg className="size-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
              </svg>
              <span className="text-xs font-bold uppercase tracking-tight text-slate-300">{signUpT("google")}</span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-border-muted rounded-lg hover:bg-white/5 transition-colors">
              <svg className="size-5 fill-slate-300" viewBox="0 0 24 24">
                <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.702z"></path>
              </svg>
              <span className="text-xs font-bold uppercase tracking-tight text-slate-300">Apple</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}