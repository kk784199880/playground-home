import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  reducedMotion: boolean;
}

const skills = [
  'C4D', 'Rhino', 'Keyshot', 'Photoshop', 'Illustrator',
  'After Effects', 'Premiere', 'Stable Diffusion', 'Midjourney', 'DeepSeek',
];

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const SkillsSection: FC<Props> = ({ reducedMotion }) => {
  const init = reducedMotion ? 'visible' : 'hidden';

  return (
    <section id="skills" className="relative py-28 lg:py-36 px-6 bg-black">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="font-mono text-[0.6rem] tracking-[0.2em] mb-6"
          style={{ color: 'rgba(255,255,255,0.18)' }}
          initial={init} whileInView="visible" variants={variants} viewport={{ once: true }}
        >
          SKILLS & TOOLS
        </motion.p>
        <motion.h2
          className="font-display text-white mb-14 leading-none"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
          initial={init} whileInView="visible" variants={variants} custom={1} viewport={{ once: true }}
        >
          Tools I Use
          <span className="block text-sm font-normal italic mt-1 opacity-25" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
            技能工具
          </span>
        </motion.h2>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-2.5"
          initial={init} whileInView="visible" variants={variants} custom={2} viewport={{ once: true }}
        >
          {skills.map((s) => (
            <span
              key={s}
              className="px-4 py-2 rounded-full font-mono text-[0.65rem] tracking-[0.1em] transition-all duration-300 cursor-default"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.4)';
                e.currentTarget.style.color = '#a78bfa';
                e.currentTarget.style.background = 'rgba(139,92,246,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
              }}
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
