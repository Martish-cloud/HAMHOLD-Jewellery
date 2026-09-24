import React from 'react';
import { Truck, ShieldCheck, RefreshCw, Sparkles, Package } from 'lucide-react';

export default function TrustSection() {
  const trustFeatures = [
    {
      icon: Truck,
      title: 'Insured Shipping',
      desc: 'Complimentary tamper-proof insured express delivery across India for orders above ₹25,000.'
    },
    {
      icon: ShieldCheck,
      title: 'BIS Hallmarked',
      desc: '100% government-approved BIS hallmarked gold and certified lab-graded natural diamonds.'
    },
    {
      icon: RefreshCw,
      title: 'Easy Exchange',
      desc: '15-day complimentary exchange & resize policy with insured home collection.'
    },
    {
      icon: Sparkles,
      title: 'Lifetime Atelier Care',
      desc: 'Complimentary ultrasonic cleaning, prong inspection, and polish refresh at our atelier.'
    },
    {
      icon: Package,
      title: 'Midnight Packaging',
      desc: 'Arrives in our bespoke Obsidian Atelier gift box with certified authenticity cards.'
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-obsidian-light/60 border-t border-b border-champagne/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {trustFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="flex flex-col items-center p-4">
                <div className="w-12 h-12 rounded-full bg-champagne/10 border border-champagne/20 flex items-center justify-center text-champagne mb-3.5">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="font-serif-luxury text-base text-ivory mb-1 font-normal">
                  {feat.title}
                </h4>
                <p className="text-[11px] text-ivory-muted/80 font-sans font-light leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
