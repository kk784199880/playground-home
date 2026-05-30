import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  visible: boolean;
  reducedMotion: boolean;
}

const line1 = 'Product Designer / Researcher / Basketball Lover';
const line2 = 'Design serves life, and life inspires better design.';

const HeaderTitle: FC<Props> = ({ visible, reducedMotion }) => {
  const containerAnim = reducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0 };

  const initialAnim = reducedMotion
    ? { opacity: 1, y: 0, letterSpacing: '-0.035em' }
    : { opacity: 0, y: 40, letterSpacing: '0.06em' };

  return (
    <div
      className="absolute left-1/2 z-30 -translate-x-1/2 text-center pointer-events-none"
      style={{ top: '3.2vh' }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={containerAnim}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.62, 0.94] }}
      >
        {/* WUFAN — editorial serif */}
        <motion.h1
          className="font-display text-white"
          style={{
            fontSize: 'clamp(82px, 6.5vw, 118px)',
            fontWeight: 700,
            lineHeight: 0.88,
            letterSpacing: '-0.035em',
            margin: 0,
          }}
          initial={initialAnim}
          animate={{ opacity: 1, y: 0, letterSpacing: '-0.035em' }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.62, 0.94] }}
        >
          WUFAN
        </motion.h1>

        {/* Line 1 — role tags */}
        <motion.p
          className="font-mono"
          style={{
            marginTop: '8px',
            fontSize: '11px',
            lineHeight: 1.2,
            letterSpacing: '0.18em',
            color: 'rgba(255,255,255,0.75)',
            fontWeight: 400,
          }}
          initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
          animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          {line1}
        </motion.p>

        {/* Line 2 — tagline */}
        <motion.p
          className="font-display"
          style={{
            marginTop: '7px',
            fontSize: '15px',
            lineHeight: 1.3,
            fontStyle: 'italic',
            letterSpacing: 0,
            color: 'rgba(255,255,255,0.72)',
            fontWeight: 400,
          }}
          initial={reducedMotion ? { opacity: 0.65 } : { opacity: 0, y: 8 }}
          animate={visible ? { opacity: 0.65, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          {line2}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default HeaderTitle;
