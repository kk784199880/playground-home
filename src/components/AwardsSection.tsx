import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  reducedMotion: boolean;
}

const awardsByYear = [
  {
    year: '2025',
    items: [
      { name: 'Pentawards 铜奖', work: 'Leng Cui' },
      { name: 'K-DESIGN WINNER', work: 'GREEN WALKER' },
      { name: 'IF STUDENT AWARD TOP 300', work: 'Gradually Entering the Chess World' },
      { name: 'EPDA WINNER ×3', work: 'Tang Grace / Lengcui / Chess Realm' },
      { name: 'EPDA Honorable Mention', work: 'THE WEIGHT OF NEW BLOOD' },
    ],
  },
  {
    year: '2024',
    items: [
      { name: 'IF DESIGN AWARD WINNER', work: 'zhuchun' },
      { name: 'IF STUDENT AWARD TOP 300', work: 'BAMBUREVIVE CHAIR' },
      { name: 'Pentawards NOMINATION', work: 'YANPOU' },
    ],
  },
  {
    year: '2023',
    items: [
      { name: 'EPDA TOP DESIGN', work: 'STARRY-Braille Generator' },
    ],
  },
  {
    year: '2022',
    items: [
      { name: 'EPDA TOP DESIGN', work: 'One Hand Measuring Ruler' },
      { name: 'CORE77 DESIGN AWARDS', work: 'One Hand Measuring Ruler' },
      { name: 'Pentawards NOMINATION', work: 'Etiquette of Pottery' },
    ],
  },
  {
    year: '2021',
    items: [
      { name: 'SPARK Silver', work: 'One-Hand Measuring Ruler' },
      { name: 'SPARK Silver', work: 'Shockproof & Cushioning Goblet Package' },
      { name: 'SPARK Bronze', work: 'Easy-Disassembly Mask' },
      { name: 'Pentawards BRONZE', work: 'DELICATE RICE LIQUOR' },
      { name: 'EPDA Honorable Mention', work: 'Easy-Disassembly Mask' },
      { name: 'HUT 研究生国家奖学金', work: '' },
    ],
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

        {/* Award cards by year */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {awardsByYear.map((a, i) => (
            <motion.div
              key={a.year}
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              initial={init} whileInView="visible" variants={variants} custom={i + 2} viewport={{ once: true }}
              whileHover={{ borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.03)' }}
            >
              <p className="font-mono text-[0.55rem] tracking-[0.2em] mb-4 text-purple-400/70">{a.year}</p>
              <div className="space-y-2.5">
                {a.items.map((item) => (
                  <div key={item.name + item.work}>
                    <p className="text-white/70 text-xs font-semibold leading-snug">{item.name}</p>
                    {item.work && (
                      <p className="text-white/20 text-[0.6rem] italic mt-0.5">{item.work}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big numbers */}
        <motion.div
          className="grid grid-cols-3 gap-6 text-center max-w-lg mx-auto"
          initial={init} whileInView="visible" variants={variants} custom={7} viewport={{ once: true }}
        >
          <div>
            <p className="font-display text-5xl font-bold text-purple-400">20</p>
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
