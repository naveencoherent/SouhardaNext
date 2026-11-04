
// Inside src/app/api/chat/route.ts

async function searchDirectory(query: string) {
  // Pass the user's search query directly to your existing internal search API
  const res = await fetch(`http://localhost:3000/api/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) return null;
  return await res.json();
}

export async function POST(req: NextRequest) {
  const { message, locale } = await req.json();
  const query = message.toLowerCase().trim();

  // Dynamically fetch matching records from your backend
  const searchResults = await searchDirectory(query);

  if (searchResults && searchResults.length > 0) {
    // Return formatted result dynamically
    return NextResponse.json({
      reply: `Found ${searchResults.length} matching entries: ${searchResults.map((item: any) => item.name).join(', ')}. Visit /souharda/directors/ for full details.`
    });
  }

  // Fallback to static knowledge base...

}