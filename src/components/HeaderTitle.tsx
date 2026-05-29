import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  visible: boolean;
  reducedMotion: boolean;
}

const line1 = 'I design products,';
const line2 = 'systems and';
const line3 = 'playful experiences.';

const HeaderTitle: FC<Props> = ({ visible, reducedMotion }) => {
  const staggerChars = (text: string, lineIndex: number) =>
    text.split('').map((char, i) => {
      if (char === ' ') return <span key={i} className="inline-block w-[0.3em]" />;
      return (
        <motion.span
          key={i}
          className="inline-block"
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 30, rotateX: -45 }}
          animate={
            visible && !reducedMotion
              ? { opacity: 1, y: 0, rotateX: 0 }
              : reducedMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 30, rotateX: -45 }
          }
          transition={{
            duration: 0.45,
            delay: 1.0 + lineIndex * 0.25 + i * 0.018,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          {char}
        </motion.span>
      );
    });

  return (
    <div className="absolute top-0 left-0 right-0 z-30 px-6 md:px-10 pt-5 md:pt-8 pointer-events-none">
      {/* WUFAN — massive, top */}
      <motion.h1
        className="font-display text-white leading-[0.85] tracking-tighter"
        style={{ fontSize: 'clamp(4rem, 14vw, 12rem)', fontWeight: 900 }}
        initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -60 }}
        animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: -60 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        WUFAN
      </motion.h1>

      {/* I design... — positioned on the right */}
      <div className="absolute right-6 md:right-10 top-[18%] md:top-[15%] text-right">
        <h2
          className="font-display text-white leading-[1.2] tracking-tight"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.8rem)', fontWeight: 600 }}
        >
          <div className="mb-0.5">{staggerChars(line1, 0)}</div>
          <div className="mb-0.5">{staggerChars(line2, 1)}</div>
          <div>
            {staggerChars(line3, 2)}
            <motion.span
              className="inline-block ml-0.5 text-purple-400"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={visible ? { opacity: [0, 1, 0, 1, 0, 1] } : { opacity: 0 }}
              transition={{ duration: 2.5, delay: 3.5, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
            >
              _
            </motion.span>
          </div>
        </h2>
      </div>

      {/* Subtitle — small, below WUFAN */}
      <motion.p
        className="font-mono tracking-[0.25em] mt-1 md:mt-2"
        style={{ fontSize: 'clamp(0.5rem, 0.85vw, 0.7rem)', color: 'rgba(255,255,255,0.2)' }}
        initial={reducedMotion ? { opacity: 0.2 } : { opacity: 0 }}
        animate={visible ? { opacity: 0.2 } : { opacity: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
      >
        吴凡 · PERSONAL PLAYGROUND
      </motion.p>
    </div>
  );
};

export default HeaderTitle;
