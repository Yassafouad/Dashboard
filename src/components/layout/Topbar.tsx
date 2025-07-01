'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useUIStore } from '@/lib/store';
import { SidebarToggle } from './SidebarToggle';
import { Button } from '@/components/ui/Button';
import {
  Search,
  Bell,
  User,
  Settings,
  LogOut,
  Mail,
  HelpCircle,
  Shield,
  X,
  Filter,
  Download,
  RefreshCw,
} from 'lucide-react';
import Image from 'next/image';

export function Topbar() {
  const { isDarkMode, toggleDarkMode } = useUIStore();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.user-menu-container') && !target.closest('.notifications-container')) {
        setIsUserMenuOpen(false);
        setIsNotificationsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mock notifications data
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Payment Successful',
      message: 'Order #12345 payment completed',
      time: '2 min ago',
      read: false,
    },
    {
      id: 2,
      type: 'info',
      title: 'New User Registration',
      message: 'John Doe has joined the platform',
      time: '1 hour ago',
      read: false,
    },
    {
      id: 3,
      type: 'warning',
      title: 'Low Stock Alert',
      message: 'Product "Premium Widget" is running low',
      time: '3 hours ago',
      read: true,
    },
    {
      id: 4,
      type: 'error',
      title: 'Server Maintenance',
      message: 'Scheduled maintenance in 30 minutes',
      time: '5 hours ago',
      read: true,
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  if (!mounted) {
    return (
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200/50 bg-white/95 backdrop-blur-xl px-4 shadow-sm dark:border-gray-700/50 dark:bg-gray-900/95 lg:px-6">
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
          <div className="hidden md:block h-8 w-64 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
          <div className="h-8 w-8 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
          <div className="h-8 w-32 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
        </div>
      </header>
    );
  }

  return (
    <motion.header
      className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200/50 bg-white/95 backdrop-blur-xl px-4 shadow-sm dark:border-gray-700/50 dark:bg-gray-900/95 lg:px-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Left Section */}
      <div className="flex items-center space-x-4">
        <SidebarToggle />
        
        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-2 rounded-xl border border-gray-200/50 bg-gray-50/50 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/50 focus-within:bg-white focus-within:border-blue-500/50 dark:border-gray-600/50 dark:bg-gray-800/50 dark:hover:bg-gray-700/50 dark:focus-within:bg-gray-900 dark:focus-within:border-blue-400/50">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm outline-none placeholder:text-gray-400 dark:text-gray-300 w-64"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300"
          >
            <Filter className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300"
          >
            <Download className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        {/* Notifications */}
        <div className="notifications-container relative">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
            className="relative rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300"
          >
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <motion.span 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-medium"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
              >
                {unreadCount > 9 ? '9+' : unreadCount}
              </motion.span>
            )}
          </Button>

          {/* Notifications Dropdown */}
          <AnimatePresence>
            {isNotificationsOpen && (
              <motion.div
                className="absolute right-0 top-full mt-2 w-80 rounded-xl border border-gray-200/50 bg-white/95 backdrop-blur-xl py-2 shadow-xl dark:border-gray-700/50 dark:bg-gray-900/95"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="px-4 py-3 border-b border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Notifications</h3>
                    <button className="text-xs text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                      Mark all as read
                    </button>
                  </div>
                </div>
                
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 ${
                        !notification.read ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`h-2 w-2 rounded-full mt-2 ${
                          notification.type === 'success' ? 'bg-green-500' :
                          notification.type === 'warning' ? 'bg-yellow-500' :
                          notification.type === 'error' ? 'bg-red-500' :
                          'bg-blue-500'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {notification.title}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="px-4 py-2 border-t border-gray-200/50 dark:border-gray-700/50">
                  <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                    View all notifications
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Menu */}
        <div className="user-menu-container relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="relative rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-300 p-1 h-auto"
          >
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="User"
                className="h-8 w-8 rounded-full ring-2 ring-gray-200 dark:ring-gray-700 object-cover shadow-sm"
                width={32}
                height={32}
                key="user-avatar"
              />
              <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-sm"></div>
            </div>
          </Button>

          {/* User Dropdown */}
          <AnimatePresence>
            {isUserMenuOpen && (
              <motion.div
                className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-gray-200/50 bg-white/95 backdrop-blur-xl py-2 shadow-xl dark:border-gray-700/50 dark:bg-gray-900/95"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {/* User info */}
                <div className="px-4 py-3 border-b border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center space-x-3">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                      alt="User"
                      className="h-10 w-10 rounded-full object-cover shadow-sm"
                      width={32}
                      height={32}
                      key="user-avatar-dropdown"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Yassa Fouad</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">yassa@example.com</p>
                    </div>
                  </div>
                </div>

                {/* Menu items */}
                <div className="py-1">
                  <button className="flex w-full items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50 transition-colors duration-200">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </button>
                  <button className="flex w-full items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50 transition-colors duration-200">
                    <Mail className="h-4 w-4" />
                    <span>Messages</span>
                  </button>
                  <button className="flex w-full items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50 transition-colors duration-200">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </button>
                  <button className="flex w-full items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50 transition-colors duration-200">
                    <Shield className="h-4 w-4" />
                    <span>Security</span>
                  </button>
                  <button className="flex w-full items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800/50 transition-colors duration-200">
                    <HelpCircle className="h-4 w-4" />
                    <span>Help & Support</span>
                  </button>
                </div>

                <hr className="my-1 border-gray-200/50 dark:border-gray-700/50" />
                
                <button className="flex w-full items-center space-x-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 transition-colors duration-200">
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.header>
  );
} 