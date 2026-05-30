export type CharacterAction =
  | 'shootJump'
  | 'sitBounce'
  | 'jumpLoop'
  | 'runInPlace'
  | 'gamingBounce';

export interface CharacterData {
  id: string;
  action: CharacterAction;
  left: string;
  right: string;
  bottom: string;
  height: number;
  zIndex: number;
  entranceDelay: number;
  color: string;
}

export const heroCharacters: CharacterData[] = [
  {
    id: 'person-01',
    action: 'shootJump',
    left: '7%',
    right: '',
    bottom: '42%',
    height: 135,
    zIndex: 12,
    entranceDelay: 1.2,
    color: '#f97316',
  },
  {
    id: 'person-02',
    action: 'sitBounce',
    left: '33%',
    right: '',
    bottom: '16%',
    height: 130,
    zIndex: 12,
    entranceDelay: 1.4,
    color: '#c084fc',
  },
  {
    id: 'person-03',
    action: 'jumpLoop',
    left: '44%',
    right: '',
    bottom: '58%',
    height: 138,
    zIndex: 12,
    entranceDelay: 1.55,
    color: '#fbbf24',
  },
  {
    id: 'person-04',
    action: 'runInPlace',
    left: '58%',
    right: '',
    bottom: '30%',
    height: 132,
    zIndex: 12,
    entranceDelay: 1.7,
    color: '#22d3ee',
  },
  {
    id: 'person-05',
    action: 'gamingBounce',
    left: '',
    right: '10%',
    bottom: '56%',
    height: 125,
    zIndex: 12,
    entranceDelay: 1.9,
    color: '#f472b6',
  },
];
