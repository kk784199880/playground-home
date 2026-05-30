import { type FC } from 'react';
import FloatingVisualObject from './FloatingVisualObject';
import TinyPerson from './TinyPerson';
import { heroObjects } from '../data/heroObjects';
import { heroCharacters } from '../data/heroCharacters';

interface Props {
  visible: boolean;
  parallaxX: number;
  parallaxY: number;
  reducedMotion: boolean;
}

const HeroStage: FC<Props> = ({ visible, parallaxX, parallaxY, reducedMotion }) => {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: '50%',
        top: '60%',
        transform: 'translate(-50%, -50%)',
        width: '92vw',
        height: '60vh',
        zIndex: 10,
        perspective: '1200px',
      }}
    >
      {/* Giant objects — overlapping collage */}
      {heroObjects.map((obj) => (
        <FloatingVisualObject
          key={obj.id}
          obj={obj}
          visible={visible}
          parallaxX={parallaxX}
          parallaxY={parallaxY}
          reducedMotion={reducedMotion}
        />
      ))}

      {/* Tiny people — on top of objects */}
      {heroCharacters.map((char) => (
        <TinyPerson
          key={char.id}
          character={char}
          visible={visible}
          reducedMotion={reducedMotion}
        />
      ))}
    </div>
  );
};

export default HeroStage;
