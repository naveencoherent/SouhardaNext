export const dynamic = 'force-static';

import { NextResponse } from 'next/server';
import Papa from 'papaparse';

const SHEET_URLS: Record<string, string> = {
  '2026-27': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS_OWSmyNAMdjM0AtR_bibSmFTw1N9dy_Bp2YT0i0_kcr7U65zppxjXRFuiBQ63U0LYwao1SoORr1NV/pub?output=csv',
  '2025-26': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSBG19C_jEnkTleD7BBsasgINsMsWl1X40gGtB46eK7ccRpjoR42GFUPB4fpG3n1y36QD9LH9YWwh0j/pub?output=csv',
  '2024-25': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRcODGVOvH4psjl8E1nbl3sBAyBp9Z0aL61wdHGdTu7fKtQ_KBaexIKIgSLD1YfKgwIM2ovi4Uhu4Zf/pub?output=csv',
  '2023-24': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQq1uwHFF50e4FRxDgUbFVPPjnsK_j5TR8QgouX6uxuJckqd45L_B7Ate0HqkJSULPuUxRUrfmgMe2U/pub?output=csv',
  '2022-23': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8a5kGAx-tBYDCNxedUt-9DYpC3BvDSBPTmp0OgPcwZDdElB8tYui924-Ez_s5mQtDOdKN7otcMgek/pub?output=csv',
  '2021-22': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTJTXhb7711e5ORfz6iFtCsaXW117ZrijJNJKQlnPne9ouhuJRCJ2HyfBrpku9008JjjONu3ZUjjLrP/pub?output=csv',
  '2020-21': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSA_UT8Yp914plPQJLYUOs--oatmNXpGhrkpeVtaRk41xgUn_pltTVjE1zAmrwrqgeTLfyFwRB4oYKl/pub?output=csv',
  '2019-20': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRCRsDRHD6nBfXwnp_4d0476nq17OHH7-2_fbvUY3Lk0EVHtXfS3yrDq4s6ZKjVD8Tt-IBiL6y_iMqj/pub?output=csv',
  '2018-19': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1wVfWnDebzMwOMDOqcDI8egLCBgJTWk9mf78r8XduQX5VN8MuSuM-OlQ8wzGYR0YbLW74t5UcVUCA/pub?output=csv',
  '2017-18': 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRCRsDRHD6nBfXwnp_4d0476nq17OHH7-2_fbvUY3Lk0EVHtXfS3yrDq4s6ZKjVD8Tt-IBiL6y_iMqj/pub?output=csv',
};

export async function GET() {
  try {
    const selectedYear = '2026-27';
    const targetUrl = SHEET_URLS[selectedYear];

    const res = await fetch(targetUrl);

    if (!res.ok) {
      return NextResponse.json([]);
    }

    const csvText = await res.text();

    const parsed = Papa.parse<string[]>(csvText, {
      skipEmptyLines: true,
    });

    const items = [];

    for (const row of parsed.data) {
      if (!row || row.length === 0) continue;

      let rawTitle = (row[0] || '').replace(/^"|"$/g, '').trim();

      if (
        !rawTitle ||
        rawTitle.toLowerCase() === 'title' ||
        rawTitle.toLowerCase() === 'sl.no' ||
        rawTitle.toLowerCase() === 'sl no'
      ) {
        continue;
      }

      let rawLink = '#';
      for (const col of row) {
        let cleaned = (col || '').replace(/^"|"$/g, '').trim();

        if (cleaned.toLowerCase().endsWith('.pdf') && !cleaned.startsWith('http') && !cleaned.startsWith('/')) {
          cleaned = `/${cleaned}`;
        }

        if (
          cleaned.includes('photos.app.goo.gl') || 
          cleaned.includes('photos.google.com') ||
          cleaned.toLowerCase().endsWith('.pdf') ||
          cleaned.startsWith('http://') || 
          cleaned.startsWith('https://')
        ) {
          rawLink = cleaned;
          break;
        }
      }

      items.push({
        title: rawTitle,
        year: selectedYear,
        link: rawLink,
      });
    }

    return NextResponse.json(items);
  } catch (error) {
    console.error('Published Gallery Fetch Error:', error);
    return NextResponse.json([], { status: 200 });
  }
}