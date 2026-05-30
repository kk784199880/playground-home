export type FallbackType = 'basketball' | 'chair' | 'watermelon' | 'controller';

export interface Motion3D {
  floatX: number[];
  floatY: number[];
  rotateZ: number[];
  rotateY: number[];
  scale: number[];
  duration: number;
  delay: number;
}

export interface HeroObjectData {
  id: string;
  src: string;
  fallbackType: FallbackType;
  label: string;
  glowColor: string;
  left?: string;
  right?: string;
  bottom: string;
  width: string;
  maxHeight?: string;
  zIndex: number;
  rotate: string;
  floatDuration: number;
  floatDistance: number;
  entranceDelay: number;
  entranceX: number;
  entranceY: number;
  parallaxDepth: number;
  scale: number;
  motion3D: Motion3D;
}

export const heroObjects: HeroObjectData[] = [
  {
    id: 'basketball-main',
    src: '/assets/basketball.png',
    fallbackType: 'basketball',
    label: 'Basketball',
    glowColor: '#f97316',
    left: '4%',
    bottom: '8%',
    width: '26vw',
    zIndex: 2,
    rotate: '-5deg',
    floatDuration: 5.2,
    floatDistance: 7,
    entranceDelay: 0.2,
    entranceX: -280,
    entranceY: -60,
    parallaxDepth: 0.25,
    scale: 1,
    motion3D: {
      floatX: [0, 28, 0],
      floatY: [0, -22, 0],
      rotateZ: [-5, 2, -5],
      rotateY: [0, 10, 0],
      scale: [1, 1.015, 1],
      duration: 7,
      delay: 0.7,
    },
  },
  {
    id: 'chair-main',
    src: '/assets/chair.png',
    fallbackType: 'chair',
    label: 'Design',
    glowColor: '#a855f7',
    left: '31%',
    bottom: '-3%',
    width: '23vw',
    zIndex: 5,
    rotate: '2deg',
    floatDuration: 5.8,
    floatDistance: 8,
    entranceDelay: 0.4,
    entranceX: -80,
    entranceY: 320,
    parallaxDepth: 0.55,
    scale: 1,
    motion3D: {
      floatX: [0, 0, 0],
      floatY: [0, -10, 0],
      rotateZ: [2, 4, 2],
      rotateY: [-8, 4, -8],
      scale: [1, 1.01, 1],
      duration: 6.5,
      delay: 0.9,
    },
  },
  {
    id: 'watermelon-main',
    src: '/assets/watermelon.png',
    fallbackType: 'watermelon',
    label: 'Fitness',
    glowColor: '#22c55e',
    right: '7%',
    bottom: '34%',
    width: '28vw',
    maxHeight: '17vh',
    zIndex: 3,
    rotate: '4deg',
    floatDuration: 5.0,
    floatDistance: 5,
    entranceDelay: 0.55,
    entranceX: 260,
    entranceY: -120,
    parallaxDepth: 0.45,
    scale: 1,
    motion3D: {
      floatX: [0, 0, 0],
      floatY: [0, -14, 0],
      rotateZ: [4, 7, 4],
      rotateY: [-5, 5, -5],
      scale: [1, 1.012, 1],
      duration: 6.8,
      delay: 1.0,
    },
  },
  {
    id: 'game-controller-main',
    src: '/assets/controller.png',
    fallbackType: 'controller',
    label: 'Gaming',
    glowColor: '#6366f1',
    left: '60%',
    bottom: '10%',
    width: '20vw',
    zIndex: 6,
    rotate: '-5deg',
    floatDuration: 4.0,
    floatDistance: 10,
    entranceDelay: 0.65,
    entranceX: 180,
    entranceY: 180,
    parallaxDepth: 0.8,
    scale: 1,
    motion3D: {
      floatX: [0, 0, 0],
      floatY: [0, -12, 3, 0],
      rotateZ: [-5, -2, -6, -5],
      rotateY: [0, 8, -3, 0],
      scale: [1, 1.015, 1],
      duration: 5.8,
      delay: 1.1,
    },
  },
];
