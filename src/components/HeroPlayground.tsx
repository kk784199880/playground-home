import { useState, useEffect, useCallback, type FC } from 'react';
import { motion } from 'framer-motion';
import FloatingObject from './FloatingObject';
import TinyPerson from './TinyPerson';
import HeaderTitle from './HeaderTitle';
import { heroObjects } from '../data/heroObjects';
import { heroCharacters } from '../data/heroCharacters';

interface Props {
  scrollY: number;
  reducedMotion: boolean;
}

const HeroPlayground: FC<Props> = ({ scrollY, reducedMotion }) => {
  const [mouseX, setMouseX] = useState(0.5);
  const [mouseY, setMouseY] = useState(0.5);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setMouseX(e.clientX / window.innerWidth);
    setMouseY(e.clientY / window.innerHeight);
  }, []);

  // Scroll-based transform
  const heroScale = 1 - scrollY * 0.0006;
  const heroOpacity = 1 - scrollY * 0.004;
  const heroY = -scrollY * 0.35;

  return (
    <motion.section
      className="relative w-full h-screen overflow-hidden bg-black select-none"
      onMouseMove={handleMouseMove}
      style={{
        scale: Math.max(heroScale, 0.75),
        opacity: Math.max(heroOpacity, 0),
        y: Math.min(heroY, 0),
      }}
    >
      {/* Deep background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(99,102,241,0.2) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 80%)',
        }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] rounded-full blur-[200px] pointer-events-none"
        style={{ background: 'rgba(249,115,22,0.04)' }} />
      <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] rounded-full blur-[180px] pointer-events-none"
        style={{ background: 'rgba(99,102,241,0.05)' }} />
      <div className="absolute bottom-[10%] left-[40%] w-[300px] h-[300px] rounded-full blur-[150px] pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.04)' }} />

      {/* Title */}
      <HeaderTitle visible={visible} reducedMotion={reducedMotion} />

      {/* Floating objects */}
      <div className="absolute inset-0 z-10">
        {heroObjects.map(obj => (
          <FloatingObject
            key={obj.id}
            obj={obj}
            mouseX={mouseX}
            mouseY={mouseY}
            visible={visible}
            reducedMotion={reducedMotion}
          />
        ))}
      </div>

      {/* Tiny people — render on top of their attached objects */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {heroCharacters.map(char => {
          const parentObj = heroObjects.find(o => o.id === char.attachToObjectId);
          if (!parentObj) return null;
          return (
            <div
              key={char.id}
              className="absolute"
              style={{
                left: `${parentObj.x}%`,
                top: `${parentObj.y}%`,
                transform: `translate(${char.offsetX}px, ${char.offsetY}px)`,
              }}
            >
              <TinyPerson character={char} visible={visible} reducedMotion={reducedMotion} />
            </div>
          );
        })}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-[200px] z-25 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.95), transparent)' }} />

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 font-mono text-[0.5rem] tracking-[0.4em] pointer-events-none"
        style={{ color: 'rgba(255,255,255,0.15)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? [0, 0.5, 0] : 0 }}
        transition={{ duration: 3, repeat: Infinity, delay: 4 }}
      >
        SCROLL TO EXPLORE
      </motion.div>
    </motion.section>
  );
};

export default HeroPlayground;
