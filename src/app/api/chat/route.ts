import { NextRequest, NextResponse } from 'next/server';

interface SearchItem {
  id?: string | number;
  name: string;
  [key: string]: unknown;
}

async function searchDirectory(query: string, req: NextRequest): Promise<SearchItem[] | null> {
  try {
    // Derive base URL dynamically from incoming request headers
    const protocol = req.headers.get('x-forwarded-proto') || 'https';
    const host = req.headers.get('host') || 'localhost:3000';
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/api/search?q=${encodeURIComponent(query)}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) return null;
    return (await res.json()) as SearchItem[];
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

    // Dynamically fetch matching records from backend
    const searchResults = await searchDirectory(query, req);

    if (searchResults && searchResults.length > 0) {
      const names = searchResults.map((item: SearchItem) => item.name).join(', ');
      return NextResponse.json({
        reply: `Found ${searchResults.length} matching entries: ${names}. Visit /souharda/directors/ for full details.`,
      });
    }

    // Fallback to static knowledge base response...
    return NextResponse.json({
      reply: "I couldn't find a direct match in the directory.",
    });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ reply: 'An error occurred processing your request.' }, { status: 500 });
  }
}