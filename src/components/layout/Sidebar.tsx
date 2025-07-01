'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useUIStore } from '@/lib/store';
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Home,
  UserCheck,
  Box,
  CreditCard,
  TrendingUp,
  Cog
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    description: 'Main Overview'
  },
  {
    name: 'Users',
    href: '/users',
    icon: Users,
    description: 'User Management'
  },
  {
    name: 'Products',
    href: '/products',
    icon: Package,
    description: 'Product Inventory'
  },
  {
    name: 'Orders',
    href: '/orders',
    icon: ShoppingCart,
    description: 'Order Management'
  },
  {
    name: 'Reports',
    href: '/reports',
    icon: BarChart3,
    description: 'Analytics & Reports'
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
    description: 'System Settings'
  },
];

export function Sidebar() {
  const { isSidebarOpen, toggleSidebar, setSidebarOpen } = useUIStore();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize sidebar based on screen size
    if (typeof window !== 'undefined') {
      const isLargeScreen = window.innerWidth >= 1024;
      setSidebarOpen(isLargeScreen);
    }
  }, [setSidebarOpen]);

  const handleToggleSidebar = () => {
    try {
      toggleSidebar();
    } catch (error) {
      console.error('Error toggling sidebar:', error);
    }
  };

  const handleCloseSidebar = () => {
    try {
      setSidebarOpen(false);
    } catch (error) {
      console.error('Error closing sidebar:', error);
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <aside className="fixed left-0 top-0 z-50 h-full w-72 bg-white/95 backdrop-blur-xl border-r border-gray-200/50 shadow-2xl dark:bg-gray-900/95 dark:border-gray-700/50 opacity-0" style={{ transition: 'opacity 0.1s' }}>
        <div className="flex h-full flex-col">
          <div className="flex h-20 items-center justify-between border-b border-gray-200/50 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 dark:border-gray-700/50 dark:from-gray-800 dark:to-gray-900">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Admin Panel
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Dashboard v2.0
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseSidebar}
          />
        )}
      </AnimatePresence>

      {/* Floating Toggle Button - Shows when sidebar is closed */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.button
            onClick={handleToggleSidebar}
            className="fixed left-4 top-4 z-50 h-10 w-10 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-600 dark:text-gray-300 shadow-lg hover:bg-white dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            aria-label="Open sidebar"
          >
            <Menu className="h-4 w-4 mx-auto" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        className={cn(
          'fixed left-0 top-0 z-50 h-full w-72 bg-white/95 backdrop-blur-xl border-r border-gray-200/50 shadow-2xl transition-all duration-300 ease-in-out dark:bg-gray-900/95 dark:border-gray-700/50',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        initial={{ x: -288 }}
        animate={{ x: isSidebarOpen ? 0 : -288 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex h-20 items-center justify-between border-b border-gray-200/50 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 dark:border-gray-700/50 dark:from-gray-800 dark:to-gray-900">
            <Link href="/dashboard" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Admin Panel
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Dashboard v2.0
                </span>
              </div>
            </Link>
            
            {/* Close Button - Always Visible */}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCloseSidebar}
              className="hover:bg-white/50 dark:hover:bg-gray-800/50 rounded-xl"
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 px-4 py-6">
            <div className="mb-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 px-2">
                Main Menu
              </h3>
            </div>
            
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'group flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 relative overflow-hidden',
                      isActive
                        ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-white'
                    )}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                        layoutId="activeTab"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className="relative z-10 flex items-center w-full">
                      <item.icon
                        className={cn(
                          'mr-4 h-5 w-5 flex-shrink-0 transition-all duration-300',
                          isActive
                            ? 'text-white'
                            : 'text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300'
                        )}
                      />
                      <div className="flex flex-col">
                        <span className="font-medium">{item.name}</span>
                        <span className={cn(
                          'text-xs transition-colors duration-300',
                          isActive 
                            ? 'text-blue-100' 
                            : 'text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400'
                        )}>
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          {/* Footer with Clear Toggle Button */}
          <div className="border-t border-gray-200/50 bg-gradient-to-r from-gray-50 to-gray-100 p-4 dark:border-gray-700/50 dark:from-gray-800 dark:to-gray-900">
            {/* Footer content removed */}
          </div>
        </div>
      </motion.aside>
    </>
  );
}

export function SidebarToggle() {
  const { toggleSidebar, isSidebarOpen } = useUIStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
        aria-label="Toggle sidebar"
      >
        <Menu className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleSidebar}
      className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl"
      aria-label="Toggle sidebar"
    >
      {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
  );
} 