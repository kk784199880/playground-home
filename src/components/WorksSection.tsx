import { type FC } from 'react';
import { motion } from 'framer-motion';
import FeaturedWorksCarousel from './FeaturedWorksCarousel';
import works from '../data/works';

interface Props {
  reducedMotion: boolean;
}

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
        {/* Section header */}
        <motion.p
          className="font-mono text-[0.6rem] tracking-[0.2em] mb-6 text-center"
          style={{ color: 'rgba(255,255,255,0.18)' }}
          initial={init} whileInView="visible" variants={variants} viewport={{ once: true }}
        >
          SELECTED WORKS
        </motion.p>
        <motion.h2
          className="font-display text-white mb-14 leading-none text-center"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
          initial={init} whileInView="visible" variants={variants} custom={1} viewport={{ once: true }}
        >
          Design Works
          <span className="block text-sm font-normal italic mt-1 opacity-25" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
            精选设计作品 / Featured Projects
          </span>
        </motion.h2>

        {/* Featured Works Carousel */}
        <motion.div
          initial={init} whileInView="visible" variants={variants} custom={2} viewport={{ once: true }}
        >
          <FeaturedWorksCarousel works={works} reducedMotion={reducedMotion} />
        </motion.div>

        {/* Portfolio link */}
        <motion.div
          className="text-center mt-12"
          initial={init} whileInView="visible" variants={variants} custom={3} viewport={{ once: true }}
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
