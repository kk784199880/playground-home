import { type FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Props {
  onComplete: () => void;
}

const letters = 'WUFAN'.split('');

const Loader: FC<Props> = ({ onComplete }) => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const i = setInterval(() => setDots((d) => (d.length >= 3 ? '' : d + '.')), 500);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const t = setTimeout(onComplete, 2000);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#050505' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* subtle pulsing radial aura behind text */}
      <motion.div
        className="absolute"
        style={{
          width: 'min(60vw, 500px)',
          height: 'min(60vw, 500px)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(139,92,246,0.06) 0%, rgba(99,102,241,0.03) 35%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* second smaller glow offset */}
      <motion.div
        className="absolute"
        style={{
          width: 'min(30vw, 260px)',
          height: 'min(30vw, 260px)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      />

      {/* letter stagger entrance */}
      <h1
        className="font-display text-white tracking-tighter leading-none flex"
        style={{
          fontSize: 'clamp(4rem, 8vw, 6rem)',
          fontWeight: 900,
          letterSpacing: '0.06em',
        }}
      >
        {letters.map((l, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 32, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {l}
          </motion.span>
        ))}
      </h1>

      {/* subtle shimmer sweep across the text */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          height: 'clamp(4rem, 8vw, 6rem)',
          width: '100%',
          maxWidth: '500px',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.03) 55%, transparent 100%)',
          filter: 'blur(2px)',
        }}
        animate={{ x: ['-120%', '120%'] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      />

      {/* thin pulsing line */}
      <motion.div
        className="mt-5 rounded-full"
        style={{
          width: '48px',
          height: '1px',
          background: 'rgba(255,255,255,0.15)',
        }}
        animate={{ width: ['48px', '80px', '48px'], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* loading text */}
      <motion.p
        className="font-mono tracking-[0.2em] mt-4"
        style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.22)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        LOADING{dots}
      </motion.p>
    </motion.div>
  );
};

export default Loader;
