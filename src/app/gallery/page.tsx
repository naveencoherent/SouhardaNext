'use client';

import { useState, useEffect } from 'react';

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<string>('2026-27');
  const [items, setItems] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchGallery() {
      setLoading(true);
      try {
        const res = await fetch(`/api/gallery?year=${selectedYear}`);
        const data = await res.json();
        setItems(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Gallery Fetch Error:', err);
        setItems([]);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, [selectedYear]);

  const filteredItems = items.filter((item) =>
    item.title?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div 
      className="w-full min-h-screen py-8 px-6 sm:px-12"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '36px 36px',
      }}
    >
      {/* Controls Container: Stacked for a clean layout */}
      <div className="w-full flex flex-col gap-4 mb-6">
        {/* Row 1: Year Filter Buttons with Flex Wrap */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {[
            '2026-27',
            '2025-26',
            '2024-25',
            '2023-24',
            '2022-23',
            '2021-22',
            '2020-21',
            '2019-20',
            '2018-19',
            '2017-18',
          ].map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 border rounded-md text-sm sm:text-base font-semibold transition ${
                selectedYear === year
                  ? 'bg-[#0f2d5c] text-white border-[#0f2d5c]'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Row 2: Right-aligned Search Input */}
        <div className="w-full flex justify-end">
          <input
            type="text"
            placeholder="Search albums..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md text-base w-full sm:w-80 focus:outline-none focus:border-[#0f2d5c] bg-white shadow-sm"
          />
        </div>
      </div>

      <hr className="w-full border-t-2 border-[#0f2d5c] mb-8" />

      {/* Numbered List */}
      {loading ? (
        <p className="text-gray-600 text-lg py-4">Loading albums...</p>
      ) : filteredItems.length === 0 ? (
        <p className="text-gray-600 text-lg py-4">No records found for {selectedYear}.</p>
      ) : (
        <div className="w-full space-y-5">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="flex items-baseline gap-4">
              <span className="font-bold text-gray-900 w-8 text-right text-lg sm:text-xl flex-shrink-0">
                {idx + 1}.
              </span>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0f2d5c] hover:underline text-lg sm:text-xl font-normal leading-relaxed"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}