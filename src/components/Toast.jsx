import React from 'react';
import { useShop } from '../context/ShopContext';
import { Sparkles } from 'lucide-react';

export default function Toast() {
  const { toastMessage } = useShop();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-6 z-50 animate-fade-in flex items-center space-x-3 px-5 py-3.5 rounded-full bg-obsidian-card/95 border border-champagne/40 text-ivory shadow-2xl backdrop-blur-md">
      <Sparkles className="w-4 h-4 text-champagne shrink-0 animate-pulse" />
      <span className="text-xs uppercase tracking-wider font-medium text-ivory">
        {toastMessage}
      </span>
    </div>
  );
}
