import { type FC } from 'react';
import { motion } from 'framer-motion';
import passions from '../data/passions.json';

interface Props {
  reducedMotion: boolean;
}

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const PassionsSection: FC<Props> = ({ reducedMotion }) => {
  const init = reducedMotion ? 'visible' : 'hidden';

  return (
    <section id="passions" className="relative py-28 lg:py-36 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-mono text-[0.6rem] tracking-[0.2em] mb-6 text-center"
          style={{ color: 'rgba(255,255,255,0.18)' }}
          initial={init} whileInView="visible" variants={variants} viewport={{ once: true }}
        >
          BEYOND DESIGN
        </motion.p>
        <motion.h2
          className="font-display text-white mb-4 leading-none text-center"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
          initial={init} whileInView="visible" variants={variants} custom={1} viewport={{ once: true }}
        >
          Beyond Design
          <span className="block text-sm font-normal italic mt-1 opacity-25" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
            设计之外 · 我所热爱
          </span>
        </motion.h2>
        <motion.p
          className="text-center text-white/15 text-xs mb-14"
          initial={init} whileInView="visible" variants={variants} custom={2} viewport={{ once: true }}
        >
          When not researching, you'll find me here —
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {passions.items.map((h, i) => (
            <motion.div
              key={h.name}
              className="p-5 rounded-2xl text-center group cursor-default"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              initial={init} whileInView="visible" variants={variants} custom={i + 3} viewport={{ once: true }}
              whileHover={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(139,92,246,0.2)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {h.icon}
              </div>
              <h4 className="font-semibold text-sm mb-1 text-white/80">{h.name}</h4>
              <p className="text-white/25 text-[0.65rem] leading-relaxed">{h.desc}</p>
              <p className="text-white/12 text-[0.55rem] mt-1.5">{h.zh}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionsSection;
