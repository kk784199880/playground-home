import { type FC } from 'react';
import { motion } from 'framer-motion';
import type { CharacterData, CharacterAction } from '../data/heroCharacters';

interface Props {
  character: CharacterData;
  visible: boolean;
  reducedMotion: boolean;
}

/* ===== Per-action animations ===== */
function getAnim(action: CharacterAction) {
  switch (action) {
    case 'shootJump':
      return {
        animate: { y: [0, -24, 0], scale: [1, 1.06, 1] },
        transition: {
          y: { duration: 0.5, repeat: Infinity, repeatDelay: 1.6, ease: 'easeOut' },
          scale: { duration: 0.5, repeat: Infinity, repeatDelay: 1.6, ease: 'easeOut' },
        },
      };
    case 'sitBounce':
      return {
        animate: { y: [0, -6, 0, -4, 0] },
        transition: { y: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } },
      };
    case 'jumpLoop':
      return {
        animate: { y: [0, -26, 0, -18, 0], scale: [1, 1.05, 1, 1.04, 1] },
        transition: {
          y: { duration: 0.6, repeat: Infinity, repeatDelay: 0.25, ease: 'easeOut' },
          scale: { duration: 0.6, repeat: Infinity, repeatDelay: 0.25, ease: 'easeOut' },
        },
      };
    case 'runInPlace':
      return {
        animate: { x: [-4, 4, -4], y: [0, -10, 0], rotate: [-3, 3, -3] },
        transition: {
          x: { duration: 0.38, repeat: Infinity, ease: 'easeInOut' },
          y: { duration: 0.33, repeat: Infinity, ease: 'easeInOut' },
          rotate: { duration: 0.38, repeat: Infinity, ease: 'easeInOut' },
        },
      };
    case 'gamingBounce':
      return {
        animate: { y: [0, -7, 0, -5, 0] },
        transition: { y: { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } },
      };
    default:
      return { animate: {}, transition: {} };
  }
}

/* ===== Refined SVG Figure =====
   viewBox 0 0 38 100 — slightly wider, more playful proportions */
function PersonFigure({ action, color }: { action: CharacterAction; color: string }) {
  const skin = '#f5d5b8';
  const shadow = color + '33';
  const headCY = 10;

  const armPos: Record<CharacterAction, { lx: number; ly: number; rx: number; ry: number }> = {
    shootJump:    { lx: 8, ly: 16, rx: 30, ry: 14 },
    sitBounce:    { lx: 6, ly: 41, rx: 32, ry: 41 },
    jumpLoop:     { lx: 6, ly: 18, rx: 32, ry: 16 },
    runInPlace:   { lx: 12, ly: 37, rx: 26, ry: 35 },
    gamingBounce: { lx: 12, ly: 40, rx: 27, ry: 40 },
  };

  const legPos: Record<CharacterAction, { lx: number; ly: number; rx: number; ry: number }> = {
    shootJump:    { lx: 13, ly: 90, rx: 24, ry: 88 },
    sitBounce:    { lx: 10, ly: 68, rx: 27, ry: 68 },
    jumpLoop:     { lx: 8, ly: 90, rx: 29, ry: 92 },
    runInPlace:   { lx: 15, ly: 92, rx: 22, ry: 88 },
    gamingBounce: { lx: 10, ly: 70, rx: 26, ry: 70 },
  };

  const a = armPos[action];
  const l = legPos[action];

  return (
    <svg viewBox="0 0 38 100" width="100%" height="100%"
      style={{ filter: `drop-shadow(0 2px 12px ${shadow})` }}>

      {/* ── Head ── */}
      <ellipse cx="19" cy={headCY} rx="8.5" ry="9.5" fill={skin} />
      {/* Hair cap */}
      <ellipse cx="19" cy="3.5" rx="8" ry="5.5" fill={color} opacity="0.6" />
      <ellipse cx="10.5" cy={headCY + 1} rx="2.8" ry="6" fill={color} opacity="0.35" />
      <ellipse cx="27.5" cy={headCY + 1} rx="2.8" ry="6" fill={color} opacity="0.35" />
      {/* Hair highlight */}
      <ellipse cx="16" cy="2" rx="5" ry="2.2" fill="white" opacity="0.13" />

      {/* ── Eyes ── */}
      <circle cx="15" cy={headCY - 0.5} r="1.2" fill="#1a0f08" />
      <circle cx="23" cy={headCY - 0.5} r="1.2" fill="#1a0f08" />
      <circle cx="14.5" cy={headCY - 1} r="0.4" fill="white" opacity="0.7" />
      <circle cx="22.5" cy={headCY - 1} r="0.4" fill="white" opacity="0.7" />

      {/* ── Mouth ── */}
      <path d="M16.5 15 Q19 16.8 21.5 15" stroke="#c4956a" strokeWidth="0.7" fill="none" opacity="0.5" />

      {/* ── Neck ── */}
      <rect x="17" y="19" width="4" height="5" rx="1.5" fill={skin} opacity="0.5" />

      {/* ── Body ── */}
      <rect x="11.5" y="23" width="15" height="22" rx="5.5" fill={color} />
      {/* Collar */}
      <path d="M12 24 Q19 30 26 24" stroke="white" strokeWidth="0.8" fill="none" opacity="0.22" />
      {/* Body highlight */}
      <rect x="14" y="26" width="10" height="9" rx="3.5" fill="white" opacity="0.13" />
      {/* Body bottom shadow */}
      <rect x="12.5" y="43" width="13" height="2" rx="1" fill="white" opacity="0.06" />

      {/* ── Arms ── */}
      <line x1="14" y1="26" x2={a.lx} y2={a.ly} stroke={color} strokeWidth="4.5" strokeLinecap="round" />
      <line x1="24" y1="26" x2={a.rx} y2={a.ry} stroke={color} strokeWidth="4.5" strokeLinecap="round" />

      {/* ── Legs ── */}
      <line x1="15.5" y1="45" x2={l.lx} y2={l.ly} stroke="#2d3035" strokeWidth="5.5" strokeLinecap="round" />
      <line x1="22.5" y1="45" x2={l.rx} y2={l.ry} stroke="#2d3035" strokeWidth="5.5" strokeLinecap="round" />

      {/* ── Shoes — chunkier ── */}
      <ellipse cx={l.lx + 2} cy={l.ly + 2} rx="5" ry="3" fill={color} opacity="0.7" />
      <ellipse cx={l.rx - 2} cy={l.ry + 2} rx="5" ry="3" fill={color} opacity="0.7" />
      <ellipse cx={l.lx + 2} cy={l.ly + 3.5} rx="3.5" ry="1" fill="white" opacity="0.07" />
      <ellipse cx={l.rx - 2} cy={l.ry + 3.5} rx="3.5" ry="1" fill="white" opacity="0.07" />
    </svg>
  );
}

const TinyPerson: FC<Props> = ({ character, visible, reducedMotion }) => {
  const anim = reducedMotion ? { animate: {}, transition: {} } : getAnim(character.action);

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: character.left || undefined,
        right: character.right || undefined,
        bottom: character.bottom,
        height: character.height,
        width: character.height * 0.44,
        zIndex: character.zIndex,
      }}
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0, y: 24 }}
      animate={visible ? { opacity: 1, scale: 1, ...anim.animate } : { opacity: 0 }}
      transition={{
        opacity: { duration: 0.4, delay: character.entranceDelay },
        scale: { duration: 0.5, delay: character.entranceDelay, ease: [0.25, 0.46, 0.45, 0.94] },
        ...anim.transition,
      }}
    >
      <PersonFigure action={character.action} color={character.color} />
    </motion.div>
  );
};

export default TinyPerson;
