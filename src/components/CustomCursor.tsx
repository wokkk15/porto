import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate cursor customization on desktop devices with fine pointer
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const clickable = target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');
        setIsPointer(!!clickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border-3 border-black dark:border-white shadow-[2px_2px_0px_0px_#000]"
      animate={{
        x: position.x - (isPointer ? 24 : 12),
        y: position.y - (isPointer ? 24 : 12),
        scale: isPointer ? 1.5 : 1,
        backgroundColor: isPointer ? '#FFD93D' : '#FF6B6B',
        rotate: isPointer ? 15 : 0
      }}
      transition={{
        type: 'spring',
        damping: 28,
        stiffness: 400,
        mass: 0.2
      }}
      style={{
        width: isPointer ? 48 : 24,
        height: isPointer ? 48 : 24,
      }}
    />
  );
};
