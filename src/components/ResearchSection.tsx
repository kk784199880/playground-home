import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  reducedMotion: boolean;
}

const papers = [
  {
    title: 'Chaozhou Woodcarving: Grounded Theory & Biomechanics',
    titleZh: '基于扎根理论与生物力学的潮州木雕研究',
    journal: 'PLOS ONE',
    tag: 'SCI · JCR Q2',
    year: '2026',
    tagColor: '#a78bfa',
    author: 'Corresponding Author',
  },
  {
    title: 'Bio-Derived Metamaterials: Hierarchical Biomimetics Evaluation',
    titleZh: '生物衍生超材料：潮州木雕跨尺度评估系统',
    journal: 'Biomimetics',
    tag: 'SCI · JCR Q1',
    year: '2025',
    tagColor: '#a78bfa',
    author: 'First Author',
  },
  {
    title: 'Blue Jiaxie Pattern: Extension Semantics & Fuzzy Evaluation',
    titleZh: '蓝夹缬纹样创新设计：可拓语义与模糊评价',
    journal: 'Results in Engineering',
    tag: 'EI · JCR Q2',
    year: '2025',
    tagColor: '#a78bfa',
    author: 'First Author',
  },
  {
    title: '纸质家具设计评价：感性工学与AHP法',
    titleZh: 'Evaluation of Paper Furniture Design',
    journal: '包装工程',
    tag: 'PKU Core',
    year: '2025',
    tagColor: 'rgba(251,191,36,0.7)',
    author: 'First Author',
  },
  {
    title: '感质理论下的纸质家具设计策略研究',
    titleZh: 'Paper Furniture Design Strategy Under Qualia Theory',
    journal: '家具与室内装饰',
    tag: 'PKU Core',
    year: '2025',
    tagColor: 'rgba(251,191,36,0.7)',
    author: 'First Author',
  },
  {
    title: 'AIGC协同的医废物流机器人设计策略',
    titleZh: 'AIGC-Aided Medical Waste Logistics Robot Design',
    journal: '工业工程设计',
    tag: 'CSSCI-E',
    year: '2025',
    tagColor: 'rgba(34,211,238,0.6)',
    author: 'First Author',
  },
];

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
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
          className="font-display text-white mb-5 leading-none text-center"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
          initial={init} whileInView="visible" variants={variants} custom={1} viewport={{ once: true }}
        >
          Research
          <span className="block text-sm font-normal italic mt-1 opacity-25" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
            学术研究
          </span>
        </motion.h2>
        <motion.p
          className="text-center text-white/10 text-[0.6rem] font-mono tracking-[0.12em] mb-14"
          initial={init} whileInView="visible" variants={variants} custom={2} viewport={{ once: true }}
        >
          北大核心及以上 · PKU Core & Above
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {papers.map((p, i) => (
            <motion.div
              key={p.title}
              className="p-5 rounded-2xl flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
              initial={init} whileInView="visible" variants={variants} custom={i + 3} viewport={{ once: true }}
              whileHover={{ borderColor: 'rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.04)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-block px-2.5 py-0.5 rounded-full font-mono text-[0.5rem] tracking-[0.12em]"
                  style={{ background: 'rgba(139,92,246,0.12)', color: p.tagColor }}
                >
                  {p.tag}
                </span>
                <span className="font-mono text-[0.55rem] text-white/12">{p.year}</span>
              </div>
              <h4 className="text-white/80 text-sm font-semibold leading-snug mb-1.5">{p.title}</h4>
              <p className="text-white/35 text-xs mb-3">{p.journal}</p>
              <p className="text-white/12 text-[0.55rem] font-mono mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 10 }}>
                {p.author}
                <span className="block opacity-50">{p.titleZh}</span>
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-white/08 text-[0.55rem] font-mono mt-10 tracking-[0.1em]"
          initial={init} whileInView="visible" variants={variants} custom={9} viewport={{ once: true }}
        >
          12 papers total · 6 selected above PKU Core threshold
        </motion.p>
      </div>
    </section>
  );
};

export default ResearchSection;
