import { type FC } from 'react';
import { motion } from 'framer-motion';
import timeline from '../data/timeline.json';

interface Props {
  reducedMotion: boolean;
}

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const TimelineSection: FC<Props> = ({ reducedMotion }) => {
  const init = reducedMotion ? 'visible' : 'hidden';

  return (
    <section id="timeline" className="relative py-28 lg:py-36 px-6" style={{ background: '#050508' }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-mono text-[0.6rem] tracking-[0.2em] mb-6 text-center"
          style={{ color: 'rgba(255,255,255,0.18)' }}
          initial={init} whileInView="visible" variants={variants} viewport={{ once: true }}
        >
          CAREER TIMELINE
        </motion.p>
        <motion.h2
          className="font-display text-white mb-3 leading-none text-center"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
          initial={init} whileInView="visible" variants={variants} custom={1} viewport={{ once: true }}
        >
          Timeline
          <span className="block text-sm font-normal italic mt-1 opacity-25" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
            生涯历程
          </span>
        </motion.h2>
        <motion.p
          className="text-center text-white/15 text-xs mb-12"
          initial={init} whileInView="visible" variants={variants} custom={2} viewport={{ once: true }}
        >
          Academic & professional milestones
        </motion.p>

        <div className="overflow-x-auto pb-6" style={{ scrollbarWidth: 'thin' }}>
          <div className="flex gap-5 min-w-max px-2">
            {timeline.entries.map((t, i) => (
              <motion.div
                key={t.year + t.title}
                className="w-60 shrink-0"
                initial={init} whileInView="visible" variants={variants} custom={i + 3} viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="font-mono text-xs font-bold"
                    style={{ color: i === 0 ? '#a78bfa' : 'rgba(255,255,255,0.3)' }}
                  >
                    {t.year}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background: i === 0
                        ? 'linear-gradient(90deg, rgba(139,92,246,0.3), transparent)'
                        : 'linear-gradient(90deg, rgba(255,255,255,0.08), transparent)',
                    }}
                  />
                </div>
                <div
                  className="p-5 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <h4 className="font-semibold text-sm mb-2 text-white/85">{t.title}</h4>
                  <p className="text-white/30 text-[0.7rem] leading-relaxed">{t.desc}</p>
                  <p className="text-white/15 text-[0.55rem] mt-2">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
