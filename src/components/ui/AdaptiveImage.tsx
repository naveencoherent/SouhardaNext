'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface AdaptiveImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
}

export default function AdaptiveImage({
  src,
  alt,
  className = '',
  ...props
}: AdaptiveImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        {...props}
      />
    </div>
  );
}