import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  reducedMotion: boolean;
}

interface AwardItem {
  name: string;
  work: string;
}

interface AwardGroup {
  year: string;
  items: AwardItem[];
}

interface AwardLogo {
  letter: string;
  bg: string;
  color: string;
}

// Color schemes inspired by each award's brand identity
const awardLogos: Record<string, AwardLogo> = {
  Pentawards:   { letter: 'P',  bg: 'rgba(0,56,168,0.25)',  color: '#5b9bd5' },
  'K-DESIGN':   { letter: 'K',  bg: 'rgba(220,20,60,0.2)',    color: '#f87171' },
  'IF':         { letter: 'iF', bg: 'rgba(220,20,60,0.2)',    color: '#ef4444' },
  EPDA:         { letter: 'E',  bg: 'rgba(212,175,55,0.2)',   color: '#fbbf24' },
  CORE77:       { letter: 'C',  bg: 'rgba(255,140,0,0.2)',    color: '#fb923c' },
  SPARK:        { letter: 'S',  bg: 'rgba(255,215,0,0.18)',   color: '#facc15' },
  '国家奖学金': { letter: '国', bg: 'rgba(220,38,38,0.2)',    color: '#f87171' },
};

function getAwardLogoKey(name: string): string {
  if (name.includes('Pentawards')) return 'Pentawards';
  if (name.includes('K-DESIGN')) return 'K-DESIGN';
  if (name.startsWith('IF ')) return 'IF';
  if (name.includes('EPDA')) return 'EPDA';
  if (name.includes('CORE77')) return 'CORE77';
  if (name.includes('SPARK')) return 'SPARK';
  if (name.includes('国家奖学金')) return '国家奖学金';
  return '';
}

function LogoBadge({ logo }: { logo: AwardLogo }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center rounded-md font-bold"
      style={{
        width: 32,
        height: 32,
        background: logo.bg,
        color: logo.color,
        fontSize: logo.letter.length > 1 ? '0.55rem' : '0.75rem',
        letterSpacing: '0.02em',
        border: `1px solid ${logo.color}20`,
      }}
    >
      {logo.letter}
    </div>
  );
}

const awardsByYear: AwardGroup[] = [
  {
    year: '2025',
    items: [
      { name: 'Pentawards Bronze', work: 'Leng Cui' },
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
      { name: 'Pentawards Nomination', work: 'YANPOU' },
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
      { name: 'Pentawards Nomination', work: 'Etiquette of Pottery' },
    ],
  },
  {
    year: '2021',
    items: [
      { name: 'SPARK Silver', work: 'One-Hand Measuring Ruler' },
      { name: 'SPARK Silver', work: 'Shockproof & Cushioning Goblet Package' },
      { name: 'SPARK Bronze', work: 'Easy-Disassembly Mask' },
      { name: 'Pentawards Bronze', work: 'DELICATE RICE LIQUOR' },
      { name: 'EPDA Honorable Mention', work: 'Easy-Disassembly Mask' },
      { name: '湖南工业大学研究生国家奖学金', work: '' },
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12">
          {awardsByYear.map((a, i) => (
            <motion.div
              key={a.year}
              className="p-5 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              initial={init} whileInView="visible" variants={variants} custom={i + 2} viewport={{ once: true }}
              whileHover={{ borderColor: 'rgba(139,92,246,0.2)', background: 'rgba(139,92,246,0.02)' }}
            >
              <p className="font-mono text-[0.55rem] tracking-[0.2em] mb-5 text-purple-400/70">{a.year}</p>
              <div className="space-y-3.5">
                {a.items.map((item) => {
                  const logoKey = getAwardLogoKey(item.name);
                  const logo = logoKey ? awardLogos[logoKey] : null;
                  return (
                    <div key={item.name + item.work} className="flex items-start gap-3">
                      {logo && <LogoBadge logo={logo} />}
                      {!logo && <div className="w-8 shrink-0" />}
                      <div className="min-w-0">
                        <p className="text-white/75 text-xs font-semibold leading-snug">{item.name}</p>
                        {item.work && (
                          <p className="text-white/20 text-[0.6rem] italic mt-0.5 truncate">{item.work}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
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
