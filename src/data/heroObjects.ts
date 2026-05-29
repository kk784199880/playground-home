export interface FloatingObjectData {
  id: string;
  type: 'basketball' | 'dumbbell' | 'gamepad' | 'chair';
  /** Percentage from left */
  x: number;
  /** Percentage from top */
  y: number;
  scale: number;
  rotation: number;
  depth: number;
  label: string;
  labelZh: string;
  glowColor: string;
  floatDelay: number;
  floatDuration: number;
}

/** Four giant pixel-art objects clustered in the center */
export const heroObjects: FloatingObjectData[] = [
  {
    id: 'basketball-main',
    type: 'basketball',
    x: 18,
    y: 38,
    scale: 3.2,
    rotation: 5,
    depth: 0.9,
    label: 'Basketball',
    labelZh: '篮球',
    glowColor: '#f97316',
    floatDelay: 0.2,
    floatDuration: 4.5,
  },
  {
    id: 'dumbbell-main',
    type: 'dumbbell',
    x: 48,
    y: 45,
    scale: 3.0,
    rotation: -10,
    depth: 0.85,
    label: 'Fitness',
    labelZh: '健身',
    glowColor: '#a1a1aa',
    floatDelay: 0.3,
    floatDuration: 5.0,
  },
  {
    id: 'gamepad-main',
    type: 'gamepad',
    x: 72,
    y: 36,
    scale: 3.1,
    rotation: -6,
    depth: 0.9,
    label: 'PC Gaming',
    labelZh: '游戏',
    glowColor: '#22d3ee',
    floatDelay: 0.25,
    floatDuration: 4.8,
  },
  {
    id: 'chair-main',
    type: 'chair',
    x: 35,
    y: 62,
    scale: 2.8,
    rotation: 3,
    depth: 0.8,
    label: 'Design',
    labelZh: '家具设计',
    glowColor: '#d4a574',
    floatDelay: 0.4,
    floatDuration: 5.5,
  },
];

/** Pixel grid dimensions: each grid has CELL_SIZE px cells */
export const PIXEL_CELL = 10;
export const PX = PIXEL_CELL;

/** Basketball — 14×14 pixel circle, orange palette */
export const BASKETBALL_PIXELS: (string | null)[][] = [
//   0    1    2    3    4    5    6    7    8    9   10   11   12   13
  [null,null,null,null,'#7c2d12','#9a3412','#9a3412','#9a3412','#9a3412','#7c2d12',null,null,null,null], // 0
  [null,null,'#7c2d12','#c2410c','#ea580c','#f97316','#f97316','#f97316','#f97316','#ea580c','#c2410c','#7c2d12',null,null], // 1
  [null,'#7c2d12','#ea580c','#f97316','#fb923c','#fb923c','#fb923c','#fb923c','#fb923c','#fb923c','#f97316','#ea580c','#7c2d12',null], // 2
  [null,'#9a3412','#f97316','#fb923c','#fdba74','#fdba74','#fdba74','#fdba74','#fdba74','#fdba74','#fb923c','#f97316','#9a3412',null], // 3
  ['#7c2d12','#c2410c','#f97316','#fdba74','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fdba74','#fb923c','#c2410c','#7c2d12'], // 4
  ['#9a3412','#ea580c','#fb923c','#fdba74','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fdba74','#fb923c','#ea580c','#9a3412'], // 5
  ['#9a3412','#f97316','#fb923c','#fdba74','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fdba74','#fb923c','#f97316','#9a3412'], // 6
  ['#9a3412','#f97316','#fb923c','#fdba74','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fdba74','#fb923c','#f97316','#9a3412'], // 7
  ['#9a3412','#f97316','#fb923c','#fdba74','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fdba74','#fb923c','#f97316','#9a3412'], // 8
  ['#9a3412','#ea580c','#fb923c','#fdba74','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fdba74','#fb923c','#ea580c','#9a3412'], // 9
  ['#7c2d12','#c2410c','#f97316','#fdba74','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fed7aa','#fdba74','#fb923c','#c2410c','#7c2d12'], // 10
  [null,'#9a3412','#f97316','#fb923c','#fdba74','#fdba74','#fdba74','#fdba74','#fdba74','#fdba74','#fb923c','#f97316','#9a3412',null], // 11
  [null,'#7c2d12','#ea580c','#f97316','#fb923c','#fb923c','#fb923c','#fb923c','#fb923c','#fb923c','#f97316','#ea580c','#7c2d12',null], // 12
  [null,null,'#7c2d12','#c2410c','#ea580c','#f97316','#f97316','#f97316','#f97316','#ea580c','#c2410c','#7c2d12',null,null], // 13
  [null,null,null,null,'#7c2d12','#9a3412','#9a3412','#9a3412','#9a3412','#7c2d12',null,null,null,null], // 14
];

/** Dumbbell — 20×8 pixel shape, metallic palette */
export const DUMBBELL_PIXELS: (string | null)[][] = [
  ['#52525b','#52525b','#a1a1aa','#d4d4d8','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#d4d4d8','#a1a1aa','#52525b','#52525b'],
  ['#3f3f46','#52525b','#a1a1aa','#d4d4d8','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#d4d4d8','#a1a1aa','#52525b','#3f3f46'],
  ['#3f3f46','#52525b','#a1a1aa','#d4d4d8','#fafafa','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#fafafa','#d4d4d8','#a1a1aa','#52525b','#3f3f46'],
  ['#3f3f46','#52525b','#a1a1aa','#d4d4d8','#fafafa','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#fafafa','#d4d4d8','#a1a1aa','#52525b','#3f3f46'],
  ['#3f3f46','#52525b','#a1a1aa','#d4d4d8','#fafafa','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#fafafa','#d4d4d8','#a1a1aa','#52525b','#3f3f46'],
  ['#3f3f46','#52525b','#a1a1aa','#d4d4d8','#fafafa','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#d4d4d8','#fafafa','#d4d4d8','#a1a1aa','#52525b','#3f3f46'],
  ['#3f3f46','#52525b','#a1a1aa','#d4d4d8','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#fafafa','#d4d4d8','#a1a1aa','#52525b','#3f3f46'],
  ['#52525b','#52525b','#a1a1aa','#d4d4d8','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#e4e4e7','#d4d4d8','#a1a1aa','#52525b','#52525b'],
];

/** Gamepad — 22×12 pixel game controller, dark + cyan */
export const GAMEPAD_PIXELS: (string | null)[][] = [
//   0    1    2    3    4    5    6    7    8    9   10   11   12   13   14   15   16   17   18   19   20   21
  [null,null,null,null,null,null,'#0f0f23','#0f0f23','#1a1a35','#1a1a35','#1a1a35','#1a1a35','#1a1a35','#1a1a35','#1a1a35','#1a1a35','#0f0f23','#0f0f23',null,null,null,null], // 0
  [null,null,null,null,'#0f0f23','#1a1a35','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#1a1a35','#0f0f23',null,null,null], // 1
  [null,null,'#0f0f23','#1a1a35','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#1a1a35','#0f0f23',null,null], // 2
  ['#0f0f23','#1a1a35','#252550','#3b3b7a','#3b3b7a','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#3b3b7a','#3b3b7a','#252550','#1a1a35','#0f0f23',null], // 3
  ['#0f0f23','#252550','#3b3b7a','#3b3b7a','#3b3b7a','#252550','#252550','#1a1a35','#1a1a35','#252550','#0f0f23','#0f0f23','#252550','#1a1a35','#1a1a35','#252550','#3b3b7a','#3b3b7a','#252550','#252550','#0f0f23',null], // 4
  [null,'#0f0f23','#252550','#3b3b7a','#3b3b7a','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#3b3b7a','#3b3b7a','#252550','#0f0f23',null,null], // 5
  [null,null,'#0f0f23','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#252550','#0f0f23',null,null,null], // 6
  [null,null,'#0f0f23','#0f0f23','#1a1a35','#252550','#252550','#252550','#252550','#0f0f23','#0f0f23','#0f0f23','#0f0f23','#252550','#252550','#252550','#252550','#1a1a35','#0f0f23',null,null,null], // 7
  [null,null,null,'#0f0f23','#0f0f23','#1a1a35','#1a1a35','#252550','#0f0f23','#0f0f23','#1a1a35','#1a1a35','#0f0f23','#0f0f23','#252550','#1a1a35','#1a1a35','#0f0f23',null,null,null,null], // 8
  [null,null,null,null,null,'#0f0f23','#0f0f23','#1a1a35','#0f0f23','#1a1a35','#1a1a35','#1a1a35','#1a1a35','#0f0f23','#1a1a35','#0f0f23',null,null,null,null,null,null], // 9
  [null,null,null,null,null,null,'#0f0f23','#0f0f23','#1a1a35','#1a1a35','#1a1a35','#1a1a35','#1a1a35','#1a1a35','#0f0f23',null,null,null,null,null,null], // 10
  [null,null,null,null,null,null,null,'#0f0f23','#0f0f23','#0f0f23','#0f0f23','#0f0f23','#0f0f23','#0f0f23','#0f0f23',null,null,null,null,null,null], // 11
];

/** Chair — 14×16 pixel chair in warm wood tone */
export const CHAIR_PIXELS: (string | null)[][] = [
//   0    1    2    3    4    5    6    7    8    9   10   11   12   13
  [null,null,null,null,'#8b5e3c','#8b5e3c','#8b5e3c','#8b5e3c','#8b5e3c','#8b5e3c',null,null,null,null], // 0
  [null,null,null,'#8b5e3c','#a0724e','#a0724e','#a0724e','#a0724e','#a0724e','#a0724e','#8b5e3c',null,null,null], // 1
  [null,null,null,'#8b5e3c','#a0724e','#a0724e','#a0724e','#a0724e','#a0724e','#a0724e','#8b5e3c',null,null,null], // 2
  [null,null,'#6b4226','#8b5e3c','#c4956b','#c4956b','#c4956b','#c4956b','#c4956b','#c4956b','#8b5e3c','#6b4226',null,null], // 3
  [null,null,'#6b4226','#6b4226','#8b5e3c','#d4a574','#d4a574','#d4a574','#d4a574','#8b5e3c','#6b4226','#6b4226',null,null], // 4
  [null,'#6b4226','#6b4226','#6b4226','#6b4226','#8b5e3c','#d4a574','#d4a574','#8b5e3c','#6b4226','#6b4226','#6b4226','#6b4226',null], // 5
  [null,'#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#8b5e3c','#8b5e3c','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226',null], // 6
  ['#4a2e1a','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#4a2e1a'], // 7
  ['#4a2e1a','#4a2e1a','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#4a2e1a','#4a2e1a'], // 8
  ['#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#6b4226','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a'], // 9
  ['#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#6b4226','#6b4226','#6b4226','#6b4226','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a'], // 10
  [null,'#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a',null], // 11
  [null,null,'#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a','#4a2e1a',null,null], // 12
  [null,null,null,'#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a',null,null,null], // 13
  [null,null,null,null,'#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a',null,null,null], // 14
  [null,null,null,null,'#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a','#2d1a0a',null,null,null], // 15
];

export function getPixelsForType(type: string): (string | null)[][] {
  switch (type) {
    case 'basketball': return BASKETBALL_PIXELS;
    case 'dumbbell': return DUMBBELL_PIXELS;
    case 'gamepad': return GAMEPAD_PIXELS;
    case 'chair': return CHAIR_PIXELS;
    default: return [];
  }
}
