"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from "recharts";
import { 
  Search, MapPin, Globe, Grid, Bell, Settings, HelpCircle, User, 
  TrendingUp, Download, Filter, Columns, RefreshCw, Plus, BarChart2, LineChart as LineChartIcon, ShieldCheck, X
} from "lucide-react";

// Helper to generate random number between min and max
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Helper to generate rolling last 12 months dynamically based on current date
const getLast12Months = () => {
  const shortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fullNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const result = [];

  for (let i = 11; i >= 0; i--) {
    const d = new Date(currentYear, currentMonth - i, 1);
    const mIdx = d.getMonth();
    const y = d.getFullYear();
    result.push({
      short: shortNames[mIdx],
      fullName: `${fullNames[mIdx]} ${y}`,
      year: y,
      monthIndex: mIdx // 0 = Jan ... 11 = Dec
    });
  }
  return result;
};

export type RegionId = 'cold_belt' | 'warm_belt' | 'national';

export interface RegionalSeasonMonth {
  factor: number;
  scaleScore: number;
  phase: string;
  trend: string;
  volatility: string;
  candleSpread: string;
}

export interface RegionConfig {
  id: RegionId;
  name: string;
  shortName: string;
  icon: string;
  amplitude: string;
  peakMonth: string;
  minMonth: string;
  flatWindow: string;
  profile: string;
  exampleStates: string;
  guideItems: Array<{ range: string; title: string; desc: string; dotColor: string }>;
  seasonality: Record<number, RegionalSeasonMonth>;
}

export const REGION_CONFIGS: Record<RegionId, RegionConfig> = {
  cold_belt: {
    id: 'cold_belt',
    name: 'North / Northeast / Midwest (Cold Belt)',
    shortName: 'Cold Belt',
    icon: '❄️',
    amplitude: 'Extreme (20 to 100)',
    peakMonth: 'April (100 pts)',
    minMonth: 'December (20 pts)',
    flatWindow: 'June–July (high plateau ~78-82) & Sept–Oct (mid plateau ~52-58)',
    profile: 'Aggressive sinusoidal curve with high seasonal volatility. Spring awakening and inquiry surge vs. frozen ground and heavy snowfall slowing winter commerce.',
    exampleStates: 'IL, NY, MA, CO, MI, PA, OH, WI, MN, NJ, CT',
    guideItems: [
      { range: "Jan–Feb", title: "Frozen Ground (20-30)", desc: "Severe annual low and early planning phase", dotColor: "bg-blue-300" },
      { range: "Mar–May", title: "Thaw Peak (95-100)", desc: "Urgency for spring project launch and vendor bookings", dotColor: "bg-emerald-500" },
      { range: "Jun–Jul", title: "High Plateau (~78-82)", desc: "Sideways consolidation; summer activity at peak", dotColor: "bg-blue-600" },
      { range: "Sep–Oct", title: "Mid Plateau (~52-58)", desc: "Pre-winter preparation, seasonal purchases, and interior projects", dotColor: "bg-amber-500" },
      { range: "Nov–Dec", title: "Freefall & Bottom (20)", desc: "Long bearish drop; snow and holidays freeze new commercial initiatives", dotColor: "bg-slate-400" }
    ],
    seasonality: {
      0: { scaleScore: 24, factor: 0.38, phase: "Winter Freeze / Annual Low", trend: "Severe cold and snow stall new purchases and projects", volatility: "Severe Low (~24)", candleSpread: "Winter Freeze" },
      1: { scaleScore: 44, factor: 0.69, phase: "Awakening / Early Planning", trend: "Long bullish candle: early spring planning surge", volatility: "Bullish Breakout (+83%)", candleSpread: "Long Bullish" },
      2: { scaleScore: 85, factor: 1.31, phase: "Spring Breakout: Inquiries & Quotes", trend: "Extended bullish candle: customer requests spike", volatility: "Strong Bullish (+93%)", candleSpread: "Long Bullish" },
      3: { scaleScore: 100, factor: 1.54, phase: "Annual Peak: Maximum Conversion", trend: "Peak customer urgency and vendor contracting", volatility: "Absolute Peak (100)", candleSpread: "Peak Body" },
      4: { scaleScore: 94, factor: 1.45, phase: "Sustained Peak: High Transaction Volume", trend: "Full execution of spring and early summer initiatives", volatility: "Sustained High (~94)", candleSpread: "Peak Body" },
      5: { scaleScore: 82, factor: 1.26, phase: "High Plateau: Active Demand", trend: "Sideways consolidation: steady commercial activity", volatility: "Lateral Plateau (~82)", candleSpread: "Short Body / Doji" },
      6: { scaleScore: 78, factor: 1.20, phase: "High Plateau: Summer Sustained", trend: "Compressed candle bodies in upper third", volatility: "Lateral Plateau (~78)", candleSpread: "Short Body / Doji" },
      7: { scaleScore: 72, factor: 1.11, phase: "Late Summer Transition", trend: "Closing Q3 campaigns and early fall preparations", volatility: "Smooth Transition (~72)", candleSpread: "Short Body / Doji" },
      8: { scaleScore: 58, factor: 0.89, phase: "Mid Plateau: Pre-Winter Transition", trend: "Stable support: indoor services and autumn demand", volatility: "Lateral Support (~58)", candleSpread: "Short Body / Doji" },
      9: { scaleScore: 52, factor: 0.80, phase: "Mid Plateau: Late Fall Demand", trend: "Holiday preparations prior to Thanksgiving/Christmas", volatility: "Lateral Support (~52)", candleSpread: "Short Body / Doji" },
      10: { scaleScore: 35, factor: 0.54, phase: "Pre-Winter Drop (Frost & Chill)", trend: "Long bearish candle: seasonal slowdown ahead of winter", volatility: "Long Bearish (-33%)", candleSpread: "Long Bearish" },
      11: { scaleScore: 20, factor: 0.31, phase: "Annual Bottom (Winter Low / Snow)", trend: "Holidays and winter weather pause new commercial starts", volatility: "Absolute Annual Low (~20)", candleSpread: "Winter Freeze" }
    }
  },
  warm_belt: {
    id: 'warm_belt',
    name: 'Sunbelt / South / Southwest (Warm Belt)',
    shortName: 'Sunbelt',
    icon: '☀️',
    amplitude: 'Moderate (50 to 90)',
    peakMonth: 'March (90 pts) & October (88 pts)',
    minMonth: 'December (52 pts) / August (62 pts)',
    flatWindow: 'April–June (sustained ~78-82)',
    profile: 'Bimodal curve with compressed volatility. Early year surge, mid-summer thermal dip (100°F+ / hurricane season), followed by a strong mild autumn rebound.',
    exampleStates: 'FL, TX, AZ, GA, CA, NC, SC, NV, TN',
    guideItems: [
      { range: "Jan–Mar", title: "1st Annual Peak (85-90)", desc: "Early project launches; quoting and customer agreements surge", dotColor: "bg-emerald-500" },
      { range: "Apr–Jun", title: "Sustained Plateau (~78-82)", desc: "Consistent active demand before peak summer heat", dotColor: "bg-amber-500" },
      { range: "Jul–Ago", title: "Summer Thermal Dip (60-65)", desc: "Extreme heat (100°F+ in TX/AZ) and rain/hurricanes (FL) slow new starts", dotColor: "bg-orange-500" },
      { range: "Sep–Oct", title: "2nd Annual Peak (85-88)", desc: "Mild autumn ideal for business; aggressive project resumption", dotColor: "bg-emerald-600" },
      { range: "Nov–Dez", title: "Holiday Dispersal (~50-55)", desc: "Year-end slowdown; no snow stoppage", dotColor: "bg-blue-400" }
    ],
    seasonality: {
      0: { scaleScore: 76, factor: 1.01, phase: "Early Year Demand Surge", trend: "Mild winter accelerates spring inquiries and bookings", volatility: "Early Bullish (~76)", candleSpread: "Short Body / Doji" },
      1: { scaleScore: 84, factor: 1.12, phase: "Southern Spring Acceleration", trend: "Continuous ramp-up in customer engagement and hiring", volatility: "Moderate Bullish (~84)", candleSpread: "Short Body / Doji" },
      2: { scaleScore: 90, factor: 1.20, phase: "1st Annual Peak: Spring Demand", trend: "Early closing peak before intense summer heatwaves", volatility: "1st Major Peak (~90)", candleSpread: "Peak Body" },
      3: { scaleScore: 82, factor: 1.09, phase: "Sustained Plateau: Active Business", trend: "High, stabilized search volume across regional markets", volatility: "Lateral Consolidation (~82)", candleSpread: "Short Body / Doji" },
      4: { scaleScore: 80, factor: 1.07, phase: "Sustained Plateau: Steady Volume", trend: "Steady commercial pace without sharp drops", volatility: "Lateral Consolidation (~80)", candleSpread: "Short Body / Doji" },
      5: { scaleScore: 78, factor: 1.04, phase: "Sustained Plateau: Early Summer", trend: "Transition to high temperature season", volatility: "Lateral Consolidation (~78)", candleSpread: "Short Body / Doji" },
      6: { scaleScore: 64, factor: 0.85, phase: "Thermal Stress & Summer Rains", trend: "100°F+ heat (TX/AZ) and storms (FL) slow new project launches", volatility: "Thermal Retraction (~64)", candleSpread: "Summer Thermal Dip" },
      7: { scaleScore: 62, factor: 0.83, phase: "Summer Low: Hurricanes & Extreme Heat", trend: "Seasonal low caused by extreme heat and tropical storms", volatility: "Summer Low (~62)", candleSpread: "Summer Thermal Dip" },
      8: { scaleScore: 80, factor: 1.07, phase: "Second Wind: Autumn Rebound", trend: "Heat subsides; strong rebound in regional commercial bids", volatility: "Bullish Rebound (~80)", candleSpread: "Short Body / Doji" },
      9: { scaleScore: 88, factor: 1.17, phase: "2nd Annual Peak: Ideal Mild Fall", trend: "Prime Sunbelt weather for residential & commercial activity", volatility: "2nd Major Peak (~88)", candleSpread: "Peak Body" },
      10: { scaleScore: 68, factor: 0.91, phase: "Pre-Holiday Deceleration", trend: "Gentle tapering ahead of Thanksgiving holidays", volatility: "Moderate Retraction (~68)", candleSpread: "Short Body / Doji" },
      11: { scaleScore: 52, factor: 0.69, phase: "Year-End Holiday Dispersal", trend: "Family travel and holiday focus; zero snow paralysis", volatility: "Moderate Low (~52)", candleSpread: "Short Body / Doji" }
    }
  },
  national: {
    id: 'national',
    name: 'US National Average (National Average)',
    shortName: 'National Average',
    icon: '🇺🇸',
    amplitude: 'Balanced (32 to 100)',
    peakMonth: 'April–May (100 pts)',
    minMonth: 'December (32 pts)',
    flatWindow: 'June–July (high ~80-84) & Sept–Oct (mid ~55-60)',
    profile: 'Balanced nationwide curve harmonizing the aggressive Cold Belt spring thaw with steady Sunbelt bimodal seasonality.',
    exampleStates: 'All 50 US States',
    guideItems: [
      { range: "Jan–Feb", title: "The Awakening (~48-65)", desc: "New Year budgeting and spring planning; finishes strong", dotColor: "bg-blue-400" },
      { range: "Mar–May", title: "Peak Demand (90-100)", desc: "Closing estimates and customer hiring surge across the US", dotColor: "bg-emerald-500" },
      { range: "Jun–Jul", title: "High Plateau (~80-84)", desc: "Commerce in full swing; queries shift to secondary phases", dotColor: "bg-blue-600" },
      { range: "Sep–Oct", title: "Mid Plateau (~55-60)", desc: "Noticeable deceleration; pre-winter maintenance and indoor jobs", dotColor: "bg-amber-500" },
      { range: "Nov–Dec", title: "Annual Bottom (~32)", desc: "Thanksgiving, Christmas, and winter frost cool project demand", dotColor: "bg-slate-400" }
    ],
    seasonality: {
      0: { scaleScore: 48, factor: 0.70, phase: "Awakening: Planning Phase", trend: "New Year turnover and spring project planning", volatility: "Early Bullish (~48)", candleSpread: "Short Body / Doji" },
      1: { scaleScore: 65, factor: 0.95, phase: "Awakening: Acceleration", trend: "Opens moderate and finishes strong (bullish candle)", volatility: "Bullish Candle (+35%)", candleSpread: "Long Bullish" },
      2: { scaleScore: 90, factor: 1.31, phase: "Demand Surge: High Quotes", trend: "Spike in inquiries, estimates, and customer requests", volatility: "Strong Bullish (+38%)", candleSpread: "Long Bullish" },
      3: { scaleScore: 100, factor: 1.46, phase: "Peak Volume: Annual High", trend: "Contract closings and sales at the national annual peak", volatility: "Absolute Peak (100)", candleSpread: "Peak Body" },
      4: { scaleScore: 95, factor: 1.39, phase: "Sustained Peak: High Execution", trend: "Active customer acquisitions and bookings nationwide", volatility: "Sustained High (~95)", candleSpread: "Peak Body" },
      5: { scaleScore: 84, factor: 1.23, phase: "High Plateau: Active Market", trend: "Sideways consolidation: commercial activity underway nationwide", volatility: "High Plateau (~84)", candleSpread: "Short Body / Doji" },
      6: { scaleScore: 80, factor: 1.17, phase: "High Plateau: Mid-Summer Sustained", trend: "Searches maintain high momentum across regional markets", volatility: "High Plateau (~80)", candleSpread: "Short Body / Doji" },
      7: { scaleScore: 75, factor: 1.10, phase: "Sustained Plateau", trend: "Search volume remains sustained and steady", volatility: "Sustained Plateau (~75)", candleSpread: "Short Body / Doji" },
      8: { scaleScore: 60, factor: 0.88, phase: "Mid Plateau: Visible Deceleration", trend: "Pre-winter preparation, seasonal shifts, and winterproofing", volatility: "Mid Plateau (~60)", candleSpread: "Short Body / Doji" },
      9: { scaleScore: 55, factor: 0.80, phase: "Mid Plateau: Late-Year Support", trend: "Sideways support prior to winter slowdown", volatility: "Mid Plateau (~55)", candleSpread: "Short Body / Doji" },
      10: { scaleScore: 40, factor: 0.58, phase: "Bearish Deceleration", trend: "Thanksgiving holidays and first freezes stall new projects", volatility: "Bearish Candle (-27%)", candleSpread: "Long Bearish" },
      11: { scaleScore: 32, factor: 0.47, phase: "Annual Bottom (Year-End Low)", trend: "Holidays and nationwide cold pause new commercial starts", volatility: "Annual Bottom (~32)", candleSpread: "Winter Freeze" }
    }
  }
};

export const detectRegion = (locationStr: string): RegionId => {
  const norm = (locationStr || '').toLowerCase();

  if (norm.includes('united states') || norm.includes('usa') || norm.includes('national') || norm.includes('all')) {
    return 'national';
  }

  // Regex for 2-letter state code like ", FL", " FL", " TX", etc.
  const stateMatch = locationStr.match(/\b([A-Z]{2})\b/);
  if (stateMatch) {
    const st = stateMatch[1].toUpperCase();
    if (['FL', 'TX', 'AZ', 'GA', 'NC', 'SC', 'NV', 'CA', 'TN', 'AL', 'MS', 'LA', 'NM', 'HI'].includes(st)) {
      return 'warm_belt';
    }
    if (['IL', 'NY', 'MA', 'CO', 'MI', 'OH', 'PA', 'WI', 'MN', 'NJ', 'CT', 'IN', 'ME', 'VT', 'NH', 'ND', 'SD', 'MT', 'WY', 'IA', 'NE', 'KS', 'MO', 'ID', 'WA', 'OR', 'AK', 'RI', 'MD', 'DE'].includes(st)) {
      return 'cold_belt';
    }
  }

  const warmKws = [
    'florida', 'texas', 'arizona', 'georgia', 'carolina', 'nevada', 'california', 'tennessee', 'alabama', 'louisiana',
    'orlando', 'miami', 'tampa', 'jacksonville', 'fort lauderdale', 'houston', 'dallas', 'austin', 'san antonio',
    'phoenix', 'tucson', 'scottsdale', 'atlanta', 'las vegas', 'los angeles', 'san diego', 'charlotte', 'nashville'
  ];
  if (warmKws.some(k => norm.includes(k))) return 'warm_belt';

  const coldKws = [
    'illinois', 'new york', 'massachusetts', 'colorado', 'michigan', 'ohio', 'pennsylvania', 'wisconsin', 'minnesota',
    'new jersey', 'connecticut', 'indiana', 'washington', 'chicago', 'boston', 'denver', 'detroit', 'minneapolis',
    'philadelphia', 'pittsburgh', 'milwaukee', 'cleveland', 'columbus', 'indianapolis', 'buffalo', 'seattle', 'portland'
  ];
  if (coldKws.some(k => norm.includes(k))) return 'cold_belt';

  return 'national';
};

// Seeded pseudo-random generator based on string + salt
const getSeedRng = (seedStr: string) => {
  let h = 0;
  for (let i = 0; i < seedStr.length; i++) {
    h = (Math.imul(31, h) + seedStr.charCodeAt(i)) | 0;
  }
  return (offset: number = 0) => {
    const x = Math.sin(h + offset * 997.13) * 10000;
    return x - Math.floor(x); // returns float in [0, 1)
  };
};

export const VARIANCE_FACTORS = {
  low: { baseRate: 0.10, rallyBoost: 0.12, dipDamp: 0.06 },
  realistic: { baseRate: 0.22, rallyBoost: 0.26, dipDamp: 0.14 },
  dynamic: { baseRate: 0.32, rallyBoost: 0.36, dipDamp: 0.20 }
};

// Generate mock chart data dynamically with regional seasonality and organic counter-trend movements
const generateChartData = (
  baseVolume: number, 
  regionId: RegionId = 'warm_belt',
  seedKey: string = 'default',
  varianceMode: 'low' | 'realistic' | 'dynamic' = 'realistic',
  compareConfig?: {
    keyword: string;
    volume: number;
    seedKey: string;
  }
) => {
  const months = getLast12Months();
  const regionConfig = REGION_CONFIGS[regionId] ?? REGION_CONFIGS.warm_belt;
  const rng = getSeedRng(`${seedKey}-${regionId}`);
  const compRng = compareConfig ? getSeedRng(`${compareConfig.seedKey}-${regionId}`) : null;
  const config = VARIANCE_FACTORS[varianceMode] ?? VARIANCE_FACTORS.realistic;

  // Pick dynamic anomaly and counter-trend rally months along the 12-month timeline:
  // 1. Low-season/autumn counter-trend rally month (index 7..10: Aug to Nov in rolling window)
  const lowSeasonRallyIdx = 7 + Math.floor(rng(1) * 4);
  // 2. High-season nuance/shift month (index 2..6: Feb to Jun)
  const highSeasonShiftIdx = 2 + Math.floor(rng(2) * 5);
  // 3. Mid-year pullback/dip month
  const midYearDipIdx = 3 + Math.floor(rng(3) * 4);

  // Calculate monthly search volumes with trend-breaking market realities
  const items = months.map((m, i) => {
    const season = regionConfig.seasonality[m.monthIndex] ?? {
      factor: 1.0,
      scaleScore: 70,
      phase: "Standard Volume",
      trend: "Stable",
      volatility: "Moderate",
      candleSpread: "Short Body / Doji"
    };

    // Independent monthly noise: [-baseRate, +baseRate]
    let noise = (rng(i * 23 + 13) * 2 - 1) * config.baseRate;

    // Counter-trend rally: allows a low-season month to jump higher than the previous month
    if (i === lowSeasonRallyIdx && rng(i + 101) > 0.20) {
      noise += config.rallyBoost + (rng(i + 201) * 0.12);
    }
    // High-season timing nuance (e.g. May beating April, or July second wind)
    if (i === highSeasonShiftIdx && rng(i + 301) > 0.25) {
      noise += (config.rallyBoost * 0.75) + (rng(i + 401) * 0.10);
    }
    // Pullback / pause month
    if (i === midYearDipIdx && i !== highSeasonShiftIdx && rng(i + 501) > 0.35) {
      noise -= config.dipDamp + (rng(i + 601) * 0.08);
    }

    // Preserve baseline regional floor while allowing realistic reversals
    const finalFactor = Math.max(0.15, season.factor * (1 + noise));
    const totalSearches = Math.max(10, Math.round(baseVolume * finalFactor));

    // Realistic organic mobile share (fluctuates ~71% to ~79%)
    const mobileJitter = (rng(i * 29 + 203) * 0.08) - 0.04;
    const mobileShare = Math.min(0.85, Math.max(0.65, 0.75 + mobileJitter));
    const mobile = Math.round(totalSearches * mobileShare);
    const desktop = totalSearches - mobile;

    let compareSearches: number | undefined = undefined;
    let compareMobile: number | undefined = undefined;
    let compareDesktop: number | undefined = undefined;

    if (compareConfig && compRng) {
      const compNoise = (compRng(i * 19 + 7) * 2 - 1) * (config.baseRate * 0.85);
      const compFactor = Math.max(0.15, season.factor * (1 + compNoise));
      const rawCompSearches = Math.round(compareConfig.volume * compFactor);
      
      // Ensure the second keyword ALWAYS has more volume than the first keyword in every single month
      const minAdvantage = Math.max(25, Math.round(totalSearches * 0.12));
      compareSearches = Math.max(totalSearches + minAdvantage, rawCompSearches);

      const compMobileJitter = (compRng(i * 31 + 107) * 0.08) - 0.04;
      const compMobileShare = Math.min(0.85, Math.max(0.65, 0.75 + compMobileJitter));
      compareMobile = Math.round(compareSearches * compMobileShare);
      compareDesktop = compareSearches - compareMobile;
    }

    return {
      name: m.short,
      fullName: m.fullName,
      monthIndex: m.monthIndex,
      phase: season.phase,
      trend: season.trend,
      volatility: season.volatility,
      candleSpread: season.candleSpread,
      regionId,
      searches: totalSearches,
      mobile,
      desktop,
      compareSearches,
      compareMobile,
      compareDesktop
    };
  });

  // Dynamically calculate scaleScore relative to the actual peak month of this specific search
  const peakVolume = Math.max(...items.map(it => Math.max(it.searches, it.compareSearches || 0)), 1);
  return items.map(it => ({
    ...it,
    scaleScore: Math.round((it.searches / peakVolume) * 100)
  }));
};

const COLORS = ['#1a73e8', '#e8f0fe'];

const CustomTooltip = ({ active, payload, label, isComparing, kw1, kw2 }: any) => {
  if (active && payload && payload.length) {
    const dataItem = payload[0]?.payload;
    const displayLabel = dataItem?.fullName || label;
    const seasonPhase = dataItem?.phase;

    if (isComparing && dataItem?.compareSearches !== undefined) {
      const vol1 = dataItem.searches || 0;
      const vol2 = dataItem.compareSearches || 0;
      const diff = vol2 - vol1;
      const diffPct = vol1 > 0 ? Math.round((diff / vol1) * 100) : 0;

      return (
        <div className="bg-white p-3.5 rounded-lg shadow-xl border border-gray-100 text-sm min-w-[210px]">
          <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-gray-100">
            <p className="font-semibold text-gray-800">{displayLabel}</p>
            {seasonPhase && (
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-medium whitespace-nowrap">
                {seasonPhase}
              </span>
            )}
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-1.5 text-gray-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#1a73e8]"></span>
                <span className="truncate max-w-[110px]">{kw1 || "Primary"}:</span>
              </span>
              <span className="font-bold text-[#1a73e8]">{vol1.toLocaleString()}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-1.5 text-gray-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#ea4335]"></span>
                <span className="truncate max-w-[110px]">{kw2 || "Comparison"}:</span>
              </span>
              <span className="font-bold text-[#ea4335]">{vol2.toLocaleString()}</span>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
            <span className="text-gray-500 font-normal">Difference:</span>
            <span className="font-bold text-emerald-600">+{diff.toLocaleString()} (+{diffPct}%)</span>
          </div>
        </div>
      );
    }

    const mobile = payload.find((p: any) => p.dataKey === 'mobile')?.value ?? (dataItem?.mobile || 0);
    const desktop = payload.find((p: any) => p.dataKey === 'desktop')?.value ?? (dataItem?.desktop || 0);
    const total = dataItem?.searches ?? (mobile + desktop);

    return (
      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100 text-sm min-w-[170px]">
        <div className="flex items-center justify-between gap-2 mb-2">
          <p className="font-semibold text-gray-800">{displayLabel}</p>
          {seasonPhase && (
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-medium whitespace-nowrap">
              {seasonPhase}
            </span>
          )}
        </div>
        <div className="space-y-1 text-xs">
          <p className="text-[#1a73e8] flex justify-between gap-4"><span>Mobile:</span> <span className="font-medium">{mobile.toLocaleString()}</span></p>
          <p className="text-[#8ab4f8] flex justify-between gap-4"><span>Desktop:</span> <span className="font-medium">{desktop.toLocaleString()}</span></p>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-100">
          <p className="font-bold text-[#202124] text-sm flex justify-between gap-4"><span>Total:</span> <span>{total.toLocaleString()}</span></p>
        </div>
      </div>
    );
  }
  return null;
};

export default function KeywordPlanner() {
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  
  // Set tab title for presentation realism
  useEffect(() => {
    document.title = "Google Ads - Keyword Planner | Google Search Engine";
  }, []);

  // Inputs
  const [keyword, setKeyword] = useState("");
  const [compareKeyword, setCompareKeyword] = useState("");
  const [isComparing, setIsComparing] = useState(false);
  const [location, setLocation] = useState("Orlando, FL");
  const [language, setLanguage] = useState("English");

  // Region State (Configurable in Settings or auto-detected by Location)
  const [selectedRegion, setSelectedRegion] = useState<RegionId>(() => detectRegion("Orlando, FL"));

  // Chart Toggle
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');

  // Secret Mock Settings & Dynamic Randomness
  const [mockVolumeLevel, setMockVolumeLevel] = useState<'low' | 'medium' | 'high'>('high');
  const mockVolumeLevelRef = useRef<'low' | 'medium' | 'high'>('high');
  const [mockVarianceLevel, setMockVarianceLevel] = useState<'low' | 'realistic' | 'dynamic'>('realistic');
  const [searchSessionId, setSearchSessionId] = useState<number>(() => Date.now());
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Autocomplete Location State
  const [locationQuery, setLocationQuery] = useState(location);
  const [locationOptions, setLocationOptions] = useState<any[]>([]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);

  // Results state
  const [mainVolume, setMainVolume] = useState(0);
  const [compareVolume, setCompareVolume] = useState(0);
  const [activeVolume, setActiveVolume] = useState(0);
  const [chartData, setChartData] = useState<any[]>([]);
  const [similarKeywords, setSimilarKeywords] = useState<any[]>([]);
  const [selectedKeyword, setSelectedKeyword] = useState<string>("");

  // Persist primary keyword volume and seed to prevent numbers changing on comparison
  const [searchedPrimaryKeyword, setSearchedPrimaryKeyword] = useState<string>("");
  const primarySessionIdRef = useRef<number>(Date.now());
  const primaryVolumeRef = useRef<number>(0);

  // Rolling months for ghost state
  const ghostMonths = getLast12Months();

  // Helper to build comparison config
  const getComparisonConfig = (baseVol: number, sId: number = searchSessionId) => {
    const cleanComp = compareKeyword.trim();
    if (!isComparing || !cleanComp) return undefined;
    const compVol = compareVolume > baseVol ? compareVolume : Math.round(baseVol * 1.25);
    return {
      keyword: cleanComp,
      volume: compVol,
      seedKey: `${sId}-${cleanComp}`
    };
  };

  // Outside click handlers
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setIsLocationDropdownOpen(false);
      }
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fetch locations
  useEffect(() => {
    if (locationQuery.length > 2 && locationQuery !== location) {
      const delayFn = setTimeout(() => {
        fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(locationQuery)}&count=5&language=en&format=json`)
          .then(res => res.json())
          .then(data => {
            if (data.results) {
              setLocationOptions(data.results);
              setIsLocationDropdownOpen(true);
            }
          });
      }, 300);
      return () => clearTimeout(delayFn);
    } else {
      setIsLocationDropdownOpen(false);
    }
  }, [locationQuery, location]);

  const getVolumeRange = (level: 'low' | 'medium' | 'high') => {
    switch (level) {
      case 'low': return { min: 400, max: 800 };
      case 'medium': return { min: 800, max: 1200 };
      case 'high':
      default: return { min: 1200, max: 3000 };
    }
  };

  const handleVolumeLevelChange = (newLevel: 'low' | 'medium' | 'high') => {
    setMockVolumeLevel(newLevel);
    mockVolumeLevelRef.current = newLevel;

    if (hasSearched) {
      const { min: minVol, max: maxVol } = getVolumeRange(newLevel);
      const newMainVolume = getRandomInt(minVol, maxVol);
      const targetKw = selectedKeyword || keyword;

      primaryVolumeRef.current = newMainVolume;
      setMainVolume(newMainVolume);
      setActiveVolume(newMainVolume);
      setSelectedKeyword(targetKw);

      let compConfig = undefined;
      const cleanComp = compareKeyword.trim();
      if (isComparing && cleanComp) {
        const compBoost = 1 + (getRandomInt(18, 32) / 100);
        const newCompVol = Math.round(newMainVolume * compBoost);
        setCompareVolume(newCompVol);
        compConfig = {
          keyword: cleanComp,
          volume: newCompVol,
          seedKey: `${searchSessionId}-${cleanComp}`
        };
      }

      setChartData(generateChartData(newMainVolume, selectedRegion, `${searchSessionId}-${targetKw}`, mockVarianceLevel, compConfig));

      // Dynamically scale similar keywords to match new volume tier
      setSimilarKeywords(prev => prev.map(item => {
        const kwMin = Math.floor(minVol * 0.2);
        const kwMax = Math.floor(maxVol * 0.8);
        return {
          ...item,
          volume: getRandomInt(kwMin, kwMax)
        };
      }).sort((a, b) => b.volume - a.volume));
    }
  };

  const handleVarianceChange = (newLevel: 'low' | 'realistic' | 'dynamic') => {
    setMockVarianceLevel(newLevel);
    if (hasSearched) {
      const vol = activeVolume || mainVolume;
      const targetKw = selectedKeyword || keyword;
      if (vol) {
        setChartData(generateChartData(vol, selectedRegion, `${searchSessionId}-${targetKw}`, newLevel, getComparisonConfig(vol)));
      }
    }
  };

  const handleSelectLocation = (loc: any) => {
    const locString = `${loc.name}, ${loc.admin1 ? loc.admin1 + ', ' : ''}${loc.country}`;
    setLocation(locString);
    setLocationQuery(locString);
    setIsLocationDropdownOpen(false);
    const det = detectRegion(locString);
    setSelectedRegion(det);
    if (hasSearched) {
      const vol = activeVolume || mainVolume;
      const targetKw = selectedKeyword || keyword;
      if (vol) setChartData(generateChartData(vol, det, `${searchSessionId}-${targetKw}`, mockVarianceLevel, getComparisonConfig(vol)));
    }
  };

  const handleSelectRegion = (rId: RegionId) => {
    setSelectedRegion(rId);
    if (hasSearched) {
      const vol = activeVolume || mainVolume;
      const targetKw = selectedKeyword || keyword;
      if (vol) setChartData(generateChartData(vol, rId, `${searchSessionId}-${targetKw}`, mockVarianceLevel, getComparisonConfig(vol)));
    }
  };

  const handleSearch = (customKeyword?: string) => {
    const targetKw = (customKeyword ?? keyword).trim();
    if (!targetKw) return;
    setIsSearching(true);
    setHasSearched(false);
    if (customKeyword) setKeyword(customKeyword);

    // Check if primary keyword matches what was already searched and we have a persisted volume
    const isSamePrimary = searchedPrimaryKeyword.toLowerCase() === targetKw.toLowerCase() && primaryVolumeRef.current > 0;
    
    // If primary keyword is unchanged, REUSE the exact primary session ID so its pseudo-random seed is 100% identical!
    const sessionId = isSamePrimary ? primarySessionIdRef.current : Date.now();
    if (!isSamePrimary) {
      primarySessionIdRef.current = sessionId;
    }
    setSearchSessionId(sessionId);
    
    // Smooth delay: faster if only adding comparison
    const delay = isSamePrimary ? 800 : 1600;

    setTimeout(() => {
      const currentLevel = mockVolumeLevelRef.current || mockVolumeLevel;
      const { min: minVol, max: maxVol } = getVolumeRange(currentLevel);
      
      // PERSIST: Keep exact same volume for keyword 1 if unchanged
      const volume = isSamePrimary ? primaryVolumeRef.current : getRandomInt(minVol, maxVol);
      primaryVolumeRef.current = volume;
      setSearchedPrimaryKeyword(targetKw);

      setMainVolume(volume);
      setActiveVolume(volume);
      setSelectedKeyword(targetKw);

      // Hackzin: the 2nd keyword always has noticeably higher volume (+18% to +32%)
      let compVol = 0;
      let compConfig = undefined;
      const cleanComp = compareKeyword.trim();
      if (isComparing && cleanComp) {
        const compBoost = 1 + (getRandomInt(18, 32) / 100);
        compVol = Math.round(volume * compBoost);
        setCompareVolume(compVol);
        compConfig = {
          keyword: cleanComp,
          volume: compVol,
          seedKey: `${Date.now()}-${cleanComp}`
        };
      } else {
        setCompareVolume(0);
      }

      setChartData(generateChartData(volume, selectedRegion, `${sessionId}-${targetKw}`, mockVarianceLevel, compConfig));

      // Only regenerate similar keywords if primary keyword changed
      if (!isSamePrimary) {
        const cityName = location.split(',')[0].trim();
        const variations = [
          `best ${targetKw.toLowerCase()} ${cityName}`,
          `${targetKw.toLowerCase()} near me`,
          `top rated ${targetKw.toLowerCase()} ${cityName}`,
          `affordable ${targetKw.toLowerCase()}`,
          `professional ${targetKw.toLowerCase()}`,
          `${targetKw.toLowerCase()} services ${cityName}`,
          `${targetKw.toLowerCase()} cost`,
          `${targetKw.toLowerCase()} reviews`
        ].slice(0, getRandomInt(5, 7));

        const similar = variations.map(v => {
          let kwMin = Math.floor(minVol * 0.2);
          let kwMax = Math.floor(maxVol * 0.8);
          return {
            keyword: v,
            volume: getRandomInt(kwMin, kwMax),
            competition: Math.random() > 0.5 ? "High" : "Medium",
            bid: `$${(Math.random() * 5 + 0.5).toFixed(2)}`
          };
        }).sort((a, b) => b.volume - a.volume);

        setSimilarKeywords(similar);
      }

      setHasSearched(true);
      setIsSearching(false);
    }, delay);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#202124] font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 w-full min-w-0">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left side: Logo & Title */}
          <div className="flex items-center gap-3 cursor-pointer shrink-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_logo.svg" alt="Google Ads Logo" className="w-8 h-8 object-contain shrink-0" />
            <div className="flex items-center gap-3">
              <span className="text-[17px] text-[#5f6368] font-normal tracking-tight whitespace-nowrap hidden sm:block">
                Google Search Engine
              </span>
              <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 bg-amber-50/50 border border-amber-200/60 rounded text-xs text-amber-700 transition-colors">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="font-medium whitespace-nowrap">Official Partner</span>
              </div>
            </div>
          </div>
          
          {/* Right side: Search & Profile */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 ml-4">
            <div className="hidden lg:flex items-center border border-gray-300 rounded overflow-hidden w-64 xl:w-[320px] bg-[#f1f3f4] h-10">
              <Search className="text-gray-500 ml-3 w-5 h-5 shrink-0" />
              <input 
                type="text" 
                placeholder="Search workspaces and reports" 
                className="bg-transparent border-none outline-none px-3 py-2 w-full text-[14px] text-gray-700 placeholder-gray-500"
              />
            </div>
            <div className="flex items-center gap-4 text-gray-600 shrink-0">
              <HelpCircle className="w-5 h-5 cursor-pointer hover:text-gray-900 transition-colors hidden sm:block" />
              <div className="relative" ref={settingsRef}>
                <Settings 
                  className="w-5 h-5 cursor-pointer hover:text-gray-900 transition-colors hidden sm:block" 
                  onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                />
                {isSettingsOpen && (
                  <div className="absolute top-full right-0 mt-4 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50 p-4 cursor-default">
                    <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wider">Mock Data Level</h3>
                    <div className="flex flex-col gap-3">
                      <label className="flex items-center gap-3 text-sm cursor-pointer hover:text-[#1a73e8] transition-colors group">
                        <input 
                          type="radio" 
                          name="mockLevel" 
                          checked={mockVolumeLevel === 'low'} 
                          onChange={() => handleVolumeLevelChange('low')} 
                          className="w-4 h-4 text-[#1a73e8] cursor-pointer" 
                        /> 
                        <span className="font-medium">Low <span className="text-gray-400 font-normal text-xs ml-1">(400 - 800)</span></span>
                      </label>
                      <label className="flex items-center gap-3 text-sm cursor-pointer hover:text-[#1a73e8] transition-colors group">
                        <input 
                          type="radio" 
                          name="mockLevel" 
                          checked={mockVolumeLevel === 'medium'} 
                          onChange={() => handleVolumeLevelChange('medium')} 
                          className="w-4 h-4 text-[#1a73e8] cursor-pointer" 
                        /> 
                        <span className="font-medium">Medium <span className="text-gray-400 font-normal text-xs ml-1">(800 - 1200)</span></span>
                      </label>
                      <label className="flex items-center gap-3 text-sm cursor-pointer hover:text-[#1a73e8] transition-colors group">
                        <input 
                          type="radio" 
                          name="mockLevel" 
                          checked={mockVolumeLevel === 'high'} 
                          onChange={() => handleVolumeLevelChange('high')} 
                          className="w-4 h-4 text-[#1a73e8] cursor-pointer" 
                        /> 
                        <span className="font-medium">High <span className="text-gray-400 font-normal text-xs ml-1">(1.2k - 3k)</span></span>
                      </label>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wider">Climate Profile</h3>
                      <div className="flex flex-col gap-2.5">
                        <label className="flex items-center gap-3 text-sm cursor-pointer hover:text-[#1a73e8] transition-colors group">
                          <input 
                            type="radio" 
                            name="climateRegion" 
                            checked={selectedRegion === 'warm_belt'} 
                            onChange={() => handleSelectRegion('warm_belt')} 
                            className="w-4 h-4 text-[#1a73e8] cursor-pointer" 
                          /> 
                          <span className="font-medium">Sunbelt <span className="text-gray-400 font-normal text-xs ml-1">(South / FL / TX)</span></span>
                        </label>
                        <label className="flex items-center gap-3 text-sm cursor-pointer hover:text-[#1a73e8] transition-colors group">
                          <input 
                            type="radio" 
                            name="climateRegion" 
                            checked={selectedRegion === 'cold_belt'} 
                            onChange={() => handleSelectRegion('cold_belt')} 
                            className="w-4 h-4 text-[#1a73e8] cursor-pointer" 
                          /> 
                          <span className="font-medium">Cold Belt <span className="text-gray-400 font-normal text-xs ml-1">(North / Midwest)</span></span>
                        </label>
                        <label className="flex items-center gap-3 text-sm cursor-pointer hover:text-[#1a73e8] transition-colors group">
                          <input 
                            type="radio" 
                            name="climateRegion" 
                            checked={selectedRegion === 'national'} 
                            onChange={() => handleSelectRegion('national')} 
                            className="w-4 h-4 text-[#1a73e8] cursor-pointer" 
                          /> 
                          <span className="font-medium">National Average <span className="text-gray-400 font-normal text-xs ml-1">(All 50 States)</span></span>
                        </label>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wider">Seasonality Randomness</h3>
                      <div className="flex flex-col gap-2.5">
                        <label className="flex items-center gap-3 text-sm cursor-pointer hover:text-[#1a73e8] transition-colors group">
                          <input type="radio" name="mockVariance" checked={mockVarianceLevel === 'realistic'} onChange={() => handleVarianceChange('realistic')} className="w-4 h-4 text-[#1a73e8] cursor-pointer" /> 
                          <span className="font-medium">Realistic <span className="text-gray-400 font-normal text-xs ml-1">(±16% noise)</span></span>
                        </label>
                        <label className="flex items-center gap-3 text-sm cursor-pointer hover:text-[#1a73e8] transition-colors group">
                          <input type="radio" name="mockVariance" checked={mockVarianceLevel === 'dynamic'} onChange={() => handleVarianceChange('dynamic')} className="w-4 h-4 text-[#1a73e8] cursor-pointer" /> 
                          <span className="font-medium">Dynamic <span className="text-gray-400 font-normal text-xs ml-1">(±26% noise)</span></span>
                        </label>
                        <label className="flex items-center gap-3 text-sm cursor-pointer hover:text-[#1a73e8] transition-colors group">
                          <input type="radio" name="mockVariance" checked={mockVarianceLevel === 'low'} onChange={() => handleVarianceChange('low')} className="w-4 h-4 text-[#1a73e8] cursor-pointer" /> 
                          <span className="font-medium">Subtle <span className="text-gray-400 font-normal text-xs ml-1">(±6% noise)</span></span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Grid className="w-5 h-5 cursor-pointer hover:text-gray-900 transition-colors" />
              <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer overflow-hidden border border-gray-200 hover:border-blue-400 transition-colors ml-1">
                <img src="/nivix-logo-4.png" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-normal mb-2 text-[#202124]">Discover new keywords</h1>
          <p className="text-sm text-gray-600">Enter products or services closely related to your business.</p>
        </div>

        {/* Search Config Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8 transition-shadow hover:shadow-md">
          <div className="flex flex-col md:flex-row gap-4 mb-4 relative overflow-visible">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-gray-600 uppercase">
                  {isComparing ? "Compare Keywords" : "Keywords"}
                </label>
                <button
                  type="button"
                  onClick={() => {
                    const willCompare = !isComparing;
                    setIsComparing(willCompare);
                    if (!willCompare) {
                      setCompareKeyword("");
                      setCompareVolume(0);
                      if (hasSearched && mainVolume > 0) {
                        const targetKw = selectedKeyword || keyword;
                        setChartData(generateChartData(mainVolume, selectedRegion, `${primarySessionIdRef.current}-${targetKw}`, mockVarianceLevel));
                      }
                    }
                  }}
                  className="text-xs font-medium text-[#1a73e8] hover:text-[#1557b0] transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {isComparing ? (
                    <>
                      <X className="w-3.5 h-3.5" />
                      <span>Cancel comparison</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-3.5 h-3.5" />
                      <span>Compare keyword</span>
                    </>
                  )}
                </button>
              </div>

              {!isComparing ? (
                <div className="relative border-b-2 border-gray-300 focus-within:border-[#1a73e8] transition-colors">
                  <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="text" 
                    value={keyword}
                    onChange={e => setKeyword(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSearch()}
                    className="w-full pl-8 pr-4 py-2 outline-none text-[15px] bg-transparent"
                    placeholder="Try 'pizza delivery', 'digital marketing', or 'accountant'"
                  />
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative border-b-2 border-blue-400 focus-within:border-[#1a73e8] transition-colors">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pl-0.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#1a73e8]"></span>
                    </div>
                    <input 
                      type="text" 
                      value={keyword}
                      onChange={e => setKeyword(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleSearch()}
                      className="w-full pl-5 pr-2 py-2 outline-none text-[14px] bg-transparent"
                      placeholder="Keyword 1 (Current service)"
                    />
                  </div>
                  <div className="relative border-b-2 border-red-300 focus-within:border-[#ea4335] transition-colors">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-1.5 pl-0.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ea4335]"></span>
                    </div>
                    <input 
                      type="text" 
                      value={compareKeyword}
                      onChange={e => setCompareKeyword(e.target.value)}
                      onKeyDown={e => e.key === 'Enter' && handleSearch()}
                      className="w-full pl-5 pr-2 py-2 outline-none text-[14px] bg-transparent"
                      placeholder="Keyword 2 (Expansion target)"
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="w-full md:w-80" ref={locationRef}>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Location</label>
              <div className="relative border-b-2 border-gray-300 focus-within:border-[#1a73e8] transition-colors">
                <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  value={locationQuery}
                  onChange={e => {
                    const val = e.target.value;
                    setLocationQuery(val);
                    const det = detectRegion(val);
                    if (det !== selectedRegion) {
                      setSelectedRegion(det);
                    }
                  }}
                  onFocus={() => { if(locationOptions.length > 0) setIsLocationDropdownOpen(true); }}
                  className="w-full pl-8 pr-4 py-2 outline-none text-[15px] bg-transparent"
                  placeholder="Orlando, FL"
                />
              </div>
              {isLocationDropdownOpen && (
                <div className="absolute top-full mt-1 w-full md:w-80 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden z-20">
                  {locationOptions.map((loc: any) => (
                    <div 
                      key={loc.id} 
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => handleSelectLocation(loc)}
                    >
                      {loc.name}{loc.admin1 ? `, ${loc.admin1}` : ''}, {loc.country}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full md:w-48">
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Language</label>
              <div className="relative border-b-2 border-gray-300 focus-within:border-[#1a73e8] transition-colors">
                <Globe className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select 
                  value={language}
                  onChange={e => setLanguage(e.target.value)}
                  className="w-full pl-8 pr-4 py-2 outline-none text-[15px] bg-transparent appearance-none cursor-pointer"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Portuguese">Portuguese</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-end">
            <button 
              onClick={() => handleSearch()}
              disabled={!keyword.trim() || isSearching || (isComparing && !compareKeyword.trim())}
              className={`px-6 py-2 rounded text-sm font-medium tracking-wide transition-all flex items-center gap-2 ${
                !keyword.trim() || (isComparing && !compareKeyword.trim()) ? 'bg-[#f1f3f4] text-gray-400 cursor-not-allowed' 
                : 'bg-[#1a73e8] text-white hover:bg-[#1557b0] shadow-sm hover:shadow active:bg-[#174ea6]'
              }`}
            >
              {isSearching ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : isComparing ? 'Compare Keywords' : 'Get Results'}
            </button>
          </div>
        </div>

        {/* Ghost Component: Clean Initial State (Before Search) */}
        {!hasSearched && !isSearching && (
          <div className="transition-opacity duration-500">
            {/* Ghost Chart Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-medium text-gray-400">Search volume trends</h2>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex bg-gray-100 rounded p-1 opacity-50">
                    <button disabled className="p-1.5 rounded bg-white shadow-sm text-gray-400 cursor-default">
                      <BarChart2 className="w-4 h-4" />
                    </button>
                    <button disabled className="p-1.5 rounded text-gray-400 cursor-default">
                      <LineChartIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="text-sm text-gray-400 flex items-center gap-2 border-l border-gray-200 pl-4">
                    <span>Last 12 months</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{location || "United States"}</span>
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col lg:flex-row gap-8 items-start">
                {/* Ghost Bar Chart */}
                <div className="flex-1 w-full h-[300px] flex flex-col justify-end">
                  <div className="flex-1 w-full flex items-end gap-2 sm:gap-3 px-2 border-b border-gray-200 pb-2">
                    {ghostMonths.map((m, i) => {
                      const season = REGION_CONFIGS[selectedRegion].seasonality[m.monthIndex];
                      const factor = season ? season.factor : 1.0;
                      const maxFactor = selectedRegion === 'cold_belt' ? 1.54 : (selectedRegion === 'warm_belt' ? 1.20 : 1.46);
                      const h = Math.round((factor / maxFactor) * 85);
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                          <div 
                            className="w-full max-w-[36px] bg-gray-100 rounded-t border-t border-x border-gray-200/70 transition-all duration-300"
                            style={{ height: `${h}%` }}
                            title={`${m.fullName}: Score ${season?.scaleScore || ''}/100 (${season?.phase || ''})`}
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between px-2 pt-2">
                    {ghostMonths.map((m, i) => (
                      <span key={i} className="flex-1 text-center text-[11px] text-gray-400 font-medium">
                        {m.short}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ghost Device Breakdown */}
                <div className="w-full lg:w-64 shrink-0 flex flex-col items-center">
                  <h3 className="text-sm font-medium text-gray-400 mb-4 self-start">Device Breakdown</h3>
                  <div className="h-[200px] w-full flex flex-col items-center justify-center relative">
                    <div className="w-36 h-36 rounded-full border-8 border-gray-100 flex items-center justify-center flex-col">
                      <span className="text-xl font-semibold text-gray-300">—</span>
                      <span className="text-[11px] text-gray-400 mt-0.5">Awaiting search</span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm bg-gray-200"></div>
                      <span>Mobile</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-sm bg-gray-200"></div>
                      <span>Desktop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ghost Keyword ideas Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <h2 className="text-[15px] font-medium text-gray-400">Keyword ideas</h2>
                  <span className="text-xs bg-gray-100 text-gray-400 px-2 py-0.5 rounded-full font-medium">0 available</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Filter className="w-4 h-4 cursor-not-allowed" />
                  <Columns className="w-4 h-4 cursor-not-allowed" />
                  <Download className="w-4 h-4 cursor-not-allowed" />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-400 bg-white border-b border-gray-200">
                    <tr>
                      <th className="p-4 w-12 font-normal">
                        <input type="checkbox" disabled className="w-4 h-4 rounded border-gray-300 text-gray-300 cursor-not-allowed" />
                      </th>
                      <th className="px-4 py-3 font-medium">Keyword (by relevance)</th>
                      <th className="px-4 py-3 font-medium text-right">Avg. monthly searches</th>
                      <th className="px-4 py-3 font-medium">Competition</th>
                      <th className="px-4 py-3 font-medium text-right">Top of page bid (low range)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { w: "w-48", vol: "w-16", comp: "w-12", bid: "w-14" },
                      { w: "w-64", vol: "w-20", comp: "w-16", bid: "w-12" },
                      { w: "w-52", vol: "w-14", comp: "w-12", bid: "w-16" },
                      { w: "w-40", vol: "w-16", comp: "w-14", bid: "w-14" },
                      { w: "w-56", vol: "w-18", comp: "w-12", bid: "w-12" },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                        <td className="p-4">
                          <input type="checkbox" disabled className="w-4 h-4 rounded border-gray-200 text-gray-300 cursor-not-allowed" />
                        </td>
                        <td className="px-4 py-3">
                          <div className={`h-4 ${row.w} bg-gray-100 rounded`}></div>
                        </td>
                        <td className="px-4 py-3 flex justify-end">
                          <div className={`h-4 ${row.vol} bg-gray-100 rounded`}></div>
                        </td>
                        <td className="px-4 py-3">
                          <div className={`h-4 ${row.comp} bg-gray-100 rounded`}></div>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className={`h-4 ${row.bid} bg-gray-100 rounded ml-auto`}></div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Loading Skeleton */}
        {isSearching && (
          <div className="animate-in fade-in duration-300 ease-out">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-6">
              <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-8"></div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 w-full h-[300px] flex items-end gap-2">
                  {ghostMonths.map((m, i) => {
                    const season = REGION_CONFIGS[selectedRegion].seasonality[m.monthIndex];
                    const factor = season ? season.factor : 1.0;
                    const maxFactor = selectedRegion === 'cold_belt' ? 1.54 : (selectedRegion === 'warm_belt' ? 1.20 : 1.46);
                    const h = Math.round((factor / maxFactor) * 85);
                    return (
                      <div key={i} className="flex-1 bg-gray-100 rounded-t animate-pulse" style={{ height: `${h}%` }}></div>
                    );
                  })}
                </div>
                <div className="w-full lg:w-64 shrink-0 flex flex-col items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gray-100 animate-pulse"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between bg-gray-50/50">
                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="p-4 space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="h-4 w-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 flex-1 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results Dashboard */}
        {hasSearched && !isSearching && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out fill-mode-forwards">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 overflow-hidden">
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 flex-wrap gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-lg font-medium text-[#202124]">Search volume trends</h2>
                  {isComparing && compareKeyword.trim() ? (
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-medium px-2.5 py-1 bg-blue-50 text-[#1a73e8] border border-blue-200 rounded-full flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#1a73e8]"></span>
                        {keyword}
                      </span>
                      <span className="text-xs text-gray-400 font-semibold">vs</span>
                      <span className="text-xs font-medium px-2.5 py-1 bg-red-50 text-[#ea4335] border border-red-200 rounded-full flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#ea4335]"></span>
                        {compareKeyword}
                      </span>
                      {compareVolume > 0 && mainVolume > 0 && (
                        <span className="text-[11px] font-semibold px-2 py-0.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md">
                          +{Math.round(((compareVolume - mainVolume) / mainVolume) * 100)}% Opportunity
                        </span>
                      )}
                    </div>
                  ) : selectedKeyword ? (
                    <span className="text-xs font-medium px-2.5 py-1 bg-blue-50 text-[#1a73e8] rounded-full">
                      {selectedKeyword}
                    </span>
                  ) : null}
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Chart Type Toggle */}
                  <div className="flex bg-gray-100 rounded p-1">
                    <button 
                      onClick={() => setChartType('bar')}
                      className={`p-1.5 rounded ${chartType === 'bar' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                      title="Bar chart"
                    >
                      <BarChart2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setChartType('line')}
                      className={`p-1.5 rounded ${chartType === 'line' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                      title="Line chart"
                    >
                      <LineChartIcon className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-sm text-gray-500 flex items-center gap-2 border-l border-gray-200 pl-4">
                    <span>Last 12 months</span>
                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                    <span>{location}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col lg:flex-row gap-8 items-start">
                {/* Chart Section */}
                <div className="flex-1 w-full flex flex-col">
                  <div className="w-full h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      {chartType === 'bar' ? (
                        <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8eaed" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#5f6368', fontSize: 12 }} 
                            dy={10}
                          />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#5f6368', fontSize: 12 }}
                          />
                          <RechartsTooltip 
                            cursor={{fill: '#f8f9fa'}}
                            content={<CustomTooltip isComparing={isComparing && !!compareKeyword.trim()} kw1={keyword} kw2={compareKeyword} />}
                          />
                          {isComparing && compareKeyword.trim() ? (
                            <>
                              <Bar dataKey="searches" name={keyword} fill="#1a73e8" radius={[2, 2, 0, 0]} maxBarSize={30} />
                              <Bar dataKey="compareSearches" name={compareKeyword} fill="#ea4335" radius={[2, 2, 0, 0]} maxBarSize={30} />
                            </>
                          ) : (
                            <>
                              <Bar dataKey="mobile" stackId="a" fill="#1a73e8" maxBarSize={40} />
                              <Bar dataKey="desktop" stackId="a" fill="#8ab4f8" radius={[2, 2, 0, 0]} maxBarSize={40} />
                            </>
                          )}
                        </BarChart>
                      ) : (
                        <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8eaed" />
                          <XAxis 
                            dataKey="name" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#5f6368', fontSize: 12 }} 
                            dy={10}
                          />
                          <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{ fill: '#5f6368', fontSize: 12 }}
                          />
                          <RechartsTooltip 
                            content={<CustomTooltip isComparing={isComparing && !!compareKeyword.trim()} kw1={keyword} kw2={compareKeyword} />}
                          />
                          {isComparing && compareKeyword.trim() ? (
                            <>
                              <Line type="monotone" dataKey="searches" name={keyword} stroke="#1a73e8" strokeWidth={3} dot={{ r: 4, fill: '#1a73e8', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                              <Line type="monotone" dataKey="compareSearches" name={compareKeyword} stroke="#ea4335" strokeWidth={3} dot={{ r: 4, fill: '#ea4335', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                            </>
                          ) : (
                            <>
                              <Line type="monotone" dataKey="searches" stroke="#1a73e8" strokeWidth={3} dot={{ r: 4, fill: '#1a73e8', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                              <Line type="monotone" dataKey="mobile" stroke="#8ab4f8" strokeWidth={2} strokeDasharray="4 4" dot={{ r: 3, fill: '#8ab4f8', strokeWidth: 1, stroke: '#fff' }} activeDot={{ r: 5 }} />
                            </>
                          )}
                        </LineChart>
                      )}
                    </ResponsiveContainer>
                  </div>

                  {/* Dual Legend when comparing */}
                  {isComparing && compareKeyword.trim() && (
                    <div className="flex items-center justify-center gap-6 mt-3 text-xs text-gray-600">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-sm bg-[#1a73e8]"></span>
                        <span className="font-medium text-gray-700">{keyword} (Current)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-sm bg-[#ea4335]"></span>
                        <span className="font-medium text-gray-700">{compareKeyword} (Higher Demand)</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Breakdown Widget (Market Opportunity when comparing, or Device Breakdown) */}
                {(() => {
                  if (isComparing && compareKeyword.trim() && compareVolume > 0) {
                    const totalBoth = mainVolume + compareVolume;
                    const kw1Pct = Math.round((mainVolume / totalBoth) * 100);
                    const kw2Pct = 100 - kw1Pct;
                    const diffPct = Math.round(((compareVolume - mainVolume) / mainVolume) * 100);

                    return (
                      <div className="w-full lg:w-64 shrink-0 flex flex-col items-center">
                        <h3 className="text-sm font-medium text-gray-700 mb-4 self-start">Market Opportunity</h3>
                        <div className="h-[200px] w-full relative">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={[
                                  { name: keyword, value: kw1Pct },
                                  { name: compareKeyword, value: kw2Pct },
                                ]}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={2}
                                dataKey="value"
                              >
                                <Cell fill="#1a73e8" />
                                <Cell fill="#ea4335" />
                              </Pie>
                              <RechartsTooltip />
                            </PieChart>
                          </ResponsiveContainer>
                          <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                            <span className="text-2xl font-bold text-emerald-600">+{diffPct}%</span>
                            <span className="text-[11px] font-medium text-gray-500">Higher Demand</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-3 text-xs text-gray-600 w-full px-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 truncate max-w-[120px]">
                              <div className="w-3 h-3 rounded-sm bg-[#1a73e8] shrink-0"></div>
                              <span className="truncate">{keyword}</span>
                            </div>
                            <span className="font-semibold text-gray-800">{mainVolume.toLocaleString()} ({kw1Pct}%)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 truncate max-w-[120px]">
                              <div className="w-3 h-3 rounded-sm bg-[#ea4335] shrink-0"></div>
                              <span className="truncate">{compareKeyword}</span>
                            </div>
                            <span className="font-semibold text-[#ea4335]">{compareVolume.toLocaleString()} ({kw2Pct}%)</span>
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const totalSearchesSum = chartData.reduce((acc, cur) => acc + (cur.searches || 0), 0);
                  const totalMobileSum = chartData.reduce((acc, cur) => acc + (cur.mobile || 0), 0);
                  const currentMobilePct = totalSearchesSum > 0 ? Math.round((totalMobileSum / totalSearchesSum) * 100) : 75;
                  const currentDesktopPct = 100 - currentMobilePct;

                  return (
                    <div className="w-full lg:w-64 shrink-0 flex flex-col items-center">
                      <h3 className="text-sm font-medium text-gray-700 mb-4 self-start">Device Breakdown</h3>
                      <div className="h-[200px] w-full relative">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={[
                                { name: 'Mobile', value: currentMobilePct },
                                { name: 'Desktop', value: currentDesktopPct },
                              ]}
                              cx="50%"
                              cy="50%"
                              innerRadius={60}
                              outerRadius={80}
                              paddingAngle={2}
                              dataKey="value"
                            >
                              <Cell fill="#1a73e8" />
                              <Cell fill="#8ab4f8" />
                            </Pie>
                            <RechartsTooltip />
                          </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-2xl font-semibold text-[#202124]">{currentMobilePct}%</span>
                          <span className="text-xs text-gray-500">Mobile</span>
                        </div>
                      </div>
                      <div className="flex gap-4 mt-2 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-sm bg-[#1a73e8]"></div>
                          <span>Mobile ({currentMobilePct}%)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-sm bg-[#8ab4f8]"></div>
                          <span>Desktop ({currentDesktopPct}%)</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <h2 className="text-[15px] font-medium text-[#202124]">Keyword ideas</h2>
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">
                    {similarKeywords.length + (isComparing && compareKeyword.trim() ? 2 : 1)} available
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <Filter className="w-4 h-4 cursor-pointer hover:text-gray-900" />
                  <Columns className="w-4 h-4 cursor-pointer hover:text-gray-900" />
                  <Download className="w-4 h-4 cursor-pointer hover:text-gray-900" />
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-gray-500 bg-white border-b border-gray-200">
                    <tr>
                      <th className="p-4 w-12 font-normal">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1a73e8] focus:ring-[#1a73e8]" />
                      </th>
                      <th className="px-4 py-3 font-medium cursor-pointer hover:bg-gray-50">Keyword (by relevance)</th>
                      <th className="px-4 py-3 font-medium cursor-pointer hover:bg-gray-50 text-right">Avg. monthly searches</th>
                      <th className="px-4 py-3 font-medium cursor-pointer hover:bg-gray-50">Competition</th>
                      <th className="px-4 py-3 font-medium cursor-pointer hover:bg-gray-50 text-right">Top of page bid (low range)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {/* Main Keyword Row */}
                    <tr 
                      onClick={() => {
                        setSelectedKeyword(keyword);
                        setActiveVolume(mainVolume);
                        setChartData(generateChartData(mainVolume, selectedRegion, `${searchSessionId}-${keyword}`, mockVarianceLevel, getComparisonConfig(mainVolume)));
                      }}
                      className={`cursor-pointer transition-colors group ${
                        selectedKeyword === keyword ? "bg-blue-50/70 border-l-4 border-l-[#1a73e8]" : "hover:bg-gray-50"
                      }`}
                    >
                      <td className="p-4" onClick={(e) => e.stopPropagation()}>
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1a73e8] focus:ring-[#1a73e8]" />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#1a73e8]"></span>
                          <span className={`font-medium group-hover:underline ${selectedKeyword === keyword ? "text-[#1a73e8]" : "text-[#1a73e8]"}`}>
                            {keyword}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5 ml-4">Primary keyword (Current service)</div>
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-[#202124]">{mainVolume.toLocaleString()}</td>
                      <td className="px-4 py-3 text-gray-600">High</td>
                      <td className="px-4 py-3 text-right text-gray-600">$1.20</td>
                    </tr>

                    {/* Comparison Keyword Row (If comparing) */}
                    {isComparing && compareKeyword.trim() && compareVolume > 0 && (
                      <tr 
                        onClick={() => {
                          setSelectedKeyword(compareKeyword);
                          setActiveVolume(compareVolume);
                        }}
                        className={`cursor-pointer transition-colors group ${
                          selectedKeyword === compareKeyword ? "bg-red-50/70 border-l-4 border-l-[#ea4335]" : "bg-red-50/30 hover:bg-red-50/50"
                        }`}
                      >
                        <td className="p-4" onClick={(e) => e.stopPropagation()}>
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#ea4335] focus:ring-[#ea4335]" defaultChecked />
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#ea4335]"></span>
                            <span className="font-semibold text-[#ea4335] group-hover:underline">
                              {compareKeyword}
                            </span>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 uppercase tracking-wide">
                              Higher Demand
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5 ml-4">Comparison target (New market opportunity)</div>
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-[#ea4335]">{compareVolume.toLocaleString()}</td>
                        <td className="px-4 py-3 text-gray-700 font-medium">Very High</td>
                        <td className="px-4 py-3 text-right text-emerald-700 font-semibold">$2.45</td>
                      </tr>
                    )}
                    
                    {/* Similar Keywords Rows */}
                    {similarKeywords.map((item, idx) => (
                      <tr 
                        key={idx} 
                        onClick={() => {
                          setSelectedKeyword(item.keyword);
                          setActiveVolume(item.volume);
                          setChartData(generateChartData(item.volume, selectedRegion, `${searchSessionId}-${item.keyword}`, mockVarianceLevel, getComparisonConfig(item.volume)));
                        }}
                        className={`cursor-pointer transition-colors group ${
                          selectedKeyword === item.keyword ? "bg-blue-50/70 border-l-4 border-l-[#1a73e8]" : "hover:bg-[#f4f8fe]"
                        }`}
                      >
                        <td className="p-4" onClick={(e) => e.stopPropagation()}>
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1a73e8] focus:ring-[#1a73e8]" />
                        </td>
                        <td className="px-4 py-3">
                          <div className={`font-medium ${selectedKeyword === item.keyword ? "text-[#1a73e8]" : "text-[#202124]"} group-hover:text-[#1a73e8]`}>
                            {item.keyword}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-right text-[#202124] font-medium">{item.volume.toLocaleString()}</td>
                        <td className="px-4 py-3 text-gray-600">{item.competition}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{item.bid}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
