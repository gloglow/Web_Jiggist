// src/app/page.tsx
import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] w-full overflow-hidden flex items-center">
          <img alt="Premium Barware" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
          <div className="relative z-20 max-w-[1440px] mx-auto w-full px-6 lg:px-20">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-4 bg-accent/10 border border-accent/20 px-4 py-2 rounded-full backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px]">Seasonal Curations 2024</span>
              </div>
              <h2 className="text-6xl lg:text-8xl font-serif leading-[1.1]">
                Elevated <br/><span className="italic text-accent">Equipment</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg font-light">
                The Winter Reserve collection has arrived. Professional-grade precision for the discerning mixologist.
              </p>
              <div className="flex flex-wrap gap-5 pt-4">
                <button className="bg-white text-black px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-all duration-300">
                  Explore Collection
                </button>
                <button className="bg-transparent border border-white/30 text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:border-accent hover:text-accent transition-all duration-300">
                  View Lookbook
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Grid Section (예시 상품 하나만 구현, 실제로는 .map 활용 권장) */}
        <section className="py-32 px-6 lg:px-20 max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h3 className="text-4xl font-serif">Curated Recommendations</h3>
              <p className="text-slate-500 max-w-md">Hand-selected tools recommended by our lead bar consultants.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border-dark border border-border-dark overflow-hidden rounded-lg">
            {/* Product Card Component */}
            <div className="bg-background-dark group relative flex flex-col p-8 transition-colors hover:bg-surface-dark">
               <div className="aspect-[3/4] mb-8 overflow-hidden bg-zinc-900 rounded flex items-center justify-center">
                 {/* 실제 이미지 경로로 수정 필요 */}
                 <span className="text-zinc-700 font-serif">Product Image</span>
               </div>
               <div className="mt-auto space-y-3">
                 <p className="text-[10px] text-accent font-bold uppercase tracking-widest mb-1">Precision</p>
                 <h4 className="text-lg font-serif text-white">Ebonized Multi-Level Jigger</h4>
                 <div className="flex items-center justify-between pt-4 border-t border-border-dark">
                   <span className="text-lg font-bold text-white">$48.00</span>
                   <button className="w-10 h-10 border border-border-dark flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                     <span className="material-symbols-outlined text-sm">add</span>
                   </button>
                 </div>
               </div>
            </div>
            {/* ... 반복 ... */}
          </div>
        </section>
      </main>
    </div>
  );
}