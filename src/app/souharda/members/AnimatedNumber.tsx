'use client';
import { useState, useEffect } from 'react';

export default function AnimatedNumber({ value, duration = 1500, suffix = '' }: { value: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * value));

      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}