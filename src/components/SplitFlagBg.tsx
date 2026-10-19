'use client';

import React from "react";
import { motion } from "framer-motion";

export default function SplitFlagBg() {
  return (
    <div 
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[1100px] h-[480px] md:h-[560px] pointer-events-none -z-10 select-none overflow-hidden"
      style={{
        maskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0) 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0) 80%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.18, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full h-full relative flex items-center justify-center filter blur-[0.6px]"
      >
        <svg
          viewBox="0 0 1200 675"
          className="w-full h-full object-cover rounded-3xl"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Clip path for the left half: Brazil (with a modern slight diagonal dynamic cut) */}
            <clipPath id="brazilHalf">
              <polygon points="0,0 640,0 560,675 0,675" />
            </clipPath>

            {/* Clip path for the right half: USA */}
            <clipPath id="usaHalf">
              <polygon points="640,0 1200,0 1200,675 560,675" />
            </clipPath>

            {/* Star definition for USA */}
            <g id="star">
              <polygon
                points="0,-8 2.4,-2.6 8.2,-2.6 3.5,0.9 5.3,6.5 0,3 
                        -5.3,6.5 -3.5,0.9 -8.2,-2.6 -2.4,-2.6"
                fill="#ffffff"
              />
            </g>

            {/* Seam glow gradient */}
            <linearGradient id="seamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#009c3b" stopOpacity="0" />
              <stop offset="48%" stopColor="#ffb400" stopOpacity="0.4" />
              <stop offset="52%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* ==================== BRAZIL HALF (LEFT) ==================== */}
          <g clipPath="url(#brazilHalf)">
            {/* Green Field */}
            <rect x="0" y="0" width="1200" height="675" fill="#00843D" />

            {/* Yellow Rhombus (Diamond) */}
            <polygon
              points="300,75 540,337.5 300,600 60,337.5"
              fill="#FFCC29"
            />

            {/* Blue Celestial Globe */}
            <circle cx="300" cy="337.5" r="145" fill="#002776" />

            {/* White Curved Celestial Band */}
            <path
              d="M 160,370 Q 300,300 440,350 Q 300,270 160,370 Z"
              fill="#FFFFFF"
              opacity="0.95"
            />

            {/* Symbolic Southern Cross Stars in Brazil Globe */}
            <circle cx="280" cy="390" r="4" fill="#ffffff" />
            <circle cx="310" cy="370" r="4" fill="#ffffff" />
            <circle cx="330" cy="395" r="4" fill="#ffffff" />
            <circle cx="295" cy="420" r="4" fill="#ffffff" />
            <circle cx="305" cy="402" r="3" fill="#ffffff" />
            <circle cx="260" cy="330" r="3" fill="#ffffff" />
            <circle cx="340" cy="320" r="3.5" fill="#ffffff" />
            <circle cx="360" cy="365" r="3" fill="#ffffff" />
          </g>

          {/* ==================== USA HALF (RIGHT) ==================== */}
          <g clipPath="url(#usaHalf)">
            {/* 13 Stripes (7 Red, 6 White) */}
            {Array.from({ length: 13 }).map((_, i) => (
              <rect
                key={i}
                x="0"
                y={i * (675 / 13)}
                width="1200"
                height={675 / 13 + 0.5}
                fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
              />
            ))}

            {/* Blue Canton (Union) */}
            <rect
              x="560"
              y="0"
              width="360"
              height={(675 / 13) * 7}
              fill="#1B2A59"
            />

            {/* Stars inside Canton */}
            <g transform="translate(600, 25)">
              {[0, 1, 2, 3, 4].map((row) => (
                <g key={row} transform={`translate(0, ${row * 35})`}>
                  {[0, 1, 2, 3, 4, 5].map((col) => (
                    <use
                      key={col}
                      href="#star"
                      x={col * 46 + (row % 2 === 1 ? 23 : 0)}
                      y={0}
                      transform="scale(1.2)"
                    />
                  ))}
                </g>
              ))}
            </g>
          </g>

          {/* ==================== SEAM LIGHT EFFECT (BRIDGE) ==================== */}
          <line
            x1="640"
            y1="0"
            x2="560"
            y2="675"
            stroke="url(#seamGradient)"
            strokeWidth="8"
            opacity="0.75"
          />
        </svg>
      </motion.div>
    </div>
  );
}
