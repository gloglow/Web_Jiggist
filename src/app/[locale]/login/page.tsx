import React from "react";

export default function Login() {
  return (
    <main className="grow flex items-center justify-center p-6 textured-bg">
      <div className="w-full max-w-md">
        <div className="bg-neutral-dark border border-border-muted p-10 rounded-xl shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-serif font-light text-slate-100 mb-3 tracking-wide">Welcome Back</h1>
            <p className="text-slate-400 text-sm font-medium">Access your exclusive bartender benefits</p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
              <input className="w-full bg-background-dark/50 border border-border-muted rounded-lg px-4 py-4 text-slate-100 placeholder:text-slate-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="mixologist@jiggist.com" type="email" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Password</label>
              <div className="relative">
                <input className="w-full bg-background-dark/50 border border-border-muted rounded-lg px-4 py-4 text-slate-100 placeholder:text-slate-600 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="••••••••" type="password" />
                <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-primary" type="button">
                  <span className="material-symbols-outlined text-[20px]">visibility</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-semibold">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input className="rounded border-border-muted bg-background-dark text-primary focus:ring-offset-background-dark focus:ring-primary" type="checkbox" />
                <span className="text-slate-400 group-hover:text-slate-200 transition-colors">Remember me</span>
              </label>
              <a className="text-primary hover:underline" href="#">Forgot password?</a>
            </div>
            <button className="w-full py-4 bg-primary text-background-dark rounded-lg font-extrabold uppercase tracking-widest text-sm hover:brightness-110 shadow-[0_0_20px_rgba(236,164,19,0.2)] transition-all">
              Sign In
            </button>
          </form>
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-border-muted"></div>
            <span className="px-4 text-xs font-semibold text-slate-500 uppercase">
              Or continue with
            </span>
            <div className="flex-grow border-t border-border-muted"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-border-muted rounded-lg hover:bg-white/5 transition-colors">
              <svg className="size-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
              </svg>
              <span className="text-xs font-bold uppercase tracking-tight text-slate-300">Google</span>
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
  );
}