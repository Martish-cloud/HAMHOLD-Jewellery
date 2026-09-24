import React from 'react';
import { Compass, Hammer, Sparkles, Gem, CheckCircle } from 'lucide-react';

export default function Craftsmanship() {
  const steps = [
    {
      num: '01',
      title: 'Architectural Design',
      icon: Compass,
      desc: 'Every piece begins with hand-drawn structural sketches and high-precision micro-CAD modeling to engineer ideal balance, ergonomics, and light refraction.'
    },
    {
      num: '02',
      title: 'Goldsmith Metallurgy',
      icon: Hammer,
      desc: 'Master artisans alloy and forge 18K solid gold and 950 platinum under controlled atelier heat, ensuring dense, pore-free precious metal foundations.'
    },
    {
      num: '03',
      title: 'Microscope Setting',
      icon: Gem,
      desc: 'Each natural diamond and precious gemstone is seated under 40x optical magnification, with prongs and bezels hand-burnished to secure stones seamlessly.'
    },
    {
      num: '04',
      title: 'Multistage Polishing',
      icon: Sparkles,
      desc: 'Using natural bristle wheels and diamond pastes, craftsmen polish hidden galleries, interior courts, and outer facets into an unbroken liquid-mirror sheen.'
    },
    {
      num: '05',
      title: 'Hallmark Inspection',
      icon: CheckCircle,
      desc: 'Before receiving the official HAMHOLD seal, every creation undergoes strict 12-point quality validation and government-approved BIS hallmarking verification.'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-obsidian border-t border-champagne/15 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-espresso/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-champagne font-medium block mb-2">
            The Atelier Standard
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-ivory tracking-[0.03em] font-normal mb-4">
            CRAFTED WITH INTENTION.
          </h2>
          <p className="text-ivory-muted text-xs sm:text-sm font-sans font-light leading-relaxed">
            The bridge between centuries of classical goldsmithing knowledge and modern precision fine jewellery engineering.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="group p-6 rounded-xl bg-obsidian-card/60 hover:bg-obsidian-light/80 border border-champagne/15 hover:border-champagne/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif-luxury text-2xl text-champagne font-light">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                  </div>
                  <h3 className="font-serif-luxury text-lg text-ivory mb-2.5 font-normal">
                    {st.title}
                  </h3>
                  <p className="text-ivory-muted/80 text-xs font-sans font-light leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-champagne/10 text-[9px] uppercase tracking-widest text-champagne/60 font-mono">
                  Atelier HAMHOLD
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
