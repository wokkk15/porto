import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  bgColor = 'bg-white dark:bg-[#1E1E24]',
  hoverEffect = true,
  className = '',
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4, x: -4, rotate: -0.5 } : undefined}
      className={`
        rounded-2xl neo-border neo-shadow p-6 transition-all duration-200
        ${bgColor}
        ${hoverEffect ? 'hover:neo-shadow-lg' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};
