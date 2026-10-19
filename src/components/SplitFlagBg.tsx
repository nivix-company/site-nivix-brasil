'use client';

import React from "react";

export default function SplitFlagBg() {
  return (
    <div 
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[1100px] h-[380px] md:h-[480px] pointer-events-none z-0 select-none overflow-hidden flex items-center justify-center"
      style={{
        maskImage: "radial-gradient(ellipse 70% 60% at 50% 48%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0) 75%)",
        WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 48%, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 45%, rgba(0,0,0,0) 75%)",
      }}
    >
      <img
        src="/flags-blend.jpg"
        alt="Bandeiras reais do Brasil e EUA conectadas em tecido ondulado"
        className="w-full h-full object-cover object-center opacity-12 md:opacity-16 filter contrast-105 saturate-100 pointer-events-none"
      />
    </div>
  );
}
