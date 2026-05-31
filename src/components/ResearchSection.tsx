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
    journal: '包装工程 (北大核心)',
    tag: 'PKU Core',
    year: '2025',
    tagColor: 'rgba(255,255,255,0.4)',
    author: 'First Author',
  },
  {
    title: '感质理论下的纸质家具设计策略研究',
    titleZh: 'Paper Furniture Design Strategy Under Qualia Theory',
    journal: '家具与室内装饰 (北大核心)',
    tag: 'PKU Core',
    year: '2025',
    tagColor: 'rgba(255,255,255,0.4)',
    author: 'First Author',
  },
  {
    title: 'AIGC协同的医废物流机器人设计策略',
    titleZh: 'AIGC-Aided Medical Waste Logistics Robot Design',
    journal: '工业工程设计 (CSSCI扩展版)',
    tag: 'CSSCI-E',
    year: '2025',
    tagColor: 'rgba(255,255,255,0.4)',
    author: 'First Author',
  },
  {
    title: 'Heritage Strategies of Chinese Furniture Artistry',
    titleZh: '可持续设计下中国家具传承策略',
    journal: 'Critical Humanistic Social Theory',
    tag: 'Journal',
    year: '2025',
    tagColor: 'rgba(255,255,255,0.3)',
    author: 'First Author',
  },
  {
    title: 'APP Design for Albinism Family Psychological Therapy',
    titleZh: '基于用户需求的白化病家庭心理治疗APP设计',
    journal: 'Journal of Advances in Engineering and Technology',
    tag: 'Journal',
    year: '2025',
    tagColor: 'rgba(255,255,255,0.3)',
    author: 'First Author',
  },
  {
    title: '岭南客家文化的文创产品设计策略与实践',
    titleZh: 'Cultural Creative Design Strategy of Lingnan Hakka Culture',
    journal: '绿色包装',
    tag: 'Journal',
    year: '2024',
    tagColor: 'rgba(255,255,255,0.3)',
    author: 'First Author',
  },
  {
    title: '感性工学在智慧养老产品设计中的应用分析',
    titleZh: 'Kansei Engineering in Smart Elderly Product Design',
    journal: '上海包装',
    tag: 'Journal',
    year: '2023',
    tagColor: 'rgba(255,255,255,0.3)',
    author: 'First Author',
  },
  {
    title: '医疗废物运输产品设计研究',
    titleZh: 'Medical Waste Transport Product Design',
    journal: '工业设计',
    tag: 'Journal',
    year: '2021',
    tagColor: 'rgba(255,255,255,0.3)',
    author: 'First Author',
  },
  {
    title: 'VR技术的高铁应急操作训练设计研究',
    titleZh: 'VR-Based High-Speed Rail Emergency Training Design',
    journal: '电脑知识与技术',
    tag: 'Journal',
    year: '2021',
    tagColor: 'rgba(255,255,255,0.3)',
    author: 'First Author',
  },
];

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
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
            学术研究 · 12 Papers
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {papers.map((p, i) => (
            <motion.div
              key={p.title}
              className="p-4 rounded-2xl flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
              }}
              initial={init} whileInView="visible" variants={variants} custom={i + 2} viewport={{ once: true }}
              whileHover={{ borderColor: 'rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.04)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block px-2 py-0.5 rounded-full font-mono text-[0.5rem] tracking-[0.12em]"
                  style={{ background: 'rgba(139,92,246,0.12)', color: p.tagColor }}
                >
                  {p.tag}
                </span>
                <span className="font-mono text-[0.55rem] text-white/12">{p.year}</span>
              </div>
              <h4 className="text-white/80 text-xs font-semibold leading-snug mb-1">{p.title}</h4>
              <p className="text-white/35 text-[0.65rem] mb-2">{p.journal}</p>
              <p className="text-white/12 text-[0.55rem] font-mono mt-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 8 }}>
                {p.author}
                <span className="block opacity-50">{p.titleZh}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
