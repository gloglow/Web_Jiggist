'use client'
import Navigation from "@/app/components/navigation";
import { useForm } from "react-hook-form";
import { login, loginWithGoogle } from "@/repositories/auth";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const navigationProps = ["login"];

export default function Login() {
  const router = useRouter();

  const commonT = useTranslations("common");
  const loginT = useTranslations("login");

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = async (data: { email: string, password: string }) => {
    try {
      const user = await login(data.email, data.password);
      router.push("/");
    } catch (error) {
      alert("Invalid email or password.")
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      router.push("/");
    } catch (error) {
      alert("Google login failed.");
    }
  }

  return (
    <main className="max-w-7xl mx-auto w-full px-6 md:px-16 py-10">
      <div className="flex flex-col gap-6 mb-12">
        <Navigation pageArr={navigationProps} />
        <div className="flex flex-col gap-6 mt-10 mb-10 mx-4 md:mx-20 lg:mx-70">
          <div className="mb-16 text-center">
            <span className="text-primary/80 font-label text-xs tracking-[0.4em] uppercase text-outline mb-4 block">
              {commonT("jiggist")}
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-light text-on-surface leading-tight">
              Login
            </h1>
          </div>

          <form
            className="space-y-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="group">
              <label className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mb-2 block group-focus-within:text-primary transition-colors">
                {loginT("email")}
              </label>
              <input
                {...register("email")}
                className="w-full bg-surface-container-low border border-outline-variant/20 px-4 py-4 rounded text-on-surface placeholder:text-outline/40 focus:ring-0 focus:border-primary focus:shadow-[0_0_8px_rgba(233,195,73,0.1)] transition-all outline-none"
                placeholder={loginT("egEmail")}
                type="text"
              />
            </div>

            <div className="group">
              <label className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mb-2 block group-focus-within:text-primary transition-colors">
                {loginT("password")}
              </label>
              <input
                {...register("password")}
                className="w-full bg-surface-container-low border border-outline-variant/20 px-4 py-4 rounded text-on-surface focus:ring-0 focus:border-primary transition-all outline-none"
                type="password"
              />
            </div>

            <div className="flex justify-end gap-4 text-xs text-on-surface-variant">
              <button
                type="button"
                className="hover:text-primary transition-colors"
              >
                {loginT("forgotPassword")}
              </button>
            </div>

            <div>
              <button
                className="metallic-button w-full py-5 rounded-md text-on-primary font-label text-sm tracking-[0.3em] font-bold uppercase shadow-xl shadow-black/40 
            bg-neutral-900 hover:bg-neutral-700 active:bg-neutral-600 
            transition-all flex items-center justify-center"
                type="submit"
              >
                {loginT("login")}
                <span className="material-symbols-outlined text-lg">
                  chevron_right
                </span>
              </button>
            </div>
          </form>

          <div className="flex items-center my-8">
            <div className="grow border-t border-border-muted"></div>
            <span className="px-4 text-xs uppercase font-bold tracking-widest bg-neutral-dark">
              {loginT("orContinueWith")}
            </span>
            <div className="grow border-t border-border-muted"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center gap-2 py-3 px-4 border border-border-muted rounded-lg hover:bg-white/5 transition-colors"
            >
              <svg className="size-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335"></path>
              </svg>
              <span className="text-xs font-bold uppercase tracking-tight text-slate-300">
                {loginT("google")}
              </span>
            </button>

            <button className="flex items-center justify-center gap-2 py-3 px-4 border border-border-muted rounded-lg hover:bg-white/5 transition-colors">
              <span className="text-xs font-bold uppercase tracking-tight text-slate-300">
                Apple
              </span>
            </button>
          </div>

          <div className="text-center text-xs text-on-surface-variant mt-6">
            {loginT("signupMessage")}{"  "}
            <a href="/signup" className="text-primary hover:underline">
              {loginT("signup")}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}