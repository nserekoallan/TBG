import { useEffect, useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface ParallaxConfig {
  speed?: number;
  offset?: number;
  easing?: string;
  clamp?: boolean;
}

export const useParallax = (config: ParallaxConfig = {}) => {
  const { 
    speed = 0.5, 
    offset = 0, 
    easing = 'out', 
    clamp = false 
  } = config;
  
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transform = useSpring({
    transform: `translateY(${scrollY * speed + offset}px)`,
    config: {
      tension: 280,
      friction: 60
    }
  });

  return { ref, style: transform, scrollY };
};

export const useMouseParallax = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};