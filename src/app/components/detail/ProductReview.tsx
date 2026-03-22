import { useTranslations } from "next-intl";

export default function ProductReview() {
  const productDetailT = useTranslations("productDetail");

  return (
    <div className="mt-20 border-t border-neutral-dark/20 pt-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">{productDetailT("reviewsCapital")}</h2>
          <span className="text-sm text-neutral-muted">124 {productDetailT("reviews")}</span>
        </div>
        <div className="space-y-8 mb-12">
          {[1, 2, 3].map((review) => (
            <div key={review} className="border-b border-neutral-dark/20 pb-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-dark/30 flex items-center justify-center text-xs font-bold">
                    JD
                  </div>
                  <span className="text-sm font-medium">John Doe</span>
                </div>
                <span className="text-xs text-neutral-muted">2 days ago</span>
              </div>

              <div className="flex items-center gap-1 text-primary mb-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className="material-symbols-outlined text-sm fill-1">
                    star
                  </span>
                ))}
              </div>

              <p className="text-sm text-neutral-muted leading-relaxed">
                Absolutely love this shaker. The weight and balance feel perfect.
              </p>
            </div>
          ))}
        </div>
        <div className="p-6 rounded-xl border border-neutral-dark/20 bg-neutral-dark/5 dark:bg-neutral-dark/20">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">
            {productDetailT("writeAReview")}
          </h3>

          <div className="flex items-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star}>
                <span className="material-symbols-outlined text-neutral-muted hover:text-primary">
                  star
                </span>
              </button>
            ))}
          </div>

          <textarea
            placeholder={productDetailT("shareYourExperience")}
            className="w-full h-28 p-4 rounded-lg border border-neutral-dark/20 bg-transparent text-sm outline-none focus:border-primary resize-none mb-4"
          />

          <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition">
            {productDetailT("submitReview")}
          </button>
        </div>
      </div>
    </div>
  );
}