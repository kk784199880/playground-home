import { useState, useEffect, useCallback } from 'react';
import HeroPlayground from './components/HeroPlayground';
import DockNav from './components/DockNav';
import WorksSection from './components/WorksSection';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <main className="relative bg-black min-h-screen">
      <HeroPlayground scrollY={scrollY} reducedMotion={reducedMotion} />
      <WorksSection reducedMotion={reducedMotion} />
      <DockNav reducedMotion={reducedMotion} />
    </main>
  );
}
