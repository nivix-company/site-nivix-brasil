'use client';

import React from "react";

export default function SplitFlagBg() {
  return (
    <div 
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98%] max-w-[1250px] h-[550px] md:h-[650px] pointer-events-none z-0 select-none overflow-hidden"
      style={{
        maskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0) 85%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0) 85%)",
      }}
    >
      <div className="w-full h-full relative flex items-center justify-center opacity-45 md:opacity-55 transition-opacity duration-1000">
        <svg
          viewBox="0 0 1400 750"
          className="w-full h-full object-cover filter drop-shadow-[0_0_40px_rgba(0,0,0,0.8)]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Filter for organic painterly watercolor texture */}
            <filter id="paintTexture" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feGaussianBlur in="displaced" stdDeviation="1.5" />
            </filter>

            {/* Gradient between Brazil and USA in the center */}
            <linearGradient id="flagBlend" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#009c3b" stopOpacity="0.8" />
              <stop offset="42%" stopColor="#f59e0b" stopOpacity="0.75" />
              <stop offset="55%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="68%" stopColor="#e11d48" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.9" />
            </linearGradient>

            {/* Organic Brazil Gold Gradient */}
            <linearGradient id="brazilGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0.7" />
            </linearGradient>

            {/* Organic Brazil Emerald Gradient */}
            <linearGradient id="brazilGreen" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#00732b" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#009c3b" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.75" />
            </linearGradient>

            {/* Star shape */}
            <g id="usaStar">
              <polygon
                points="0,-7 2.1,-2.3 7.2,-2.3 3.1,0.8 4.6,5.7 0,2.6 -4.6,5.7 -3.1,0.8 -7.2,-2.3 -2.1,-2.3"
                fill="#ffffff"
                opacity="0.95"
              />
            </g>
          </defs>

          {/* =========================================================
              LAYER 1: ORGANIC FLUID PAINTED STROKES (BACKGROUND FUSION)
             ========================================================= */}
          
          {/* Brazil Green - Fluid, brush-stroke waves sweeping from the left */}
          <path
            d="M 20,120 
               C 180,60 340,90 480,180 
               C 580,240 680,210 740,290 
               C 800,380 690,490 560,540 
               C 380,610 200,680 50,580 
               C -40,510 -20,240 20,120 Z"
            fill="url(#brazilGreen)"
            filter="url(#paintTexture)"
            opacity="0.85"
          />

          <path
            d="M 60,220 
               C 220,160 380,220 540,290 
               C 660,350 710,430 620,520 
               C 490,630 310,590 180,510 
               C 80,440 20,310 60,220 Z"
            fill="#009c3b"
            opacity="0.6"
            filter="url(#paintTexture)"
          />

          {/* Brazil Gold - Dynamic diamond brush sweep crossing the center */}
          <path
            d="M 320,140 
               C 420,160 520,260 580,350 
               C 640,430 540,510 440,540 
               C 320,570 210,490 190,390 
               C 170,280 230,120 320,140 Z"
            fill="url(#brazilGold)"
            filter="url(#paintTexture)"
            opacity="0.75"
          />

          {/* Brazil Celestial Blue Organic Splash */}
          <path
            d="M 280,280 
               C 360,260 430,310 440,380 
               C 450,450 380,490 310,480 
               C 230,470 210,410 230,340 
               C 240,290 260,290 280,280 Z"
            fill="#002776"
            filter="url(#paintTexture)"
            opacity="0.9"
          />

          {/* White curved painted sash (Ordem e Progresso stroke) */}
          <path
            d="M 230,380 
               C 280,340 370,330 430,370 
               C 380,350 300,355 230,380 Z"
            fill="#FFFFFF"
            opacity="0.95"
            stroke="#ffffff"
            strokeWidth="8"
            strokeLinecap="round"
            filter="url(#paintTexture)"
          />

          {/* Brazilian Stars inside the blue splash */}
          <circle cx="310" cy="405" r="3.5" fill="#ffffff" opacity="0.9" />
          <circle cx="340" cy="385" r="4" fill="#ffffff" opacity="0.95" />
          <circle cx="355" cy="415" r="3" fill="#ffffff" opacity="0.85" />
          <circle cx="325" cy="435" r="3.5" fill="#ffffff" opacity="0.9" />
          <circle cx="280" cy="350" r="3" fill="#ffffff" opacity="0.8" />
          <circle cx="380" cy="400" r="3.5" fill="#ffffff" opacity="0.85" />

          {/* =========================================================
              LAYER 2: FUSION - USA PAINTED STRIPES FLOWING FROM BRAZIL
             ========================================================= */}

          {/* 13 Organic, painterly wavy stripes flowing out of the center toward the right */}
          {/* Stripe 1 (Red) */}
          <path
            d="M 520,120 C 680,100 860,130 1050,110 C 1180,95 1320,120 1380,135 C 1370,165 1250,160 1100,165 C 920,170 760,150 540,160 Z"
            fill="#E11D48"
            filter="url(#paintTexture)"
            opacity="0.85"
          />
          {/* Stripe 2 (White) */}
          <path
            d="M 540,160 C 720,150 910,180 1090,165 C 1220,155 1340,175 1380,190 C 1360,215 1240,210 1080,210 C 890,210 730,195 560,205 Z"
            fill="#F8FAFC"
            filter="url(#paintTexture)"
            opacity="0.8"
          />
          {/* Stripe 3 (Red) */}
          <path
            d="M 560,205 C 740,195 930,225 1110,210 C 1240,200 1350,220 1385,240 C 1365,265 1235,255 1060,255 C 880,255 710,240 580,250 Z"
            fill="#BE123C"
            filter="url(#paintTexture)"
            opacity="0.85"
          />
          {/* Stripe 4 (White) */}
          <path
            d="M 580,250 C 760,240 940,265 1120,255 C 1250,245 1360,265 1385,285 C 1360,310 1220,300 1040,300 C 860,300 700,285 590,295 Z"
            fill="#F1F5F9"
            filter="url(#paintTexture)"
            opacity="0.8"
          />
          {/* Stripe 5 (Red) */}
          <path
            d="M 590,295 C 770,285 960,310 1130,300 C 1260,290 1370,310 1390,335 C 1365,360 1215,345 1020,345 C 840,345 680,330 600,340 Z"
            fill="#E11D48"
            filter="url(#paintTexture)"
            opacity="0.85"
          />
          {/* Stripe 6 (White) */}
          <path
            d="M 600,340 C 780,330 970,355 1140,345 C 1270,335 1375,355 1390,380 C 1365,405 1205,390 1000,390 C 820,390 670,375 605,385 Z"
            fill="#F8FAFC"
            filter="url(#paintTexture)"
            opacity="0.8"
          />
          {/* Stripe 7 (Red) */}
          <path
            d="M 605,385 C 790,375 980,400 1150,390 C 1275,380 1380,400 1390,425 C 1360,450 1195,435 980,435 C 800,435 660,420 605,430 Z"
            fill="#BE123C"
            filter="url(#paintTexture)"
            opacity="0.85"
          />
          {/* Stripe 8 (White) */}
          <path
            d="M 590,430 C 780,420 970,445 1140,435 C 1265,425 1375,445 1385,470 C 1350,495 1180,480 960,480 C 780,480 650,465 570,475 Z"
            fill="#F1F5F9"
            filter="url(#paintTexture)"
            opacity="0.75"
          />
          {/* Stripe 9 (Red) */}
          <path
            d="M 570,475 C 760,465 950,490 1120,480 C 1245,470 1360,490 1375,515 C 1335,540 1160,525 930,525 C 750,525 630,510 540,520 Z"
            fill="#E11D48"
            filter="url(#paintTexture)"
            opacity="0.85"
          />
          {/* Stripe 10 (White) */}
          <path
            d="M 540,520 C 730,510 920,535 1090,525 C 1215,515 1335,535 1355,560 C 1315,585 1130,570 900,570 C 720,570 600,555 500,565 Z"
            fill="#F8FAFC"
            filter="url(#paintTexture)"
            opacity="0.75"
          />
          {/* Stripe 11 (Red) */}
          <path
            d="M 500,565 C 690,555 880,580 1050,570 C 1175,560 1295,580 1325,605 C 1280,630 1090,615 860,615 C 680,615 560,600 450,610 Z"
            fill="#9F1239"
            filter="url(#paintTexture)"
            opacity="0.8"
          />

          {/* =========================================================
              LAYER 3: USA BLUE CANTON (PAINTED SPLASH WITH STARS)
             ========================================================= */}
          <path
            d="M 720,80 
               C 890,70 1060,90 1190,130 
               C 1260,160 1280,240 1240,320 
               C 1190,400 1080,440 960,430 
               C 840,420 740,390 690,300 
               C 650,210 660,110 720,80 Z"
            fill="#1E3A8A"
            filter="url(#paintTexture)"
            opacity="0.9"
          />

          {/* USA Stars gracefully scattered across the painted blue field */}
          <g transform="translate(740, 130)">
            {/* Row 1 */}
            <use href="#usaStar" x="60" y="30" transform="scale(1.15)" />
            <use href="#usaStar" x="120" y="25" transform="scale(1.2)" />
            <use href="#usaStar" x="180" y="35" transform="scale(1.1)" />
            <use href="#usaStar" x="240" y="30" transform="scale(1.25)" />
            <use href="#usaStar" x="300" y="45" transform="scale(1.1)" />

            {/* Row 2 */}
            <use href="#usaStar" x="40" y="80" transform="scale(1.1)" />
            <use href="#usaStar" x="100" y="75" transform="scale(1.3)" />
            <use href="#usaStar" x="160" y="85" transform="scale(1.2)" />
            <use href="#usaStar" x="220" y="80" transform="scale(1.15)" />
            <use href="#usaStar" x="280" y="95" transform="scale(1.2)" />
            <use href="#usaStar" x="340" y="105" transform="scale(1.1)" />

            {/* Row 3 */}
            <use href="#usaStar" x="50" y="135" transform="scale(1.25)" />
            <use href="#usaStar" x="110" y="130" transform="scale(1.15)" />
            <use href="#usaStar" x="170" y="140" transform="scale(1.3)" />
            <use href="#usaStar" x="230" y="135" transform="scale(1.2)" />
            <use href="#usaStar" x="290" y="150" transform="scale(1.15)" />

            {/* Row 4 */}
            <use href="#usaStar" x="80" y="190" transform="scale(1.1)" />
            <use href="#usaStar" x="140" y="185" transform="scale(1.25)" />
            <use href="#usaStar" x="200" y="195" transform="scale(1.2)" />
            <use href="#usaStar" x="260" y="200" transform="scale(1.15)" />

            {/* Row 5 */}
            <use href="#usaStar" x="120" y="240" transform="scale(1.15)" />
            <use href="#usaStar" x="180" y="245" transform="scale(1.2)" />
            <use href="#usaStar" x="240" y="250" transform="scale(1.1)" />
          </g>

          {/* =========================================================
              LAYER 4: ARTISTIC PAINT SPLATTERS & FLUID CONNECTORS
             ========================================================= */}
          {/* Brazil Green paint drops in the center transition */}
          <circle cx="560" cy="180" r="14" fill="#009c3b" opacity="0.6" filter="url(#paintTexture)" />
          <circle cx="610" cy="220" r="9" fill="#009c3b" opacity="0.5" />
          <circle cx="530" cy="480" r="12" fill="#009c3b" opacity="0.6" filter="url(#paintTexture)" />

          {/* Gold paint drops */}
          <circle cx="590" cy="290" r="11" fill="#f59e0b" opacity="0.7" />
          <circle cx="640" cy="330" r="7" fill="#fbbf24" opacity="0.8" />
          <circle cx="670" cy="260" r="8" fill="#f59e0b" opacity="0.6" />

          {/* Crimson & Navy paint drops */}
          <circle cx="630" cy="410" r="13" fill="#e11d48" opacity="0.65" filter="url(#paintTexture)" />
          <circle cx="690" cy="460" r="10" fill="#e11d48" opacity="0.6" />
          <circle cx="660" cy="160" r="15" fill="#1e3a8a" opacity="0.7" filter="url(#paintTexture)" />
          <circle cx="700" cy="210" r="8" fill="#2563eb" opacity="0.8" />
        </svg>
      </div>
    </div>
  );
}
