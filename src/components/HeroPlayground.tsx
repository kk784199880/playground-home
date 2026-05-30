import { useState, useEffect, type FC } from 'react';
import { motion } from 'framer-motion';
import HeaderTitle from './HeaderTitle';

interface Props {
  scrollY: number;
  reducedMotion: boolean;
}

const HeroPlayground: FC<Props> = ({ scrollY, reducedMotion }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  const stageOpacity = Math.max(1 - scrollY * 0.0035, 0);

  return (
    <section className="relative h-screen w-full overflow-hidden select-none bg-[#050505]">

      {/* ── Fullscreen video background ── */}
      <div
        className="absolute inset-0 z-[1] h-full w-full overflow-hidden"
        style={{ opacity: stageOpacity }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 h-[108%] w-[108%] object-cover"
          style={{
            transform: 'translate(-2.5%, -2.5%)',
            objectPosition: 'center 54%',
            filter: 'brightness(0.95) contrast(1.04)',
          }}
        >
          <source src="/assets/hero/hero-scene.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ── Fullscreen overlay — light, preserves mid-scene clarity ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.18) 20%, rgba(0,0,0,0.04) 48%, rgba(0,0,0,0.22) 76%, rgba(0,0,0,0.76) 100%)',
        }}
      />

      {/* ── Watermark cover — tight bottom-right only ── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 96% 94%, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.86) 7%, rgba(0,0,0,0.48) 15%, rgba(0,0,0,0.12) 26%, rgba(0,0,0,0) 38%)',
        }}
      />

      {/* ── Title backdrop — very light, behind title only ── */}
      <div
        className="absolute left-1/2 pointer-events-none -translate-x-1/2"
        style={{
          top: '3.2vh',
          width: '540px',
          height: '140px',
          zIndex: 18,
          background:
            'radial-gradient(ellipse at center, rgba(0,0,0,0.46) 0%, rgba(0,0,0,0.22) 45%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0) 100%)',
          filter: 'blur(6px)',
        }}
      />

      {/* ── Title ── */}
      <HeaderTitle visible={visible} reducedMotion={reducedMotion} />

      {/* ── Scroll hint ── */}
      <motion.div
        className="absolute bottom-14 left-1/2 -translate-x-1/2 pointer-events-none font-mono tracking-[0.4em]"
        style={{ zIndex: 20, fontSize: '0.5rem', color: 'rgba(255,255,255,0.12)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? [0, 0.4, 0] : 0 }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 4.5 }}
      >
        SCROLL TO EXPLORE
      </motion.div>
    </section>
  );
};

export default HeroPlayground;
