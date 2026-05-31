import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  reducedMotion: boolean;
}

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const AboutSection: FC<Props> = ({ reducedMotion }) => {
  const init = reducedMotion ? 'visible' : 'hidden';

  return (
    <section id="about" className="relative py-28 lg:py-36 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="font-mono text-[0.6rem] tracking-[0.2em] mb-6 text-center"
          style={{ color: 'rgba(255,255,255,0.18)' }}
          initial={init} whileInView="visible" variants={variants} viewport={{ once: true }}
        >
          ABOUT
        </motion.p>
        <motion.h2
          className="font-display text-white mb-8 leading-none text-center"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
          initial={init} whileInView="visible" variants={variants} custom={1} viewport={{ once: true }}
        >
          Wu Fan
          <span className="block text-sm font-normal italic mt-1 opacity-25" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
            吴凡
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Portrait */}
          <motion.div
            className="lg:col-span-2"
            initial={init} whileInView="visible" variants={variants} custom={2} viewport={{ once: true }}
          >
            <div className="aspect-[3/4] max-w-sm mx-auto rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <img
                src="/assets/portrait-main.png"
                alt="Wu Fan"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            className="lg:col-span-3 space-y-4 text-sm md:text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.45)' }}
            initial={init} whileInView="visible" variants={variants} custom={3} viewport={{ once: true }}
          >
            <p>
              Wu Fan (b.1997) is a designer and Ph.D. candidate in Design at{' '}
              <strong className="text-white/75">Hunan University of Technology</strong>. His work sits at the intersection of{' '}
              <strong className="text-white/75">industrial design, sustainable innovation, and digital preservation of cultural heritage</strong>.
            </p>
            <p className="text-white/20 text-xs leading-relaxed">
              吴凡，1997年生，湖南工业大学设计学博士研究生。在工业设计、可持续创新与文化遗产数字化保护的交叉领域中开展研究与实践。
            </p>
            <p>
              He earned his B.A. (2019) and M.F.A. (2022) from HUT, then joined{' '}
              <strong className="text-white/75">Guangzhou Software College</strong> as a faculty member (2022–2026).
              In September 2026, he returned to HUT to pursue a <strong className="text-white/75">full-time Ph.D. in Design</strong>.
            </p>
            <p className="text-white/20 text-xs leading-relaxed">
              2019年学士、2022年MFA硕士毕业于湖南工业大学。2022年6月入职广州软件学院任教，2026年7月离职，同年9月入学湖南工业大学攻读全日制设计学博士学位。
            </p>
            <p>
              He has published <strong className="text-white/75">12 papers</strong> in journals including{' '}
              <em>PLOS ONE</em> (SCI JCR Q2), <em>Biomimetics</em> (SCI JCR Q1), and <em>Results in Engineering</em> (EI, JCR Q2).
              His research spans grounded theory, biomimetic metamaterials, AIGC-aided design, and the modern transformation of traditional crafts.
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="text-center py-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="font-display text-2xl font-bold text-white">12</p>
                <p className="text-[0.55rem] tracking-[0.12em] mt-1 text-white/25">Publications</p>
              </div>
              <div className="text-center py-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="font-display text-2xl font-bold text-white">20</p>
                <p className="text-[0.55rem] tracking-[0.12em] mt-1 text-white/25">Intl. Awards</p>
              </div>
              <div className="text-center py-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="font-display text-2xl font-bold text-white">6</p>
                <p className="text-[0.55rem] tracking-[0.12em] mt-1 text-white/25">Patents</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
