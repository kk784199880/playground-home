import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  reducedMotion: boolean;
}

const works = [
  {
    title: 'One Hand',
    titleZh: '单手测量尺',
    tags: ['Industrial Design', '2021–2022'],
    desc: 'Spark Silver Award · Core77 Award Winner · EPDA Top Design. A one-handed measuring ruler that redefines ergonomic precision.',
    bg: 'linear-gradient(135deg, #1a1a2e, #16213e)',
  },
  {
    title: 'Etiquette of Pottery',
    titleZh: '陶礼',
    tags: ['Packaging Design', '2022'],
    desc: 'Pentawards Finalist. Traditional ceramic ritual language reimagined through modern packaging design.',
    bg: 'linear-gradient(135deg, #1a1a1a, #2d1b2e)',
  },
  {
    title: 'Reuse',
    titleZh: '可持续展示包装',
    tags: ['Sustainable Design', '2021'],
    desc: 'Spark Finalist · K-DESIGN Finalist. Circular packaging innovation for sustainable display systems.',
    bg: 'linear-gradient(135deg, #1a2e1a, #0d2818)',
  },
  {
    title: 'Focus',
    titleZh: '专注力工具',
    tags: ['Product Design', '2022'],
    desc: 'Spark Finalist. A minimalist attention-management tool that reshapes focus through form.',
    bg: 'linear-gradient(135deg, #1a1a2e, #1a1a3e)',
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

const WorksSection: FC<Props> = ({ reducedMotion }) => {
  const init = reducedMotion ? 'visible' : 'hidden';

  return (
    <section id="works" className="relative py-28 lg:py-36 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-mono text-[0.6rem] tracking-[0.2em] mb-6 text-center"
          style={{ color: 'rgba(255,255,255,0.18)' }}
          initial={init} whileInView="visible" variants={variants} viewport={{ once: true }}
        >
          SELECTED WORKS
        </motion.p>
        <motion.h2
          className="font-display text-white mb-16 leading-none text-center"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
          initial={init} whileInView="visible" variants={variants} custom={1} viewport={{ once: true }}
        >
          Design Works
          <span className="block text-sm font-normal italic mt-1 opacity-25" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
            设计作品
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              className="group p-5 rounded-2xl cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
              initial={init} whileInView="visible" variants={variants} custom={i + 2} viewport={{ once: true }}
              whileHover={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(139,92,246,0.25)' }}
            >
              {/* Gradient placeholder image */}
              <div
                className="aspect-[16/10] rounded-lg mb-5 flex items-center justify-center overflow-hidden"
                style={{ background: w.bg }}
              >
                <div className="text-center">
                  <p className="font-display text-white/15 text-xl italic mb-1">{w.title}</p>
                  <p className="font-mono text-[0.5rem] tracking-[0.2em] opacity-8" style={{ color: 'rgba(255,255,255,0.06)' }}>DESIGN WORK</p>
                </div>
              </div>

              <div className="flex gap-2 mb-3 flex-wrap">
                {w.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full font-mono text-[0.55rem] tracking-[0.1em]"
                    style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-white/85 text-base font-semibold mb-1">
                {w.title}
                <span className="ml-2 font-normal opacity-35" style={{ fontSize: '0.75em' }}>{w.titleZh}</span>
              </h3>
              <p className="text-white/25 text-xs leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Portfolio link */}
        <motion.div
          className="text-center mt-12"
          initial={init} whileInView="visible" variants={variants} custom={6} viewport={{ once: true }}
        >
          <a
            href="https://www.puxiang.com/wuxiaofan"
            target="_blank"
            rel="noopener"
            className="text-white/25 text-xs tracking-[0.15em] hover:text-purple-400 transition-colors pb-1"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
          >
            View Full Portfolio on Puxiang →
            <span className="block text-[0.55em] opacity-40 mt-1">查看完整作品集</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;
