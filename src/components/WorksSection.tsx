import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  reducedMotion: boolean;
}

const works = [
  {
    title: 'One Hand',
    titleZh: '单手测量尺',
    tags: ['Industrial Design', '2021'],
    desc: 'Spark Silver Award · Core77 Winner · EPDA Top Design. Ergonomic measuring tool.',
  },
  {
    title: 'Etiquette of Pottery',
    titleZh: '陶礼',
    tags: ['Packaging Design', '2022'],
    desc: 'Pentawards Finalist. Ceramic ritual language through modern packaging.',
  },
  {
    title: 'Reuse',
    titleZh: '可持续展示包装',
    tags: ['Sustainable Design', '2021'],
    desc: 'Spark Finalist · K-DESIGN Finalist. Circular packaging innovation.',
  },
  {
    title: 'Focus',
    titleZh: '专注力工具',
    tags: ['Product Design', '2022'],
    desc: 'Spark Finalist. Minimalist attention-management tool.',
  },
];

const papers = [
  {
    title: 'Bio-Derived Metamaterials',
    journal: 'Biomimetics · SCIE Q1',
    year: '2025',
    tag: 'Q1',
  },
  {
    title: 'Blue Jiaxie Pattern Design',
    journal: 'Results in Engineering · EI IF 7.9',
    year: '2025',
    tag: 'EI',
  },
  {
    title: 'AIGC-Aided Design Methodology',
    journal: 'CSSCI Chinese Core Journal',
    year: '2025',
    tag: 'CSSCI',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const WorksSection: FC<Props> = ({ reducedMotion }) => {
  const init = reducedMotion ? 'visible' : 'hidden';

  return (
    <div className="relative bg-black">
      {/* ===== Design Works ===== */}
      <section id="works" className="relative py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="font-mono text-[0.6rem] tracking-[0.2em] mb-6 text-center"
            style={{ color: 'rgba(255,255,255,0.2)' }}
            initial={init} whileInView="visible" variants={cardVariants} viewport={{ once: true }}
          >
            SELECTED WORKS
          </motion.p>
          <motion.h2
            className="font-display text-white mb-16 leading-none text-center"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}
            initial={init} whileInView="visible" variants={cardVariants} custom={1} viewport={{ once: true }}
          >
            Design Works
            <span className="block text-sm font-normal italic mt-1" style={{ fontFamily: 'Inter', opacity: 0.25, fontWeight: 300 }}>
              设计作品
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
            {works.map((w, i) => (
              <motion.div
                key={w.title}
                className="group p-6 rounded-2xl cursor-pointer transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                initial={init} whileInView="visible" variants={cardVariants} custom={i + 2} viewport={{ once: true }}
                whileHover={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(139,92,246,0.25)' }}
              >
                {/* Placeholder image */}
                <div
                  className="aspect-[16/10] rounded-lg mb-5 flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <span className="font-mono text-[0.55rem] tracking-[0.2em] opacity-10">WORK IMAGE</span>
                </div>
                <div className="flex gap-2 mb-3">
                  {w.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-full font-mono text-[0.55rem] tracking-[0.1em]"
                      style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.45)' }}>
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
        </div>
      </section>

      {/* ===== Research ===== */}
      <section id="research" className="relative py-24 lg:py-32 px-6" style={{ background: '#050508' }}>
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="font-mono text-[0.6rem] tracking-[0.2em] mb-6 text-center"
            style={{ color: 'rgba(255,255,255,0.2)' }}
            initial={init} whileInView="visible" variants={cardVariants} viewport={{ once: true }}
          >
            PUBLICATIONS
          </motion.p>
          <motion.h2
            className="font-display text-white mb-16 leading-none text-center"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}
            initial={init} whileInView="visible" variants={cardVariants} custom={1} viewport={{ once: true }}
          >
            Research
            <span className="block text-sm font-normal italic mt-1" style={{ fontFamily: 'Inter', opacity: 0.25, fontWeight: 300 }}>
              学术研究
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
            {papers.map((p, i) => (
              <motion.div
                key={p.title}
                className="p-5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                initial={init} whileInView="visible" variants={cardVariants} custom={i + 2} viewport={{ once: true }}
                whileHover={{ borderColor: 'rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.03)' }}
              >
                <span
                  className="inline-block px-2 py-0.5 rounded-full font-mono text-[0.5rem] tracking-[0.15em] mb-3"
                  style={{ background: 'rgba(139,92,246,0.15)', color: '#a78bfa' }}
                >
                  {p.tag}
                </span>
                <h4 className="text-white/80 text-sm font-semibold leading-snug mb-2">{p.title}</h4>
                <p className="text-white/25 text-xs">{p.journal}</p>
                <p className="text-white/12 text-[0.6rem] font-mono mt-2">{p.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="relative py-24 lg:py-32 px-6" style={{ background: '#0a0a0f' }}>
        <div className="max-w-3xl mx-auto">
          <motion.p
            className="font-mono text-[0.6rem] tracking-[0.2em] mb-6 text-center"
            style={{ color: 'rgba(255,255,255,0.2)' }}
            initial={init} whileInView="visible" variants={cardVariants} viewport={{ once: true }}
          >
            ABOUT
          </motion.p>
          <motion.h2
            className="font-display text-white mb-8 leading-none text-center"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700 }}
            initial={init} whileInView="visible" variants={cardVariants} custom={1} viewport={{ once: true }}
          >
            Wu Fan
            <span className="block text-sm font-normal italic mt-1" style={{ fontFamily: 'Inter', opacity: 0.25, fontWeight: 300 }}>
              吴凡
            </span>
          </motion.h2>
          <motion.div
            className="space-y-4 text-white/35 text-sm leading-relaxed"
            initial={init} whileInView="visible" variants={cardVariants} custom={2} viewport={{ once: true }}
          >
            <p>
              Ph.D. Candidate in Design at <strong className="text-white/70">Hunan University of Technology</strong>.
              Previously faculty at <strong className="text-white/70">Guangzhou Software College</strong> (2022–2026).
            </p>
            <p className="text-white/18 text-xs">
              湖南工业大学设计学博士研究生。曾任广州软件学院教师（2022–2026）。
            </p>
            <p>
              Published 15+ papers in SCIE Q1, EI, and CSSCI journals.
              19 international design awards including IF Winner, Core77 Winner, Spark Silver.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="relative py-24 lg:py-32 px-6 border-t border-white/5">
        <div className="max-w-md mx-auto text-center">
          <motion.p
            className="font-mono text-[0.6rem] tracking-[0.2em] mb-6"
            style={{ color: 'rgba(255,255,255,0.2)' }}
            initial={init} whileInView="visible" variants={cardVariants} viewport={{ once: true }}
          >
            GET IN TOUCH
          </motion.p>
          <motion.h2
            className="font-display text-white mb-10 leading-none"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700 }}
            initial={init} whileInView="visible" variants={cardVariants} custom={1} viewport={{ once: true }}
          >
            Let's connect
            <span className="block text-sm font-normal italic mt-1" style={{ fontFamily: 'Inter', opacity: 0.25, fontWeight: 300 }}>
              联系方式
            </span>
          </motion.h2>

          <motion.div
            className="p-8 rounded-2xl space-y-4 text-sm"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
            initial={init} whileInView="visible" variants={cardVariants} custom={2} viewport={{ once: true }}
          >
            {[
              { label: 'Email', value: '784199880@qq.com', href: 'mailto:784199880@qq.com' },
              { label: 'WeChat', value: 'kk784199880' },
              { label: 'Phone', value: '+86 185-9340-8031' },
              { label: 'Portfolio', value: 'puxiang.com/wuxiaofan', href: 'https://www.puxiang.com/wuxiaofan' },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex justify-center gap-3">
                <span className="font-mono text-[0.6rem] tracking-[0.1em] opacity-20 w-16 text-right">{label}</span>
                {href ? (
                  <a href={href} className="text-white/40 hover:text-purple-400 transition-colors">{value}</a>
                ) : (
                  <span className="text-white/40">{value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-center font-mono text-[0.55rem] tracking-[0.15em] text-white/10">
        © 2025 WU FAN · Personal Playground · Hunan University of Technology
      </footer>
    </div>
  );
};

export default WorksSection;
