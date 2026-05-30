import { type FC, useState } from 'react';
import { motion } from 'framer-motion';
import FallbackObject from './FallbackObject';
import type { HeroObjectData } from '../data/heroObjects';

interface Props {
  obj: HeroObjectData;
  visible: boolean;
  parallaxX: number;
  parallaxY: number;
  reducedMotion: boolean;
}

const FloatingVisualObject: FC<Props> = ({ obj, visible, parallaxX, parallaxY, reducedMotion }) => {
  const [imgError, setImgError] = useState(false);

  const px = parallaxX * obj.parallaxDepth;
  const py = parallaxY * obj.parallaxDepth;

  const baseRotate = Number.parseFloat(obj.rotate);
  const m3 = obj.motion3D;

  const entrance = reducedMotion
    ? { opacity: 1, x: 0, y: 0, scale: 1, rotateZ: baseRotate, rotateY: 0 }
    : {
        opacity: 0,
        x: obj.entranceX,
        y: obj.entranceY,
        scale: 0.5,
        rotateZ: baseRotate + (obj.entranceX > 0 ? 25 : -25),
        rotateY: obj.entranceX > 0 ? 15 : -15,
      };

  const floatAnim = reducedMotion
    ? { rotateZ: baseRotate, rotateY: 0 }
    : {
        x: m3.floatX,
        y: m3.floatY,
        rotateZ: m3.rotateZ,
        rotateY: m3.rotateY,
        scale: m3.scale,
      };

  return (
    <div
      className="absolute pointer-events-auto cursor-pointer"
      style={{
        left: obj.left || undefined,
        right: obj.right || undefined,
        bottom: obj.bottom,
        width: obj.width,
        maxHeight: obj.maxHeight,
        zIndex: obj.zIndex,
        transform: `translate(${px}px, ${py}px)`,
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        initial={entrance}
        animate={{
          opacity: 1,
          ...floatAnim,
        }}
        transition={{
          opacity: { duration: 0.8, delay: obj.entranceDelay, ease: [0.25, 0.46, 0.45, 0.94] },
          x: { duration: 0.9, delay: obj.entranceDelay, ease: [0.25, 0.46, 0.45, 0.94] },
          y: {
            duration: m3.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: obj.entranceDelay + m3.delay,
          },
          rotateZ: {
            duration: m3.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: obj.entranceDelay + m3.delay,
          },
          rotateY: {
            duration: m3.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: obj.entranceDelay + m3.delay,
          },
          scale: {
            duration: m3.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: obj.entranceDelay + m3.delay,
          },
        }}
        whileHover={{ scale: obj.scale * 1.06, transition: { duration: 0.3 } }}
      >
        {/* Glow aura */}
        <div
          className="absolute inset-0 rounded-full blur-3xl pointer-events-none"
          style={{
            background: obj.glowColor,
            opacity: 0.08,
            transform: 'scale(1.4)',
          }}
        />

        {/* Image or SVG fallback */}
        {obj.src && !imgError ? (
          <img
            src={obj.src}
            alt={obj.label}
            className="w-full h-full object-contain opacity-100"
            style={{ filter: 'drop-shadow(0 4px 40px rgba(0,0,0,0.5))' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <FallbackObject type={obj.fallbackType} />
        )}

        {/* Label on hover */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 px-4 py-1.5 rounded-full whitespace-nowrap pointer-events-none"
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255,255,255,0.12)',
          }}
          initial={{ opacity: 0, y: -4 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          <span className="text-white/85 text-[0.65rem] font-mono tracking-[0.15em]">{obj.label}</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FloatingVisualObject;
