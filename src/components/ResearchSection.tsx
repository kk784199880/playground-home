import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  reducedMotion: boolean;
}

const papers = [
  {
    title: 'Bio-Derived Metamaterials',
    titleZh: '生物衍生超材料：跨尺度评估系统',
    journal: 'Biomimetics',
    tag: 'SCIE · Q1',
    year: '2025',
    tagColor: '#a78bfa',
  },
  {
    title: 'Blue Jiaxie Pattern Design',
    titleZh: '蓝夹缬纹样创新设计研究',
    journal: 'Results in Engineering',
    tag: 'EI · IF 7.9',
    year: '2025',
    tagColor: '#a78bfa',
  },
  {
    title: 'AIGC-Aided Design Methodology',
    titleZh: 'AIGC辅助设计方法研究',
    journal: 'CSSCI Chinese Core Journal',
    tag: 'CSSCI',
    year: '2025',
    tagColor: '#a78bfa',
  },
  {
    title: 'Heritage of Chinese Furniture',
    titleZh: '可持续设计下中国家具传承策略',
    journal: 'Critical Humanistic Social Theory',
    tag: 'Journal',
    year: '2024–25',
    tagColor: '#a78bfa',
  },
  {
    title: 'VR Technology in Packaging Education',
    titleZh: 'VR技术在包装设计教育中的应用',
    journal: 'Computer Technology & Education',
    tag: 'Journal',
    year: '2021',
    tagColor: '#a78bfa',
  },
  {
    title: 'More Publications',
    titleZh: '更多学术论文',
    journal: '15+ Papers in SCI / EI / CSSCI',
    tag: '···',
    year: '',
    tagColor: 'rgba(255,255,255,0.3)',
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

const ResearchSection: FC<Props> = ({ reducedMotion }) => {
  const init = reducedMotion ? 'visible' : 'hidden';

  return (
    <section id="research" className="relative py-28 lg:py-36 px-6" style={{ background: '#050508' }}>
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-mono text-[0.6rem] tracking-[0.2em] mb-6 text-center"
          style={{ color: 'rgba(255,255,255,0.18)' }}
          initial={init} whileInView="visible" variants={variants} viewport={{ once: true }}
        >
          RESEARCH & PUBLICATIONS
        </motion.p>
        <motion.h2
          className="font-display text-white mb-16 leading-none text-center"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
          initial={init} whileInView="visible" variants={variants} custom={1} viewport={{ once: true }}
        >
          Research
          <span className="block text-sm font-normal italic mt-1 opacity-25" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
            学术研究
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {papers.map((p, i) => (
            <motion.div
              key={p.title}
              className="p-5 rounded-2xl flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
              initial={init} whileInView="visible" variants={variants} custom={i + 2} viewport={{ once: true }}
              whileHover={{ borderColor: 'rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.04)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full font-mono text-[0.5rem] tracking-[0.12em]"
                  style={{ background: 'rgba(139,92,246,0.12)', color: p.tagColor }}
                >
                  {p.tag}
                </span>
                {p.year && (
                  <span className="font-mono text-[0.55rem] text-white/15">{p.year}</span>
                )}
              </div>
              <h4 className="text-white/80 text-sm font-semibold leading-snug mb-1.5">{p.title}</h4>
              <p className="text-white/40 text-xs mb-3">{p.journal}</p>
              <p className="text-white/15 text-[0.6rem] font-mono mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 10 }}>
                First Author
                <span className="block mt-0.5 opacity-60">{p.titleZh}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
