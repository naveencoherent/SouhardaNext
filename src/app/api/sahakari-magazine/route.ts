import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Force Next.js to pre-render this route at build time
export const dynamic = 'force-static';

interface MagazineResponse {
  imageUrl: string;
  monthYear: string;
}

export async function GET(): Promise<NextResponse<MagazineResponse | { error: string }>> {
  try {
    const dirPath = path.join(process.cwd(), 'public/images/Swabhimani_Sahakari');

    const fallbackResponse: MagazineResponse = {
      imageUrl: '/images/souharda/President_Message.webp',
      monthYear: 'Latest Edition',
    };

    // Check if directory exists
    if (!fs.existsSync(dirPath)) {
      return NextResponse.json(fallbackResponse);
    }

    // Filter valid image files
    const files = fs
      .readdirSync(dirPath)
      .filter((file) => /\.(webp|png|jpe?g)$/i.test(file));

    if (files.length === 0) {
      return NextResponse.json(fallbackResponse);
    }

    // Sort files and grab the latest item safely
    const sortedFiles = [...files].sort((a, b) => a.localeCompare(b));
    const latestFile = sortedFiles[sortedFiles.length - 1];

    if (!latestFile) {
      return NextResponse.json(fallbackResponse);
    }

    // Extract Month and Year (e.g., Apr_2026.webp -> Apr 2026)
    const match = latestFile.match(/([A-Za-z]+)_(\d{4})/);
    const monthYear = match ? `${match[1]} ${match[2]}` : 'Latest Edition';

    return NextResponse.json({
      imageUrl: `/images/Swabhimani_Sahakari/${latestFile}`,
      monthYear,
    });
  } catch (error) {
    console.error('Error fetching magazine asset:', error);
    return NextResponse.json(
      { error: 'Failed to read Sahakari Magazine assets' },
      { status: 500 }
    );
  }
}