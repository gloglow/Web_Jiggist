import ProductDetails from "@/app/components/detail/ProductDetails";
import ProductReview from "@/app/components/detail/ProductReview";
import Navigation from "@/app/components/navigation";
import { getProduct } from "@/repositories/product.server";
import { Locale } from "@/types/locale";
import Product from "@/types/product";
import { useTranslations } from "next-intl";

type Props = {
  params: Promise<{ locale: string, productId: string }>
}

export default async function ProductDetail(
  { params }: Props
) {
  const awaitParams = await params;
  const productId = awaitParams.productId;
  const locale = awaitParams.locale;

  const product = await getProduct(productId);

  let navigationProps = [] as string[]

  if (product?.category) {
    navigationProps.push(product?.category);
  }

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Navigation pageArr={navigationProps} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-4/4 max-w-125 mx-auto w-full rounded-xl overflow-hidden bg-neutral-dark/10 dark:bg-neutral-dark/30 border border-neutral-dark/20">
              <div
                className="w-full h-full bg-cover bg-center"
                data-alt="Close up of a polished gunmetal cocktail shaker"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApH3W0W_JRoE1jqeJdGeZRVmwL7n1pBSwvzfxWzUFBlbVjA2wkSLhXopSNQULNRQlztBoKmHqORKrN8wAjnlUvG6MaxO-FFvWpPL4xrG4IpkqdUCdA30rDcsbc7o0kjWj2KsYN5ymU-2Un2XpIEgMpJGQQyfUvWv13JZfzJuJaIXfL8pH48AZxyykBdGfaYlTwcVQ9cvfrL8nwqgHnhtsUiT6S6d6SIAOJMJQnA5LN_FlgZT9b0psfQLZpwKCvDOFn0ccHMzFkSbw')"
                }}>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 max-w-125 mx-auto">
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary ring-offset-2 ring-primary/20">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Main view of the artisan shaker"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKgSaTE8j_hkVHWKY_zC2TBRhWM7jz1GGTRRXUBfVDdTguwJwVq_WnE_xztESFaUs1Qg0ZSqB5IPzRLW6YkycWviT7wYZTdJhM1WMfIkijkYQWBTG_A1a2vA5t-hgRgOzAK7Dq5JHTBcxRcx66XTPYKjVhRbypp7_FcFUzTUZohLNzUIEr8tizjkuwthNeanHdUOX05-P0T7MyiqR0TWa8FJ5toQop3M414cCMYbZdOEVhyu5aMtBcsf3zNafz0_P6a_6tmP_z8Tg')"
                  }}>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden border border-neutral-dark/20 hover:border-primary/50 cursor-pointer">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Detail shot of the mirror finish texture"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOF-Ycsh6xt7Onz-fUSRXyyQ9xvAxNfZWgl-9HR5dS8QcNL9-BkqxaTdDHATMuw0rk4k1VrhifMj0pA1Kao_FTsz6-iw_b4jKm38QO7Wq0uCX6x8-sp3Q8777nn1aiWbeAKTLqRrFvqRn76AogwdJncjff-s_4UtNzb2aw11H27DWLzRkdJRMJm7Uhob8G5JC1si7PyrCxsaXiHlkN5onICIQjT20dE1gFI3cFJ8Szxcr7kv7ftxnkSkBcCPFyO4p4F9CqeowM3Sw')"
                  }}>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden border border-neutral-dark/20 hover:border-primary/50 cursor-pointer">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Shaker being used by a professional bartender"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJPAll6h6rWjlnTmZbBirJRhZ1aXH6Zc4v87b8obnFiGCTFNU2XttTABYGPq4TjUdDVYCSyPaGSdt7KwwpZwT1WIK-lE4KFi4P3j_go9V8cZ63Rmmo4sQFCS7i5dQjvoMlGNcKWH1mg8IIhNPYda4ry_IyAekw0zKPogRBt2uKBU88uaxU7P0KTLUoBL3G8dP7GT-aLBhXudglfU12CJRF-GmqMEzc-u0oXjZ9DcoKZ46YOs4G2i6O4_mdZWpCxkdJV5aQ8yqn2UQ')"
                  }}>
                </div>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden border border-neutral-dark/20 hover:border-primary/50 cursor-pointer relative">
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Internal view of the shaker strainer"
                  style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcS2aRpWmaPUj8e3KMdxHBE-8i-W2p45LPWAaZBnf3i42EA6Ovbe-9FlEk5UQUsDQLaooveNJ4p6XBe42q4a1IlLAoR7pAy-JOQ1wwxgyNdanMRf47p27hHw1u7AqNoqERsoERF0XIOpp2W6FlmWijiiBswTeW3jDALlpvAOx9BaLKamWQpDh9rQHPmO-IfTJU-FcahRFtNZACcDUf5xjK-SzH4s0Md71VJhIiHt01NEz_VCvly8NGcNLedaCWCxgCehWSzwfjXAM')"
                  }}>
                </div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white font-bold">+2</span>
                </div>
              </div>
            </div>
          </div>
          <ProductDetails
            product={product}
            locale={locale}
          />
        </div>
        <ProductReview/>
      </main>
    </div>
  );
}