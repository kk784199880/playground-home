import { type FC } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { FloatingObjectData } from '../data/heroObjects';
import { PIXEL_CELL, getPixelsForType } from '../data/heroObjects';

interface Props {
  obj: FloatingObjectData;
  mouseX: number;
  mouseY: number;
  visible: boolean;
  reducedMotion: boolean;
}

const FloatingObject: FC<Props> = ({ obj, mouseX, mouseY, visible, reducedMotion }) => {
  // Parallax
  const dx = useTransform(useMotionValue(mouseX), v => (v - 0.5) * obj.depth * -50);
  const dy = useTransform(useMotionValue(mouseY), v => (v - 0.5) * obj.depth * -50);
  const springX = useSpring(dx, { stiffness: 70, damping: 30 });
  const springY = useSpring(dy, { stiffness: 70, damping: 30 });

  const pixels = getPixelsForType(obj.type);
  const pw = pixels[0]?.length ?? 0;
  const ph = pixels.length;
  const cell = PIXEL_CELL;

  const entrance = reducedMotion
    ? { opacity: 1, scale: 1 }
    : {
        opacity: 0,
        scale: 0.2,
        x: obj.x > 60 ? 300 : obj.x < 30 ? -300 : 0,
        y: -200,
        rotate: obj.rotation + 90,
      };

  const floating = reducedMotion
    ? {}
    : {
        y: [0, -14, 0, 10, 0],
        rotate: [obj.rotation, obj.rotation + 3, obj.rotation - 2, obj.rotation + 1, obj.rotation],
      };

  const visibleAnim = reducedMotion
    ? { opacity: 1, scale: 1, x: 0, y: 0, rotate: obj.rotation }
    : {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotate: obj.rotation,
        ...floating,
      };

  return (
    <motion.div
      className="absolute pointer-events-auto cursor-pointer"
      style={{
        left: `${obj.x}%`,
        top: `${obj.y}%`,
        x: springX,
        y: springY,
        zIndex: Math.round(obj.depth * 50),
        transformOrigin: 'center center',
      }}
      initial={entrance}
      animate={visibleAnim}
      transition={{
        opacity: { duration: 0.6, delay: obj.floatDelay },
        scale: { duration: 0.7, delay: obj.floatDelay, ease: [0.25, 0.46, 0.45, 0.94] },
        x: { duration: 0.8, delay: obj.floatDelay, ease: [0.25, 0.46, 0.45, 0.94] },
        y: { duration: 0.8, delay: obj.floatDelay, ease: [0.25, 0.46, 0.45, 0.94] },
        rotate: { duration: 0.7, delay: obj.floatDelay },
      }}
      whileHover={{ scale: obj.scale * 1.08, transition: { duration: 0.25 } }}
    >
      {/* Glow behind pixel art */}
      <div
        className="absolute rounded-full blur-3xl opacity-15"
        style={{
          inset: '-20%',
          background: obj.glowColor,
        }}
      />

      {/* Pixel art SVG */}
      <svg
        width={pw * cell}
        height={ph * cell}
        viewBox={`0 0 ${pw * cell} ${ph * cell}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: `drop-shadow(0 0 12px ${obj.glowColor}44)` }}
      >
        {pixels.map((row, y) =>
          row.map((color, x) => {
            if (!color) return null;
            return (
              <rect
                key={`${x}-${y}`}
                x={x * cell}
                y={y * cell}
                width={cell}
                height={cell}
                fill={color}
                rx={1}
              />
            );
          })
        )}
      </svg>

      {/* Label on hover */}
      {obj.label && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-3 py-1 rounded-full whitespace-nowrap z-10"
          style={{
            background: 'rgba(255,255,255,0.08)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
          initial={{ opacity: 0, y: -4 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          <span className="text-white/80 text-xs font-mono tracking-wider">{obj.label}</span>
          <span className="text-white/30 text-[10px] ml-1.5">{obj.labelZh}</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FloatingObject;
