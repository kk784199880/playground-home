import { useState, useEffect, type FC } from 'react';
import { motion } from 'framer-motion';
import { fetchPublications } from '../data/publications';
import about from '../data/about.json';

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
  const [pubCount, setPubCount] = useState(about.stats.publications);
  const init = reducedMotion ? 'visible' : 'hidden';

  useEffect(() => {
    fetchPublications().then((pubs) => setPubCount(pubs.length)).catch(() => {});
  }, []);

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
          {about.name}
          <span className="block text-sm font-normal italic mt-1 opacity-25" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
            {about.nameZh}
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
                alt={about.name}
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
              {about.bio.en[0]}
            </p>
            <p className="text-white/20 text-xs leading-relaxed">
              {about.bio.zh[0]}
            </p>
            <p>
              {about.bio.en[1]}
            </p>
            <p className="text-white/20 text-xs leading-relaxed">
              {about.bio.zh[1]}
            </p>
            <p>
              He has published <strong className="text-white/75">{pubCount} papers</strong> in journals including{' '}
              <em>PLOS ONE</em> (SCI JCR Q2), <em>Biomimetics</em> (SCI JCR Q1), and <em>Results in Engineering</em> (EI, JCR Q2).
              His research spans grounded theory, biomimetic metamaterials, AIGC-aided design, and the modern transformation of traditional crafts.
            </p>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3 pt-3">
              <div className="text-center py-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="font-display text-2xl font-bold text-white">{pubCount}</p>
                <p className="text-[0.55rem] tracking-[0.12em] mt-1 text-white/25">Publications</p>
              </div>
              <div className="text-center py-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="font-display text-2xl font-bold text-white">{about.stats.awards}</p>
                <p className="text-[0.55rem] tracking-[0.12em] mt-1 text-white/25">Intl. Awards</p>
              </div>
              <div className="text-center py-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <p className="font-display text-2xl font-bold text-white">{about.stats.patents}</p>
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
