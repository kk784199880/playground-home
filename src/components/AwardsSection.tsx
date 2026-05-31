import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  reducedMotion: boolean;
}

const awards = [
  {
    year: '2025',
    items: ['KDESIGN WINNER', 'Pentawards Finalist', 'IF SHORTLIST 300'],
  },
  {
    year: '2024',
    items: ['IF DESIGN WINNER', 'IF SHORTLIST 300'],
  },
  {
    year: '2023',
    items: ['EPDA TOP DESIGN', 'EPDA WINNER ×2', 'Spark FINALIST ×3'],
  },
  {
    year: '2021–22',
    items: ['Pentawards Bronze', 'Core77 Winner ×2', 'Spark Silver', 'WPO WorldStar Student'],
  },
];

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const AwardsSection: FC<Props> = ({ reducedMotion }) => {
  const init = reducedMotion ? 'visible' : 'hidden';

  return (
    <section id="awards" className="relative py-28 lg:py-36 px-6 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="font-mono text-[0.6rem] tracking-[0.2em] mb-6 text-center"
          style={{ color: 'rgba(255,255,255,0.18)' }}
          initial={init} whileInView="visible" variants={variants} viewport={{ once: true }}
        >
          AWARDS & HONORS
        </motion.p>
        <motion.h2
          className="font-display text-white mb-16 leading-none text-center"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
          initial={init} whileInView="visible" variants={variants} custom={1} viewport={{ once: true }}
        >
          Awards
          <span className="block text-sm font-normal italic mt-1 opacity-25" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
            获奖纪录
          </span>
        </motion.h2>

        {/* Award cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {awards.map((a, i) => (
            <motion.div
              key={a.year}
              className="p-5 rounded-2xl text-center"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              initial={init} whileInView="visible" variants={variants} custom={i + 2} viewport={{ once: true }}
            >
              <p className="font-mono text-[0.5rem] tracking-[0.2em] mb-4 text-white/15">{a.year}</p>
              <div className="space-y-2">
                {a.items.map((item) => (
                  <p key={item} className="text-white/65 text-xs font-semibold leading-snug">{item}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big numbers */}
        <motion.div
          className="grid grid-cols-3 gap-6 text-center max-w-lg mx-auto"
          initial={init} whileInView="visible" variants={variants} custom={6} viewport={{ once: true }}
        >
          <div>
            <p className="font-display text-5xl font-bold text-purple-400">19</p>
            <p className="text-white/15 text-[0.6rem] tracking-[0.12em] mt-2">International<br />Design Awards</p>
          </div>
          <div>
            <p className="font-display text-5xl font-bold text-white">IF</p>
            <p className="text-white/15 text-[0.6rem] tracking-[0.12em] mt-2">Winner<br />2024</p>
          </div>
          <div>
            <p className="font-display text-5xl font-bold text-purple-400">Q1</p>
            <p className="text-white/15 text-[0.6rem] tracking-[0.12em] mt-2">SCIE JCR<br />Publication</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
