import { NextRequest, NextResponse } from 'next/server';
import { DIRECTORS_DATA } from '@/data/souhardaKnowledge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q')?.toLowerCase().trim() || '';

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  // Search dynamically across directors in souhardaKnowledge
  const directorResults = DIRECTORS_DATA.filter((d) => 
    d.nameEn.toLowerCase().includes(query) ||
    d.nameKn.toLowerCase().includes(query) ||
    d.designationEn.toLowerCase().includes(query) ||
    d.regionEn.toLowerCase().includes(query)
  );

  return NextResponse.json({
    results: directorResults
  });
}