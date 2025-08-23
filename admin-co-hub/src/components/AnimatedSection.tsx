'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideInUp';
  delay?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0 
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    if (!isVisible) return 'opacity-0 transform';
    
    switch (animation) {
      case 'fadeInUp':
        return 'opacity-100 transform translate-y-0 transition-all duration-1000 ease-out';
      case 'fadeInLeft':
        return 'opacity-100 transform translate-x-0 transition-all duration-1000 ease-out';
      case 'fadeInRight':
        return 'opacity-100 transform translate-x-0 transition-all duration-1000 ease-out';
      case 'scaleIn':
        return 'opacity-100 transform scale-100 transition-all duration-1000 ease-out';
      case 'slideInUp':
        return 'opacity-100 transform translate-y-0 transition-all duration-800 ease-out';
      default:
        return 'opacity-100 transform translate-y-0 transition-all duration-1000 ease-out';
    }
  };

  const getInitialClass = () => {
    switch (animation) {
      case 'fadeInUp':
        return 'translate-y-10';
      case 'fadeInLeft':
        return '-translate-x-10';
      case 'fadeInRight':
        return 'translate-x-10';
      case 'scaleIn':
        return 'scale-95';
      case 'slideInUp':
        return 'translate-y-8';
      default:
        return 'translate-y-10';
    }
  };

  return (
    <div
      ref={sectionRef}
      className={`${className} ${getAnimationClass()} ${!isVisible ? getInitialClass() : ''}`}
    >
      {children}
    </div>
  );
}