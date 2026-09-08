'use client';

import { useState, useEffect } from 'react';
import Papa from 'papaparse';

// Direct Google Sheet Published CSV URLs
const SHEET_URLS: Record<string, string> = {
  '2026-27': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS_OWSmyNAMdjM0AtR_bibSmFTw1N9dy_Bp2YT0i0_kcr7U65zppxjXRFuiBQ63U0LYwao1SoORr1NV/pub?output=csv',
  '2025-26': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSBG19C_jEnkTleD7BBsasgINsMsWl1X40gGtB46eK7ccRpjoR42GFUPB4fpG3n1y36QD9LH9YWwh0j/pub?output=csv',
  '2024-25': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRcODGVOvH4psjl8E1nbl3sBAyBp9Z0aL61wdHGdTu7fKtQ_KBaexIKIgSLD1YfKgwIM2ovi4Uhu4Zf/pub?output=csv',
  '2023-24': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQq1uwHFF50e4FRxDgUbFVPPjnsK_j5TR8QgouX6uxuJckqd45L_B7Ate0HqkJSULPuUxRUrfmgMe2U/pub?output=csv',
  '2022-23': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSA_UT8Yp914plPQJLYUOs--oatmNXpGhrkpeVtaRk41xgUn_pltTVjE1zAmrwrqgeTLfyFwRB4oYKl/pub?output=csv',
  '2021-22': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJTXhb7711e5ORfz6iFtCsaXW117ZrijJNJKQlnPne9ouhuJRCJ2HyfBrpku9008JjjONu3ZUjjLrP/pub?output=csv',
  '2020-21': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSA_UT8Yp914plPQJLYUOs--oatmNXpGhrkpeVtaRk41xgUn_pltTVjE1zAmrwrqgeTLfyFwRB4oYKl/pub?output=csv',
  '2019-20': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRCRsDRHD6nBfXwnp_4d0476nq17OHH7-2_fbvUY3Lk0EVHtXfS3yrDq4s6ZKjVD8Tt-IBiL6y_iMqj/pub?output=csv',
  '2018-19': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1wVfWnDebzMwOMDOqcDI8egLCBgJTWk9mf78r8XduQX5VN8MuSuM-OlQ8wzGYR0YbLW74t5UcVUCA/pub?output=csv',
  '2017-18': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS.../pub?output=csv',
};

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<string>('2020-21');
  const [items, setItems] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const csvUrl = SHEET_URLS[selectedYear];
    if (!csvUrl) {
      setItems([]);
      return;
    }

    setLoading(true);

    async function fetchAndParseCSV() {
      try {
        const res = await fetch(csvUrl);
        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);

        const csvText = await res.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedItems = results.data
              .map((row: any) => ({
                title: row.Title || row.title || row.TITLE || row[Object.keys(row)[0]],
                link: row.Link || row.link || row.URL || row.url || '#',
              }))
              .filter((item) => item.title);

            setItems(parsedItems);
            setLoading(false);
          },
          error: (err: any) => {
            console.error('PapaParse String Error:', err);
            setItems([]);
            setLoading(false);
          },
        });
      } catch (err) {
        console.error('Fetch Error:', err);
        setItems([]);
        setLoading(false);
      }
    }

    fetchAndParseCSV();
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
      <div className="w-full flex flex-col gap-4 mb-6">
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {Object.keys(SHEET_URLS).map((year) => (
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