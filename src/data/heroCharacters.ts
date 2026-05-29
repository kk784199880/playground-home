export interface CharacterData {
  id: string;
  action: 'shooting' | 'jumping' | 'gaming' | 'waving' | 'squatting';
  attachToObjectId: string;
  offsetX: number;
  offsetY: number;
  delay: number;
  color: string;
}

export const heroCharacters: CharacterData[] = [
  {
    id: 'char-1',
    action: 'shooting',
    attachToObjectId: 'basketball-main',
    offsetX: 40,
    offsetY: -80,
    delay: 1.0,
    color: '#f97316',
  },
  {
    id: 'char-2',
    action: 'jumping',
    attachToObjectId: 'dumbbell-main',
    offsetX: -35,
    offsetY: -60,
    delay: 1.3,
    color: '#a78bfa',
  },
  {
    id: 'char-3',
    action: 'gaming',
    attachToObjectId: 'gamepad-main',
    offsetX: 35,
    offsetY: 45,
    delay: 1.5,
    color: '#22d3ee',
  },
  {
    id: 'char-4',
    action: 'waving',
    attachToObjectId: 'chair-main',
    offsetX: -50,
    offsetY: -50,
    delay: 1.7,
    color: '#fbbf24',
  },
];
