// src/app/api/sahakari-magazine/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const dirPath = path.join(process.cwd(), 'public/images/Swabhimani_Sahakari');

    // Check if folder exists
    if (!fs.existsSync(dirPath)) {
      return NextResponse.json({
        imageUrl: '/images/souharda/President_Message.webp',
        monthYear: 'Latest Edition'
      });
    }

    // Filter valid image files (.webp, .png, .jpg)
    const files = fs.readdirSync(dirPath).filter(f => 
      /\.(webp|png|jpe?g)$/i.test(f)
    );

    if (files.length === 0) {
      return NextResponse.json({
        imageUrl: '/images/souharda/President_Message.webp',
        monthYear: 'Latest Edition'
      });
    }

    // Pick the latest file (alphabetically sorted by name/date string)
    const latestFile = files.sort().pop() || files[0];

    // Extract Month and Year (e.g. Apr_2026 -> April 2026)
    const match = latestFile.match(/([A-Za-z]+)_(\d{4})/);
    const monthYear = match ? `${match[1]} ${match[2]}` : 'Latest Edition';

    return NextResponse.json({
      imageUrl: `/images/Swabhimani_Sahakari/${latestFile}`,
      monthYear
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to read Sahakari Magazine assets' }, 
      { status: 500 }
    );
  }
}