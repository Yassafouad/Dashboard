'use client';

import React, { useEffect, useState } from 'react';
import { useUIStore } from '@/lib/store';

export function Providers({ children }: { children: React.ReactNode }) {
  const { isDarkMode } = useUIStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const root = document.documentElement;
      if (isDarkMode) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [isDarkMode, mounted]);

  // Always render children, but handle dark mode after mount
  return (
    <div className={mounted ? '' : 'opacity-0'} style={{ transition: 'opacity 0.1s' }}>
      {children}
    </div>
  );
} 