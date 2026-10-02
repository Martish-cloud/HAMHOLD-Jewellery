import React from 'react';

/**
 * GlobalWatermark
 * Persistent viewport-fixed brand signature rendered at the application's root layout.
 * Always visible across all views, routes, modals, and scroll positions.
 */
export default function GlobalWatermark() {
  return (
    <aside
      aria-label="Website Studio Credit"
      className="fixed bottom-16 lg:bottom-5 right-4 sm:right-6 lg:right-6 z-40 pointer-events-none select-none whitespace-nowrap text-[10px] sm:text-[11px] lg:text-xs font-sans tracking-[0.14em] text-champagne/60 drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]"
    >
      Made by ZYNOVA
    </aside>
  );
}
