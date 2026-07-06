'use client';

import React from 'react';

/**
 * Fixed, full-viewport vaporwave backdrop that sits behind all content.
 * Renders a deep gradient sky, a striped retro sun, and an animated
 * perspective grid floor. Purely decorative — never intercepts pointer events.
 */
export default function VaporBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Sky gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b2e] via-[#2b0f4a] to-[#3a1250] light-theme:from-[#fdf0ff] light-theme:via-[#ffe6fb] light-theme:to-[#e6f7ff]" />

      {/* Retro sun */}
      <div className="absolute left-1/2 top-[14%] -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96">
        {/* solid top half */}
        <div className="vapor-sun-top absolute inset-x-0 top-0 h-1/2 rounded-t-full" />
        {/* striped bottom half */}
        <div className="vapor-sun absolute inset-x-0 bottom-0 h-1/2 rounded-b-full" />
      </div>

      {/* Perspective grid floor */}
      <div className="absolute inset-x-0 bottom-0 h-[45vh] overflow-hidden">
        <div className="vapor-floor absolute inset-0" />
      </div>

      {/* Horizon glow line */}
      <div className="absolute inset-x-0 bottom-[45vh] h-px bg-gradient-to-r from-transparent via-brand-purple to-transparent shadow-[0_0_20px_4px_rgba(255,106,213,0.6)]" />
    </div>
  );
}
