import React from 'react';
import { Heart, Sparkles, Clock, Compass } from 'lucide-react';

export default function BrandStory() {
  const pillars = [
    {
      icon: Clock,
      title: 'Crafted to Hold Forever',
      desc: 'Jewellery should not be transient fast fashion. We create pieces engineered structurally to last generations, holding their emotional significance intact.'
    },
    {
      icon: Sparkles,
      title: 'Sovereign Materials',
      desc: 'From solid 18K gold to 950 platinum and naturally certified conflict-free diamonds, our materials are selected for purity, luster, and longevity.'
    },
    {
      icon: Compass,
      title: 'Architectural Balance',
      desc: 'Our design philosophy merges clean neoclassical geometry with comfortable, modern curves that adapt seamlessly to daily living.'
    },
    {
      icon: Heart,
      title: 'Milestones & Memories',
      desc: 'Whether marking a personal victory, an anniversary, or a quiet everyday celebration, HAMHOLD creations act as an enduring anchor for what matters.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-espresso-dark/40 border-t border-champagne/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-champagne font-medium block mb-3">
              Brand Philosophy
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-ivory tracking-[0.03em] font-normal leading-[1.12] mb-6">
              WHY <br />
              <span className="text-gold-gradient">HAMHOLD?</span>
            </h2>
            <p className="text-ivory-soft text-sm sm:text-base font-sans font-light leading-relaxed mb-6">
              Founded on the belief that fine jewellery is the ultimate vessel of human memory. In a fast-moving world, certain moments demand a physical anchor — something precious, beautiful, and enduring.
            </p>
            <p className="text-ivory-muted text-xs sm:text-sm font-sans font-light leading-relaxed mb-8">
              At HAMHOLD, every cut of gold and setting of stone is measured against one timeless standard: will this piece hold its emotional weight fifty years from today?
            </p>

            <div className="p-5 rounded-xl bg-obsidian-card/80 border border-champagne/20 backdrop-blur-md">
              <span className="font-serif-luxury text-base text-champagne italic block mb-1">
                "Crafted to Hold Forever."
              </span>
              <span className="text-[10px] uppercase tracking-widest text-ivory-muted font-sans">
                The HAMHOLD Atelier Motto
              </span>
            </div>
          </div>

          {/* Right Grid of 4 Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-obsidian-card/60 border border-champagne/15 hover:border-champagne/35 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne mb-4">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif-luxury text-lg text-ivory mb-2 font-normal">
                    {pil.title}
                  </h3>
                  <p className="text-ivory-muted text-xs font-sans font-light leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
