export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

import { NextRequest, NextResponse } from 'next/server';

interface SearchItem {
  id?: string | number;
  name: string;
  [key: string]: unknown;
}

// Direct internal helper (or import from your lib/search.ts)
async function searchDirectory(query: string): Promise<SearchItem[] | null> {
  try {
    // Perform internal array filter or DB query directly here
    // e.g., return directorsData.filter(d => d.name.toLowerCase().includes(query));
    return []; 
  } catch (error) {
    console.error('Directory search failed:', error);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ reply: 'Invalid request message.' }, { status: 400 });
    }

    const query = message.toLowerCase().trim();

    // Call internal logic directly—no extra network roundtrip
    const searchResults = await searchDirectory(query);

    if (searchResults && searchResults.length > 0) {
      const names = searchResults.map((item: SearchItem) => item.name).join(', ');
      return NextResponse.json({
        reply: `Found ${searchResults.length} matching entries: ${names}. Visit /souharda/directors/ for full details.`,
      });
    }

    return NextResponse.json({
      reply: "I couldn't find a direct match in the directory.",
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ reply: 'An error occurred processing your request.' }, { status: 500 });
  }
}