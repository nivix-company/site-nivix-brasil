"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from "recharts";
import { 
  Search, MapPin, Globe, Grid, Bell, Settings, HelpCircle, User, 
  TrendingUp, Download, Filter, Columns, RefreshCw, Plus, BarChart2, LineChart as LineChartIcon, ShieldCheck
} from "lucide-react";

// Helper to generate random number between min and max
const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Generate mock chart data (12 months)
const generateChartData = (baseVolume: number) => {
  const months = ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  const variance = Math.floor(baseVolume * 0.3); // 30% variance
  return months.map(month => {
    const totalSearches = Math.max(0, baseVolume + getRandomInt(-variance, variance));
    // Simulate ~75% mobile
    const mobileShare = 0.75 + (getRandomInt(-5, 5) / 100);
    const mobile = Math.round(totalSearches * mobileShare);
    const desktop = totalSearches - mobile;
    return {
      name: month,
      searches: totalSearches,
      mobile,
      desktop
    };
  });
};

const COLORS = ['#1a73e8', '#e8f0fe'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const mobile = payload.find((p: any) => p.dataKey === 'mobile')?.value || 0;
    const desktop = payload.find((p: any) => p.dataKey === 'desktop')?.value || 0;
    const total = mobile + desktop;

    return (
      <div className="bg-white p-3 rounded-lg shadow-md border border-gray-100 text-sm min-w-[150px]">
        <p className="font-semibold text-gray-800 mb-2">{label}</p>
        <div className="space-y-1">
          <p className="text-[#1a73e8] flex justify-between gap-4"><span>Mobile:</span> <span className="font-medium">{mobile.toLocaleString()}</span></p>
          <p className="text-[#8ab4f8] flex justify-between gap-4"><span>Desktop:</span> <span className="font-medium">{desktop.toLocaleString()}</span></p>
        </div>
        <div className="mt-2 pt-2 border-t border-gray-100">
          <p className="font-bold text-red-600 text-base flex justify-between gap-4"><span>Total:</span> <span>{total.toLocaleString()}</span></p>
        </div>
      </div>
    );
  }
  return null;
};

export default function KeywordPlanner() {
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  
  // Inputs
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("Orlando, FL");
  const [language, setLanguage] = useState("English");

  // Chart Toggle
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');

  // Secret Mock Settings
  const [mockVolumeLevel, setMockVolumeLevel] = useState('high');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Autocomplete Location State
  const [locationQuery, setLocationQuery] = useState(location);
  const [locationOptions, setLocationOptions] = useState<any[]>([]);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);

  // Results state
  const [mainVolume, setMainVolume] = useState(0);
  const [chartData, setChartData] = useState<any[]>([]);
  const [similarKeywords, setSimilarKeywords] = useState<any[]>([]);

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

  const handleSelectLocation = (loc: any) => {
    const locString = `${loc.name}, ${loc.admin1 ? loc.admin1 + ', ' : ''}${loc.country}`;
    setLocation(locString);
    setLocationQuery(locString);
    setIsLocationDropdownOpen(false);
  };

  const handleSearch = () => {
    if (!keyword.trim()) return;
    setIsSearching(true);
    setHasSearched(false);
    
    // Simulate network delay for loading state
    setTimeout(() => {
      let minVol = 1200;
      let maxVol = 3000;
      if (mockVolumeLevel === 'low') {
        minVol = 400;
        maxVol = 800;
      } else if (mockVolumeLevel === 'medium') {
        minVol = 800;
        maxVol = 1200;
      }
      
      const volume = getRandomInt(minVol, maxVol);
      setMainVolume(volume);
      setChartData(generateChartData(volume));

      const cityName = location.split(',')[0].trim();
      const variations = [
        `best ${keyword.toLowerCase()} ${cityName}`,
        `${keyword.toLowerCase()} near me`,
        `${keyword.toLowerCase()} services in ${cityName}`,
        `professional ${keyword.toLowerCase()}`,
        `cheap ${keyword.toLowerCase()}`,
        `${keyword.toLowerCase()} contractors ${cityName}`,
        `${keyword.toLowerCase()} cost`
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
      setHasSearched(true);
      setIsSearching(false);
    }, 1800);
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
                Google Official Search Engine
              </span>
              <div className="hidden md:flex items-center gap-1.5 px-2 py-0.5 bg-amber-50/50 border border-amber-200/60 rounded text-xs text-amber-700 transition-colors">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span className="font-medium whitespace-nowrap">Official Partner</span>
              </div>
            </div>
          </div>
          
          {/* Right side: Search & Profile */}
          <div className="flex items-center gap-6 shrink-0 ml-4">
            <div className="hidden lg:flex items-center border border-gray-300 rounded overflow-hidden w-64 xl:w-[350px] bg-[#f1f3f4] h-10">
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
                  <div className="absolute top-full right-0 mt-4 w-56 bg-white rounded-lg shadow-xl border border-gray-200 z-50 p-4 cursor-default">
                    <h3 className="text-xs font-bold text-gray-500 uppercase mb-3 tracking-wider">Mock Data Level</h3>
                    <div className="flex flex-col gap-3">
                      <label className="flex items-center gap-3 text-sm cursor-pointer hover:text-[#1a73e8] transition-colors group">
                        <input type="radio" name="mockLevel" checked={mockVolumeLevel === 'low'} onChange={() => setMockVolumeLevel('low')} className="w-4 h-4 text-[#1a73e8] cursor-pointer" /> 
                        <span className="font-medium">Low <span className="text-gray-400 font-normal text-xs ml-1">(400 - 800)</span></span>
                      </label>
                      <label className="flex items-center gap-3 text-sm cursor-pointer hover:text-[#1a73e8] transition-colors group">
                        <input type="radio" name="mockLevel" checked={mockVolumeLevel === 'medium'} onChange={() => setMockVolumeLevel('medium')} className="w-4 h-4 text-[#1a73e8] cursor-pointer" /> 
                        <span className="font-medium">Medium <span className="text-gray-400 font-normal text-xs ml-1">(800 - 1200)</span></span>
                      </label>
                      <label className="flex items-center gap-3 text-sm cursor-pointer hover:text-[#1a73e8] transition-colors group">
                        <input type="radio" name="mockLevel" checked={mockVolumeLevel === 'high'} onChange={() => setMockVolumeLevel('high')} className="w-4 h-4 text-[#1a73e8] cursor-pointer" /> 
                        <span className="font-medium">High <span className="text-gray-400 font-normal text-xs ml-1">(1.2k - 3k)</span></span>
                      </label>
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
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Keywords</label>
              <div className="relative border-b-2 border-gray-300 focus-within:border-[#1a73e8] transition-colors">
                <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  value={keyword}
                  onChange={e => setKeyword(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-8 pr-4 py-2 outline-none text-[15px] bg-transparent"
                  placeholder="Flooring service near me"
                />
              </div>
            </div>
            <div className="w-full md:w-72" ref={locationRef}>
              <label className="block text-xs font-semibold text-gray-600 uppercase mb-2">Location</label>
              <div className="relative border-b-2 border-gray-300 focus-within:border-[#1a73e8] transition-colors">
                <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="text" 
                  value={locationQuery}
                  onChange={e => setLocationQuery(e.target.value)}
                  onFocus={() => { if(locationOptions.length > 0) setIsLocationDropdownOpen(true); }}
                  className="w-full pl-8 pr-4 py-2 outline-none text-[15px] bg-transparent"
                  placeholder="Search city..."
                />
              </div>
              {isLocationDropdownOpen && (
                <div className="absolute top-full mt-1 w-full md:w-72 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden z-10">
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
          <div className="flex justify-end mt-6">
            <button 
              onClick={handleSearch}
              disabled={!keyword.trim() || isSearching}
              className={`px-6 py-2 rounded text-sm font-medium tracking-wide transition-all flex items-center gap-2 ${
                !keyword.trim() ? 'bg-[#f1f3f4] text-gray-400 cursor-not-allowed' 
                : 'bg-[#1a73e8] text-white hover:bg-[#1557b0] shadow-sm hover:shadow active:bg-[#174ea6]'
              }`}
            >
              {isSearching ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : 'Get Results'}
            </button>
          </div>
        </div>

        {/* Loading Skeleton */}
        {isSearching && (
          <div className="animate-in fade-in duration-300 ease-out">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 p-6">
              <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-8"></div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1 w-full h-[300px] flex items-end gap-2">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="flex-1 bg-gray-100 rounded-t animate-pulse" style={{ height: `${Math.random() * 60 + 20}%` }}></div>
                  ))}
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
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-medium text-[#202124]">Search volume trends</h2>
                <div className="flex items-center gap-4">
                  <div className="flex bg-gray-100 rounded p-1">
                    <button 
                      onClick={() => setChartType('bar')}
                      className={`p-1.5 rounded ${chartType === 'bar' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                      <BarChart2 className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setChartType('line')}
                      className={`p-1.5 rounded ${chartType === 'line' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-700'}`}
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
                <div className="flex-1 w-full h-[300px]">
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
                          content={<CustomTooltip />}
                        />
                        <Bar dataKey="mobile" stackId="a" fill="#1a73e8" maxBarSize={40} />
                        <Bar dataKey="desktop" stackId="a" fill="#8ab4f8" radius={[2, 2, 0, 0]} maxBarSize={40} />
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
                          content={<CustomTooltip />}
                        />
                        <Line type="monotone" dataKey="mobile" stroke="#1a73e8" strokeWidth={3} dot={{ r: 4, fill: '#1a73e8', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                        <Line type="monotone" dataKey="desktop" stroke="#8ab4f8" strokeWidth={3} dot={{ r: 4, fill: '#8ab4f8', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
                      </LineChart>
                    )}
                  </ResponsiveContainer>
                </div>

                {/* Device Breakdown */}
                <div className="w-full lg:w-64 shrink-0 flex flex-col items-center">
                  <h3 className="text-sm font-medium text-gray-700 mb-4 self-start">Device Breakdown</h3>
                  <div className="h-[200px] w-full relative">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Mobile', value: 75 },
                            { name: 'Desktop', value: 25 },
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
                      <span className="text-2xl font-semibold text-[#202124]">75%</span>
                      <span className="text-xs text-gray-500">Mobile</span>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-sm bg-[#1a73e8]"></div>
                      <span>Mobile</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-sm bg-[#8ab4f8]"></div>
                      <span>Desktop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-200 px-4 py-3 flex items-center justify-between bg-gray-50/50">
                <div className="flex items-center gap-2">
                  <h2 className="text-[15px] font-medium text-[#202124]">Keyword ideas</h2>
                  <span className="text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full">{similarKeywords.length + 1} available</span>
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
                    <tr className="hover:bg-gray-50 transition-colors group">
                      <td className="p-4">
                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1a73e8] focus:ring-[#1a73e8]" />
                      </td>
                      <td className="px-4 py-3">
                        <div className="font-medium text-[#1a73e8] cursor-pointer hover:underline">{keyword}</div>
                        <div className="text-xs text-gray-500 mt-0.5">Provided keyword</div>
                      </td>
                      <td className="px-4 py-3 text-right font-medium text-[#202124]">{mainVolume.toLocaleString()}</td>
                      <td className="px-4 py-3 text-gray-600">High</td>
                      <td className="px-4 py-3 text-right text-gray-600">$1.20</td>
                    </tr>
                    
                    {/* Similar Keywords Rows */}
                    {similarKeywords.map((item, idx) => (
                      <tr key={idx} className="hover:bg-[#f4f8fe] transition-colors group">
                        <td className="p-4">
                          <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#1a73e8] focus:ring-[#1a73e8]" />
                        </td>
                        <td className="px-4 py-3">
                          <div className="text-[#202124]">{item.keyword}</div>
                        </td>
                        <td className="px-4 py-3 text-right text-[#202124]">{item.volume.toLocaleString()}</td>
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
