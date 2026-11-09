import { NextResponse } from 'next/server';
import { DIRECTORS_DATA } from '@/data/souhardaKnowledge';

// Mark route as static for static export deployment
export const dynamic = 'force-static';

export async function GET() {
  // Returns full director dataset as a static JSON file at build time
  return NextResponse.json({
    results: DIRECTORS_DATA
  });
}