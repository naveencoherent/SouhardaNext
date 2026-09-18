import { NextResponse } from 'next/server';
import { promises as fs, existsSync } from 'fs';
import path from 'path';

export const dynamic = 'force-static';

interface MagazineResponse {
  imageUrl: string;
  monthYear: string;
}

// In-memory cache to prevent scanning the disk on every single request
let cachedResponse: MagazineResponse | null = null;

export async function GET(): Promise<NextResponse<MagazineResponse | { error: string }>> {
  try {
    // Return cached payload immediately (0ms Execution Time)
    if (cachedResponse) {
      return NextResponse.json(cachedResponse);
    }

    const dirPath = path.join(process.cwd(), 'public/images/Swabhimani_Sahakari');

    const fallbackResponse: MagazineResponse = {
      imageUrl: '/images/souharda/President_Message.webp',
      monthYear: 'Latest Edition',
    };

    // Fast sync existence check
    if (!existsSync(dirPath)) {
      cachedResponse = fallbackResponse;
      return NextResponse.json(fallbackResponse);
    }

    // Async/Non-blocking directory read so Node.js event loop isn't frozen
    const files = await fs.readdir(dirPath);
    const validFiles = files.filter((file) => /\.(webp|png|jpe?g)$/i.test(file));

    if (validFiles.length === 0) {
      cachedResponse = fallbackResponse;
      return NextResponse.json(fallbackResponse);
    }

    // Sort files safely
    const sortedFiles = validFiles.sort((a, b) => a.localeCompare(b));
    const latestFile = sortedFiles[sortedFiles.length - 1];

    if (!latestFile) {
      cachedResponse = fallbackResponse;
      return NextResponse.json(fallbackResponse);
    }

    // Extract Month and Year (e.g., Apr_2026.webp -> Apr 2026)
    const match = latestFile.match(/([A-Za-z]+)_(\d{4})/);
    const monthYear = match ? `${match[1]} ${match[2]}` : 'Latest Edition';

    cachedResponse = {
      imageUrl: `/images/Swabhimani_Sahakari/${latestFile}`,
      monthYear,
    };

    return NextResponse.json(cachedResponse);
  } catch (error) {
    console.error('Error fetching magazine asset:', error);
    return NextResponse.json(
      { error: 'Failed to read Sahakari Magazine assets' },
      { status: 500 }
    );
  }
}