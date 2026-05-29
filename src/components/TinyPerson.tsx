import { type FC } from 'react';
import { motion } from 'framer-motion';
import type { CharacterData } from '../data/heroCharacters';

interface Props {
  character: CharacterData;
  visible: boolean;
  reducedMotion: boolean;
}

/** Pixel art tiny person — 8×12 blocky figure. Each "pixel" = 4px canvas, scaled to ~32×48 */
const P = 4; // pixel cell size

/** Returns a pixel grid for the body + action */
function getPixels(action: string): (string | null)[][] {
  const c = '#ffffff'; // body color gets overridden
  const t = null; // transparent

  // 8 wide × 12 tall figure
  const base: (string | null)[][] = [
    [t, t, t, c, c, t, t, t],   // 0  head top
    [t, t, c, c, c, c, t, t],   // 1  head
    [t, t, c, c, c, c, t, t],   // 2  head bottom
    [t, t, t, c, c, t, t, t],   // 3  neck
    [t, t, c, c, c, c, t, t],   // 4  shoulders
    [t, t, c, c, c, c, t, t],   // 5  torso
    [t, t, c, c, c, c, t, t],   // 6  torso
    [t, t, c, c, c, c, t, t],   // 7  hips
    [t, t, t, c, c, t, t, t],   // 8  legs split
    [t, t, c, t, t, c, t, t],   // 9  legs
    [t, c, t, t, t, t, c, t],   // 10 legs
    [c, t, t, t, t, t, t, c],   // 11 feet
  ];

  // Override arms based on action
  const arms: Record<string, (string | null)[][]> = {
    shooting: [
      [t, t, t, c, c, t, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, t, c, c, t, t, t],
      [c, c, c, c, c, c, c, t],   // 4  arms out left
      [t, c, c, c, c, c, c, t],   // 5
      [t, t, c, c, c, c, c, c],   // 6  arm up right
      [t, t, c, c, c, c, t, t],   // 7
      [t, t, t, c, c, t, t, t],
      [t, t, c, t, t, c, t, t],
      [t, c, t, t, t, t, c, t],
      [c, t, t, t, t, t, t, c],
    ],
    jumping: [
      [t, t, t, c, c, t, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, t, c, c, t, t, t],
      [t, c, c, c, c, c, c, t],   // arms up
      [c, t, c, c, c, c, t, c],   // arms splayed
      [t, t, c, c, c, c, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, t, c, c, t, t, t],
      [t, c, t, t, t, t, c, t],   // legs apart
      [c, t, t, t, t, t, t, c],
      [t, c, t, t, t, t, c, t],
    ],
    gaming: [
      [t, t, t, c, c, t, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, t, c, c, t, t, t],
      [t, t, c, c, c, c, t, t],
      [t, c, c, c, c, c, c, t],   // arms forward (holding)
      [t, c, c, c, c, c, c, t],
      [t, t, c, c, c, c, t, t],
      [t, t, t, c, c, t, t, t],
      [t, c, t, t, t, t, c, t],   // sitting legs
      [c, t, t, t, t, t, t, c],
      [c, c, t, t, t, t, c, c],
    ],
    waving: [
      [t, t, t, c, c, t, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, t, c, c, t, t, t],
      [t, t, c, c, c, c, c, t],   // arm up
      [t, c, c, c, c, c, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, t, c, c, t, t, t],
      [t, t, c, t, t, c, t, t],
      [t, c, t, t, t, t, c, t],
      [c, t, t, t, t, t, t, c],
    ],
    squatting: [
      [t, t, t, c, c, t, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, c, c, c, c, t, t],
      [t, t, t, c, c, t, t, t],
      [t, t, c, c, c, c, t, t],
      [t, c, c, c, c, c, c, t],
      [t, c, c, c, c, c, c, t],
      [t, t, c, c, c, c, t, t],
      [t, c, t, c, c, t, c, t],   // bent legs
      [c, t, t, c, c, t, t, c],
      [c, t, t, c, c, t, t, c],
      [c, c, c, c, c, c, c, c],   // wide feet
    ],
  };

  return arms[action] ?? base;
}

const TinyPerson: FC<Props> = ({ character, visible, reducedMotion }) => {
  const pixels = getPixels(character.action);
  const pw = pixels[0]?.length ?? 0;
  const ph = pixels.length;
  const color = character.color;

  const grid = pixels.map((row, y) =>
    row.map((cell, x) =>
      cell ? cell.replace('#ffffff', color) : null
    )
  );

  if (reducedMotion) {
    return (
      <svg width={pw * P} height={ph * P} viewBox={`0 0 ${pw * P} ${ph * P}`}
        style={{ position: 'absolute', pointerEvents: 'none' }}>
        {grid.map((row, y) =>
          row.map((c, x) => c ? <rect key={`${x}-${y}`} x={x * P} y={y * P} width={P} height={P} fill={c} rx={0.5} /> : null)
        )}
      </svg>
    );
  }

  return (
    <motion.div
      style={{ position: 'absolute', pointerEvents: 'none' }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0,
        y: character.action === 'jumping'
          ? [0, -6, 0, -6, 0]
          : character.action === 'squatting'
            ? [0, 4, 0]
            : [0, -2, 0],
      }}
      transition={{
        opacity: { delay: character.delay, duration: 0.4 },
        scale: { delay: character.delay, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
        y: {
          duration: character.action === 'jumping' ? 0.5 : 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: character.delay + 0.3,
        },
      }}
    >
      <svg
        width={pw * P}
        height={ph * P}
        viewBox={`0 0 ${pw * P} ${ph * P}`}
        style={{ filter: `drop-shadow(0 0 6px ${color}66)` }}
      >
        {grid.map((row, y) =>
          row.map((c, x) =>
            c ? (
              <rect
                key={`${x}-${y}`}
                x={x * P}
                y={y * P}
                width={P}
                height={P}
                fill={c}
                rx={0.5}
              />
            ) : null
          )
        )}
      </svg>
    </motion.div>
  );
};

export default TinyPerson;
