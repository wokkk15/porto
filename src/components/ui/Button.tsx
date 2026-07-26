import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'yellow' | 'blue' | 'red' | 'green' | 'purple' | 'white' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'yellow',
  size = 'md',
  children,
  icon,
  fullWidth = false,
  className = '',
  onClick,
  ...props
}) => {
  const { playClickSound } = useTheme();

  const variantStyles = {
    yellow: 'bg-[#FFD93D] text-black hover:bg-[#ffe169]',
    blue: 'bg-[#4D96FF] text-black hover:bg-[#70a9ff]',
    red: 'bg-[#FF6B6B] text-white hover:bg-[#ff8585]',
    green: 'bg-[#6BCB77] text-black hover:bg-[#85d68f]',
    purple: 'bg-[#9B51E0] text-white hover:bg-[#a966e3]',
    white: 'bg-white text-black hover:bg-gray-100 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700',
    dark: 'bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200',
    outline: 'bg-transparent text-black border-4 border-black hover:bg-[#FFD93D] dark:text-white dark:border-white dark:hover:text-black'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-base gap-2',
    lg: 'px-7 py-3.5 text-lg font-bold gap-3'
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    playClickSound();
    if (onClick) onClick(e);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, x: -2, y: -2 }}
      whileTap={{ scale: 0.98, x: 2, y: 2 }}
      onClick={handleClick}
      className={`
        inline-flex items-center justify-center font-heading font-bold rounded-xl neo-border neo-shadow
        transition-all duration-150 cursor-pointer select-none
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
    </motion.button>
  );
};
