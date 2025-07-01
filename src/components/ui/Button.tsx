'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      rounded = 'md',
      shadow = 'md',
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group',
      {
        // Width
        'w-full': fullWidth,
        'w-auto': !fullWidth,
        
        // Border radius
        'rounded-sm': rounded === 'sm',
        'rounded-md': rounded === 'md',
        'rounded-lg': rounded === 'lg',
        'rounded-full': rounded === 'full',
        
        // Shadow
        'shadow-none': shadow === 'none',
        'shadow-sm': shadow === 'sm',
        'shadow-md': shadow === 'md',
        'shadow-lg': shadow === 'lg',
        'shadow-xl': shadow === 'xl',
      }
    );

    // Add colored shadows for gradient variants
    const getShadowClasses = () => {
      if (shadow === 'none') return '';
      
      if (variant === 'default') {
        if (shadow === 'sm') return 'shadow-sm shadow-blue-500/25 hover:shadow-md hover:shadow-blue-500/30';
        if (shadow === 'md') return 'shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/30';
        if (shadow === 'lg') return 'shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30';
        if (shadow === 'xl') return 'shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30';
      }
      if (variant === 'destructive') {
        if (shadow === 'sm') return 'shadow-sm shadow-red-500/25 hover:shadow-md hover:shadow-red-500/30';
        if (shadow === 'md') return 'shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/30';
        if (shadow === 'lg') return 'shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30';
        if (shadow === 'xl') return 'shadow-xl shadow-red-500/25 hover:shadow-2xl hover:shadow-red-500/30';
      }
      if (variant === 'gradient') {
        if (shadow === 'sm') return 'shadow-sm shadow-purple-500/25 hover:shadow-md hover:shadow-purple-500/30';
        if (shadow === 'md') return 'shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/30';
        if (shadow === 'lg') return 'shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30';
        if (shadow === 'xl') return 'shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/30';
      }
      
      return '';
    };

    const variantClasses = {
      default: cn(
        'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800',
        'focus:ring-blue-500 active:from-blue-800 active:to-blue-900'
      ),
      destructive: cn(
        'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800',
        'focus:ring-red-500 active:from-red-800 active:to-red-900'
      ),
      outline: cn(
        'border-2 border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 hover:border-gray-400',
        'focus:ring-gray-500 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:border-gray-500'
      ),
      secondary: cn(
        'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 hover:from-gray-200 hover:to-gray-300',
        'focus:ring-gray-500 active:from-gray-300 active:to-gray-400',
        'dark:from-gray-700 dark:to-gray-800 dark:text-gray-100 dark:hover:from-gray-600 dark:hover:to-gray-700'
      ),
      ghost: cn(
        'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900',
        'focus:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
      ),
      link: cn(
        'bg-transparent text-blue-600 underline-offset-4 hover:underline',
        'focus:ring-blue-500 dark:text-blue-400'
      ),
      gradient: cn(
        'bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white',
        'hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700',
        'focus:ring-purple-500 active:from-purple-800 active:via-blue-800 active:to-indigo-800'
      ),
    };

    const sizeClasses = {
      sm: 'h-8 px-3 text-xs',
      md: 'h-10 px-4 text-sm',
      lg: 'h-12 px-6 text-base',
      xl: 'h-14 px-8 text-lg',
    };

    const iconSizeClasses = {
      sm: 'h-3 w-3',
      md: 'h-4 w-4',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          getShadowClasses(),
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        disabled={disabled || loading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-inherit"
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Content */}
        <div className="relative flex items-center justify-center gap-2">
          {/* Loading spinner */}
          {loading && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-shrink-0"
            >
              <Loader2 className={cn('animate-spin', iconSizeClasses[size])} />
            </motion.div>
          )}
          
          {/* Icon */}
          {!loading && icon && iconPosition === 'left' && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              {React.cloneElement(icon as React.ReactElement, {
                className: cn(iconSizeClasses[size]),
              })}
            </motion.div>
          )}
          
          {/* Text */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {children}
          </motion.span>
          
          {/* Icon */}
          {!loading && icon && iconPosition === 'right' && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              {React.cloneElement(icon as React.ReactElement, {
                className: cn(iconSizeClasses[size]),
              })}
            </motion.div>
          )}
        </div>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button }; 