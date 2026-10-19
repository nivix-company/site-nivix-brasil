'use client';

import React from "react";

export default function SplitFlagBg() {
  return (
    <div 
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] h-[520px] md:h-[660px] pointer-events-none z-0 select-none overflow-hidden flex items-center justify-center"
      style={{
        maskImage: "radial-gradient(ellipse 75% 65% at 50% 46%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 48%, rgba(0,0,0,0) 78%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 46%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 48%, rgba(0,0,0,0) 78%)",
      }}
    >
      <img
        src="/flags-blend.jpg"
        alt="Bandeiras reais do Brasil e EUA conectadas em tecido ondulado"
        className="w-full h-full object-cover object-center opacity-20 md:opacity-28 filter contrast-110 saturate-105 pointer-events-none"
      />
    </div>
  );
}
