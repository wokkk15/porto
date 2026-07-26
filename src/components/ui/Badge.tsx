import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  color = '#FFD93D',
  size = 'sm',
  className = ''
}) => {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1 text-sm';

  return (
    <span
      className={`
        inline-flex items-center font-mono font-bold rounded-lg neo-border-sm neo-shadow-sm text-black uppercase tracking-wider select-none
        ${sizeClasses}
        ${className}
      `}
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
};
