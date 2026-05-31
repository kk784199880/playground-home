import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import HeroPlayground from './components/HeroPlayground';
import DockNav from './components/DockNav';
import WorksSection from './components/WorksSection';
import ResearchSection from './components/ResearchSection';
import AwardsSection from './components/AwardsSection';
import TimelineSection from './components/TimelineSection';
import PassionsSection from './components/PassionsSection';
import SkillsSection from './components/SkillsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [loading, setLoading] = useState(true);

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
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <HeroPlayground scrollY={scrollY} reducedMotion={reducedMotion} />

      <PassionsSection reducedMotion={reducedMotion} />
      <AboutSection reducedMotion={reducedMotion} />
      <ResearchSection reducedMotion={reducedMotion} />
      <WorksSection reducedMotion={reducedMotion} />
      <AwardsSection reducedMotion={reducedMotion} />
      <TimelineSection reducedMotion={reducedMotion} />
      <SkillsSection reducedMotion={reducedMotion} />
      <ContactSection reducedMotion={reducedMotion} />
      <Footer />

      <DockNav reducedMotion={reducedMotion} />
    </main>
  );
}
