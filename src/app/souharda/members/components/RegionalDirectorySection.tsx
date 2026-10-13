'use client';

import React, { useState } from 'react';

interface DistrictItem {
  id: string;
  name: string;
  count: number;
  region: 'bengaluru' | 'mysuru' | 'kalaburagi' | 'belagavi';
  color: string;
}

const DISTRICTS: DistrictItem[] = [
  // Bengaluru Region
  { id: 'ramanakara', name: 'RAMANAGARA', count: 24, region: 'bengaluru', color: '#ef4444' },
  { id: 'bengaluru-r', name: 'BENGALURU RURAL', count: 38, region: 'bengaluru', color: '#f97316' },
  { id: 'bengaluru-u', name: 'BENGALURU URBAN', count: 509, region: 'bengaluru', color: '#16a34a' },
  { id: 'chikkaballapura', name: 'CHIKKABALLAPURA', count: 48, region: 'bengaluru', color: '#84cc16' },
  { id: 'chitradurga', name: 'CHITRADURGA', count: 104, region: 'bengaluru', color: '#65a30d' },
  { id: 'davanagere', name: 'DAVANAGERE', count: 92, region: 'bengaluru', color: '#059669' },
  { id: 'kolar', name: 'KOLAR', count: 68, region: 'bengaluru', color: '#10b981' },
  { id: 'shivamogga', name: 'SHIVAMOGGA', count: 103, region: 'bengaluru', color: '#9333ea' },
  { id: 'tumakuru', name: 'TUMAKURU', count: 247, region: 'bengaluru', color: '#c026d3' },

  // Mysuru Region
  { id: 'chikkamagaluru', name: 'CHIKKAMAGALURU', count: 98, region: 'mysuru', color: '#0284c7' },
  { id: 'chamarajanagara', name: 'CHAMARAJANAGARA', count: 31, region: 'mysuru', color: '#1d4ed8' },
  { id: 'hassan', name: 'HASSAN', count: 73, region: 'mysuru', color: '#3b82f6' },
  { id: 'kodagu', name: 'KODAGU', count: 39, region: 'mysuru', color: '#6366f1' },
  { id: 'mandya', name: 'MANDYA', count: 32, region: 'mysuru', color: '#4f46e5' },
  { id: 'dakshina-kannada', name: 'DAKSHINA KANNADA', count: 139, region: 'mysuru', color: '#0ea5e9' },
  { id: 'mysuru', name: 'MYSURU', count: 94, region: 'mysuru', color: '#f59e0b' },
  { id: 'udupi', name: 'UDUPI', count: 83, region: 'mysuru', color: '#d97706' },

  // Kalaburagi Region
  { id: 'bidar', name: 'BIDAR', count: 389, region: 'kalaburagi', color: '#0284c7' },
  { id: 'ballari', name: 'BALLARI', count: 112, region: 'kalaburagi', color: '#06b6d4' },
  { id: 'kalaburagi', name: 'KALABURAGI', count: 340, region: 'kalaburagi', color: '#2563eb' },
  { id: 'koppala', name: 'KOPPALA', count: 441, region: 'kalaburagi', color: '#4f46e5' },
  { id: 'raichur', name: 'RAICHUR', count: 418, region: 'kalaburagi', color: '#7c3aed' },
  { id: 'vijayanagara', name: 'VIJAYANAGARA', count: 69, region: 'kalaburagi', color: '#0891b2' },
  { id: 'yadagiri', name: 'YADAGIRI', count: 78, region: 'kalaburagi', color: '#38bdf8' },

  // Belagavi Region
  { id: 'bagalkote', name: 'BAGALKOTE', count: 160, region: 'belagavi', color: '#15803d' },
  { id: 'belagavi', name: 'BELAGAVI', count: 1221, region: 'belagavi', color: '#16a34a' },
  { id: 'dharwad', name: 'DHARWAD', count: 215, region: 'belagavi', color: '#22c55e' },
  { id: 'gadag', name: 'GADAG', count: 142, region: 'belagavi', color: '#84cc16' },
  { id: 'haveri', name: 'HAVERI', count: 118, region: 'belagavi', color: '#65a30d' },
  { id: 'uttara-kannada', name: 'UTTARA KANNADA', count: 145, region: 'belagavi', color: '#10b981' },
  { id: 'vijayapura', name: 'VIJAYAPURA', count: 210, region: 'belagavi', color: '#059669' },
];

const TOTAL_COUNT = DISTRICTS.reduce((acc, curr) => acc + curr.count, 0);

function describeDonutSegment(
  cx: number,
  cy: number,
  outerRadius: number,
  innerRadius: number,
  startAngle: number,
  endAngle: number
) {
  const rad = (deg: number) => ((deg - 90) * Math.PI) / 180;

  const x1 = cx + outerRadius * Math.cos(rad(startAngle));
  const y1 = cy + outerRadius * Math.sin(rad(startAngle));
  const x2 = cx + outerRadius * Math.cos(rad(endAngle));
  const y2 = cy + outerRadius * Math.sin(rad(endAngle));

  const x3 = cx + innerRadius * Math.cos(rad(endAngle));
  const y3 = cy + innerRadius * Math.sin(rad(endAngle));
  const x4 = cx + innerRadius * Math.cos(rad(startAngle));
  const y4 = cy + innerRadius * Math.sin(rad(startAngle));

  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4} Z`;
}

// 3D Donut Component with Dynamic Text Coloring on Mouseover
function InteractiveDonutChart({
  items,
  totalCount,
  defaultSubtitle,
  size = 380,
  hoveredDistrict,
  onHoverDistrict,
}: {
  items: DistrictItem[];
  totalCount: number;
  defaultSubtitle: string;
  size?: number;
  hoveredDistrict?: DistrictItem | null;
  onHoverDistrict?: (district: DistrictItem | null) => void;
}) {
  const [localHover, setLocalHover] = useState<DistrictItem | null>(null);

  const activeDistrict = hoveredDistrict !== undefined ? hoveredDistrict : localHover;

  const handleMouseEnter = (item: DistrictItem) => {
    setLocalHover(item);
    if (onHoverDistrict) onHoverDistrict(item);
  };

  const handleMouseLeave = () => {
    setLocalHover(null);
    if (onHoverDistrict) onHoverDistrict(null);
  };

  const center = size / 2;
  const outerR = size * 0.42;
  const innerR = size * 0.27;
  const GAP = 0.8;

  let currentAngle = 0;
  const slices = items.map((district) => {
    const angleSpan = (district.count / totalCount) * 360;
    const startAngle = currentAngle + GAP / 2;
    const endAngle = currentAngle + angleSpan - GAP / 2;
    const midAngle = currentAngle + angleSpan / 2;
    currentAngle += angleSpan;

    const pathData = describeDonutSegment(
      center,
      center,
      outerR,
      innerR,
      startAngle,
      Math.max(endAngle, startAngle + 0.2)
    );

    const rad = ((midAngle - 90) * Math.PI) / 180;
    const shiftX = Math.cos(rad) * 12;
    const shiftY = Math.sin(rad) * 12;

    return { ...district, pathData, shiftX, shiftY };
  });

  const displayCount = activeDistrict ? activeDistrict.count : totalCount;
  const displayLabel = activeDistrict ? activeDistrict.name : defaultSubtitle;
  
  // Center Text Color matches Hovered District color or defaults to navy
  const displayColor = activeDistrict ? activeDistrict.color : '#002b5b';

  return (
    <div className="relative flex items-center justify-center p-2" style={{ width: size, height: size }}>
      <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
        <defs>
          <filter id="cleanBase3DShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#0f172a" floodOpacity="0.18" />
          </filter>

          <filter id="popSliceShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#000000" floodOpacity="0.28" />
          </filter>

          <linearGradient id="seamlessBevel" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.3" />
            <stop offset="40%" stopColor="#ffffff" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
          </linearGradient>

          <radialGradient id="innerCoreGradient" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="#000000" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </radialGradient>
        </defs>

        <g filter="url(#cleanBase3DShadow)">
          {slices.map((slice) => {
            const isHovered = activeDistrict?.id === slice.id;
            return (
              <g
                key={slice.id}
                className="cursor-pointer transition-transform duration-300 ease-out"
                style={{
                  transform: isHovered
                    ? `translate(${slice.shiftX}px, ${slice.shiftY}px) scale(1.04)`
                    : 'translate(0px, 0px) scale(1)',
                  transformOrigin: `${center}px ${center}px`,
                }}
                onMouseEnter={() => handleMouseEnter(slice)}
                onMouseLeave={handleMouseLeave}
              >
                <path
                  d={slice.pathData}
                  fill={slice.color}
                  stroke="none"
                  filter={isHovered ? 'url(#popSliceShadow)' : 'none'}
                  className={`transition-all duration-200 ${
                    isHovered ? 'brightness-110 opacity-100' : 'opacity-95 hover:opacity-100'
                  }`}
                />
                <path d={slice.pathData} fill="url(#seamlessBevel)" className="pointer-events-none" />
              </g>
            );
          })}
        </g>

        <circle cx={center} cy={center} r={innerR} fill="url(#innerCoreGradient)" className="pointer-events-none" />
        <circle cx={center} cy={center} r={innerR - 2} fill="#ffffff" />
      </svg>

      {/* Center Text with Dynamic Matching Hover Color */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-4">
        <span 
          className="text-3xl md:text-4xl font-black tracking-tight transition-colors duration-200"
          style={{ color: displayColor }}
        >
          {displayCount.toLocaleString()}
        </span>
        <span 
          className="text-[11px] font-extrabold uppercase tracking-widest mt-1 line-clamp-1 max-w-[150px] transition-colors duration-200"
          style={{ color: activeDistrict ? displayColor : '#94a3b8' }}
        >
          {displayLabel}
        </span>
      </div>
    </div>
  );
}

// Regional Card Component
function RegionCard({
  reg,
  districts,
}: {
  reg: { key: 'bengaluru' | 'mysuru' | 'kalaburagi' | 'belagavi'; title: string; color: string };
  districts: DistrictItem[];
}) {
  const [localHoverDistrict, setLocalHoverDistrict] = useState<DistrictItem | null>(null);
  const regTotal = districts.reduce((acc, c) => acc + c.count, 0);

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs flex flex-col sm:flex-row items-center p-6 gap-6">
      <div className="flex-1 w-full">
        <div
          className="py-2 px-4 rounded-lg text-white font-bold text-xs uppercase tracking-wider mb-3 text-center sm:text-left shadow-xs"
          style={{ backgroundColor: reg.color }}
        >
          {reg.title}
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          {districts.map((item) => {
            const isSelected = localHoverDistrict?.id === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setLocalHoverDistrict(item)}
                onMouseLeave={() => setLocalHoverDistrict(null)}
                className={`flex justify-between items-center py-2 px-2 transition-colors cursor-pointer rounded-md ${
                  isSelected ? 'bg-amber-50 font-bold text-[#003366]' : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full shadow-xs" style={{ backgroundColor: item.color }} />
                  <span>{item.name}</span>
                </span>
                <span className="font-bold text-slate-900">{item.count}</span>
              </div>
            );
          })}
          <div className="flex justify-between items-center py-2 px-2 bg-slate-50 font-extrabold text-slate-900 border-t border-slate-200 mt-1">
            <span>Total</span>
            <span>{regTotal}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center shrink-0">
        <InteractiveDonutChart
          items={districts}
          totalCount={regTotal}
          defaultSubtitle={reg.key}
          size={240}
          hoveredDistrict={localHoverDistrict}
          onHoverDistrict={setLocalHoverDistrict}
        />
      </div>
    </div>
  );
}

export default function RegionalDirectorySection() {
  const [mainHoverDistrict, setMainHoverDistrict] = useState<DistrictItem | null>(null);

  const regions: { key: 'bengaluru' | 'mysuru' | 'kalaburagi' | 'belagavi'; title: string; color: string }[] = [
    { key: 'bengaluru', title: 'BENGALURU REGION', color: '#cc3b32' },
    { key: 'mysuru', title: 'MYSURU REGION', color: '#e6a12c' },
    { key: 'kalaburagi', title: 'KALABURAGI REGION', color: '#007799' },
    { key: 'belagavi', title: 'BELAGAVI REGION', color: '#1e8a38' },
  ];

  const regionSummary = regions.map((reg) => {
    const list = DISTRICTS.filter((d) => d.region === reg.key);
    const total = list.reduce((acc, c) => acc + c.count, 0);
    const percentage = ((total / TOTAL_COUNT) * 100).toFixed(1);
    return { ...reg, total, countDistricts: list.length, percentage };
  });

  return (
    <section className="max-w-7xl mx-auto space-y-10">
      <div className="bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-8 shadow-xs">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-[#003366]">Statewide District Overview</h2>
          <p className="text-xs text-slate-400">
            Hover over any district to view its total societies with matching color highlight
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 flex justify-center items-center">
            <InteractiveDonutChart
              items={DISTRICTS}
              totalCount={TOTAL_COUNT}
              defaultSubtitle="TOTAL SOCIETIES"
              size={380}
              hoveredDistrict={mainHoverDistrict}
              onHoverDistrict={setMainHoverDistrict}
            />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {regionSummary.map((reg) => (
              <div
                key={reg.key}
                className="border border-slate-100 rounded-xl p-4 bg-slate-50/60 hover:bg-slate-50 transition-colors flex flex-col justify-between shadow-2xs"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <span className="w-3 h-3 rounded-full shrink-0 shadow-xs" style={{ backgroundColor: reg.color }} />
                  <span className="font-bold text-xs text-slate-800 tracking-wide uppercase truncate">
                    {reg.title}
                  </span>
                </div>

                <div className="flex justify-between items-end mt-2">
                  <div>
                    <div className="text-2xl font-black text-[#003366]">{reg.total.toLocaleString()}</div>
                    <div className="text-[11px] text-slate-400 font-medium">
                      {reg.countDistricts} Districts
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-md shadow-2xs">
                    {reg.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[#003366]">Region Directories</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {regions.map((reg) => {
            const list = DISTRICTS.filter((d) => d.region === reg.key);
            return <RegionCard key={reg.key} reg={reg} districts={list} />;
          })}
        </div>
      </div>
    </section>
  );
}