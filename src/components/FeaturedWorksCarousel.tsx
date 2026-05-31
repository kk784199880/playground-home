import { useState, useEffect, useCallback, useRef, type FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { WorkItem } from '../data/works';

interface Props {
  works: WorkItem[];
  reducedMotion: boolean;
}

const AUTO_PLAY_INTERVAL = 5000;

const FeaturedWorksCarousel: FC<Props> = ({ works, reducedMotion }) => {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const len = works.length;
  const next = useCallback(() => setCurrent((c) => (c + 1) % len), [len]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + len) % len), [len]);

  // Auto-play
  useEffect(() => {
    if (reducedMotion || isHovered) return;
    timerRef.current = setInterval(next, AUTO_PLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, reducedMotion, isHovered]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const w = works[current];
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current = false;
  }, []);

  const imageVariants = {
    enter: { opacity: 0, scale: 1.06 },
    center: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit: { opacity: 0, scale: 0.96, transition: { duration: 0.4 } },
  };

  const textVariants = {
    enter: { opacity: 0, y: 24 },
    center: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.25 + i * 0.08, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
    exit: { opacity: 0, y: -12, transition: { duration: 0.25 } },
  };

  return (
    <div
      className="mx-auto relative group/carousel"
      style={{
        width: 'min(86vw, 1320px)',
        minHeight: 520,
        borderRadius: 28,
        overflow: 'hidden',
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(139,92,246,0.06) 0%, transparent 60%)',
        }}
      />

      <div className="flex flex-col lg:flex-row h-full min-h-[520px]">
        {/* Image area — 62% on desktop */}
        <div className="relative lg:w-[62%] h-[300px] lg:h-auto overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={w.id}
              className="absolute inset-0"
              variants={isFirstRender.current ? {} : imageVariants}
              initial={isFirstRender.current ? false : 'enter'}
              animate="center"
              exit="exit"
            >
              {w.image.endsWith('.jpg') || w.image.endsWith('.png') || w.image.endsWith('.webp') ? (
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                    const next = (e.target as HTMLElement).nextElementSibling;
                    if (next) (next as HTMLElement).style.display = 'flex';
                  }}
                />
              ) : null}
              {/* Fallback gradient when no image */}
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  display: w.image.endsWith('.jpg') || w.image.endsWith('.png') || w.image.endsWith('.webp') ? 'none' : 'flex',
                  background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a1a 100%)',
                }}
              >
                <span className="font-display text-white/10 text-4xl italic tracking-wide">{w.title}</span>
              </div>
              {/* Gradient overlay for readability */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to right, transparent 55%, rgba(0,0,0,0.55) 80%, rgba(0,0,0,0.8) 100%), ' +
                    'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 30%)',
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text area — 38% on desktop */}
        <div className="lg:w-[38%] flex flex-col justify-center px-8 py-10 lg:py-14 relative z-10">
          <AnimatePresence mode="popLayout">
            <motion.div key={w.id} className="space-y-5">
              {/* Category tag */}
              <motion.div
                variants={textVariants}
                custom={0}
                initial={isFirstRender.current ? false : 'enter'}
                animate="center"
                exit="exit"
              >
                <span
                  className="inline-block px-3 py-1 rounded-full font-mono text-[0.6rem] tracking-[0.15em]"
                  style={{ background: 'rgba(139,92,246,0.15)', color: 'rgba(192,152,255,0.9)' }}
                >
                  {w.category}
                </span>
              </motion.div>

              {/* Year + Award */}
              <motion.div
                variants={textVariants}
                custom={1}
                initial={isFirstRender.current ? false : 'enter'}
                animate="center"
                exit="exit"
                className="flex flex-wrap items-center gap-x-4 gap-y-1"
              >
                {w.year && (
                  <span className="font-mono text-[0.65rem] tracking-[0.12em] text-white/25">{w.year}</span>
                )}
                {w.award && (
                  <span className="font-mono text-[0.55rem] tracking-[0.08em] text-purple-400/60">{w.award}</span>
                )}
              </motion.div>

              {/* Title */}
              <motion.h3
                variants={textVariants}
                custom={2}
                initial={isFirstRender.current ? false : 'enter'}
                animate="center"
                exit="exit"
                className="font-display text-white leading-none"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
              >
                {w.title}
              </motion.h3>

              {/* Chinese title */}
              {w.titleZh && (
                <motion.p
                  variants={textVariants}
                  custom={3}
                  initial={isFirstRender.current ? false : 'enter'}
                  animate="center"
                  exit="exit"
                  className="text-white/25 text-sm italic -mt-3"
                  style={{ fontFamily: 'Inter', fontWeight: 300 }}
                >
                  {w.titleZh}
                </motion.p>
              )}

              {/* Description */}
              <motion.p
                variants={textVariants}
                custom={4}
                initial={isFirstRender.current ? false : 'enter'}
                animate="center"
                exit="exit"
                className="text-white/35 text-sm leading-relaxed max-w-[420px]"
                style={{ fontFamily: 'Inter' }}
              >
                {w.description}
              </motion.p>

              {/* Tags */}
              <motion.div
                variants={textVariants}
                custom={5}
                initial={isFirstRender.current ? false : 'enter'}
                animate="center"
                exit="exit"
                className="flex flex-wrap gap-2"
              >
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full font-mono text-[0.55rem] tracking-[0.08em]"
                    style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)' }}
                  >
                    {t}
                  </span>
                ))}
              </motion.div>

              {/* View Project button */}
              <motion.div
                variants={textVariants}
                custom={6}
                initial={isFirstRender.current ? false : 'enter'}
                animate="center"
                exit="exit"
              >
                <a
                  href={w.link || '#'}
                  target={w.link ? '_blank' : undefined}
                  rel={w.link ? 'noopener' : undefined}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs tracking-[0.1em] transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    color: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(139,92,246,0.2)';
                    e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)';
                    e.currentTarget.style.color = '#c4a0ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                  }}
                >
                  View Project
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrow buttons — desktop only */}
      <button
        onClick={prev}
        className="hidden lg:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-20"
        style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(139,92,246,0.3)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.5)'; }}
        aria-label="Previous work"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 4L6 8L10 12" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        onClick={next}
        className="hidden lg:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 z-20"
        style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(139,92,246,0.3)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,0,0,0.5)'; }}
        aria-label="Next work"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {works.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? 20 : 6,
              height: 6,
              background: i === current ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)',
            }}
            aria-label={`Go to work ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedWorksCarousel;
