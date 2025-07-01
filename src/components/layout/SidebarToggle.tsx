'use client';

import React, { useEffect, useState } from 'react';
import { useUIStore } from '@/lib/store';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function SidebarToggle() {
  const { toggleSidebar, isSidebarOpen } = useUIStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="p-2 opacity-0"
        style={{ transition: 'opacity 0.1s' }}
        aria-label="Toggle sidebar"
      >
        <Menu className="h-4 w-4 text-gray-600 dark:text-gray-300" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleSidebar}
      className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
      aria-label="Toggle sidebar"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isSidebarOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {isSidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </motion.div>
    </button>
  );
} 