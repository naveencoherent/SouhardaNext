import React from 'react';
import { notFound } from 'next/navigation';
import { ALL_DIRECTORS } from '@/data/directors';
import DirectorModal from '@/components/directors/DirectorModal';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_DIRECTORS.map((director) => ({
    slug: director.slug,
  }));
}

export default async function DirectorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const director = ALL_DIRECTORS.find((d) => d.slug === slug);

  if (!director) {
    notFound();
  }

  return <DirectorModal director={director} />;
}