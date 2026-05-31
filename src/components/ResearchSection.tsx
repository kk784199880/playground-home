import { useState, useEffect, type FC } from 'react';
import { motion } from 'framer-motion';
import { fetchPublications, type Publication } from '../data/publications';
import enrichment from '../data/enrichment.json';

const enrichmentMap: Record<string, { tag: string; tagColor: string; author: string }> = enrichment;

interface Props {
  reducedMotion: boolean;
}

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Skeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="p-5 rounded-2xl animate-pulse"
        style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
      >
        <div className="flex gap-2 mb-3">
          <div className="h-4 w-20 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }} />
          <div className="h-4 w-10 rounded-full" style={{ background: 'rgba(255,255,255,0.04)' }} />
        </div>
        <div className="h-10 rounded mb-2" style={{ background: 'rgba(255,255,255,0.04)' }} />
        <div className="h-4 w-32 rounded mb-3" style={{ background: 'rgba(255,255,255,0.03)' }} />
        <div className="h-3 w-24 rounded" style={{ background: 'rgba(255,255,255,0.03)' }} />
      </div>
    ))}
  </div>
);

const ResearchSection: FC<Props> = ({ reducedMotion }) => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const init = reducedMotion ? 'visible' : 'hidden';

  useEffect(() => {
    let cancelled = false;
    fetchPublications()
      .then((data) => {
        if (!cancelled) {
          setPublications(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, []);

  const journalArticles = publications.filter((p) => p.type === 'journal-article');
  const otherWorks = publications.filter((p) => p.type !== 'journal-article');

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
          className="font-display text-white mb-3 leading-none text-center"
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
          Live from ORCID · 实时同步
        </motion.p>

        {loading && <Skeleton />}

        {error && (
          <motion.div
            className="text-center py-16"
            initial={init} whileInView="visible" variants={variants} custom={3} viewport={{ once: true }}
          >
            <p className="text-white/20 text-sm mb-4">Unable to load publications</p>
            <button
              onClick={() => { setLoading(true); setError(false); fetchPublications().then(setPublications).catch(() => setError(true)).finally(() => setLoading(false)); }}
              className="px-5 py-2 rounded-full font-mono text-xs tracking-[0.1em] text-white/40 border transition-colors hover:text-white/70"
              style={{ borderColor: 'rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.03)' }}
            >
              Retry
            </button>
          </motion.div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {journalArticles.map((p, i) => {
                const enriched = enrichmentMap[p.doi] || null;
                return (
                  <motion.a
                    key={p.doi || p.title}
                    href={p.url || (p.doi ? `https://doi.org/${p.doi}` : undefined)}
                    {...(!p.url && !p.doi ? { onClick: (e: React.MouseEvent) => e.preventDefault() } : {})}
                    target="_blank"
                    rel="noopener"
                    className="p-5 rounded-2xl flex flex-col group/card transition-colors duration-300"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                    initial={init} whileInView="visible" variants={variants} custom={i + 3} viewport={{ once: true }}
                    whileHover={{ borderColor: 'rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.04)' }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      {enriched && (
                        <span
                          className="inline-block px-2.5 py-0.5 rounded-full font-mono text-[0.5rem] tracking-[0.12em]"
                          style={{ background: 'rgba(139,92,246,0.12)', color: enriched.tagColor }}
                        >
                          {enriched.tag}
                        </span>
                      )}
                      <span className="font-mono text-[0.55rem] text-white/12">{p.year}</span>
                    </div>
                    <h4 className="text-white/80 text-sm font-semibold leading-snug mb-1.5 group-hover/card:text-white/95 transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-white/35 text-xs mb-3">{p.journal}</p>
                    <div className="mt-auto flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 10 }}>
                      <span className="text-white/12 text-[0.55rem] font-mono">
                        {enriched?.author || 'Author'}
                      </span>
                      {p.doi && (
                        <span className="text-white/08 text-[0.5rem] font-mono tracking-[0.06em] opacity-0 group-hover/card:opacity-100 transition-opacity">
                          DOI
                        </span>
                      )}
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {otherWorks.length > 0 && (
              <div className="mt-8">
                <p className="text-white/08 text-[0.55rem] font-mono tracking-[0.1em] mb-3 text-center">
                  Other Works
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {otherWorks.map((p) => (
                    <span
                      key={p.title}
                      className="px-4 py-2 rounded-full text-xs text-white/25"
                      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
                    >
                      {p.title}
                      <span className="ml-2 text-white/10 text-[0.6rem]">{p.year}</span>
                    </span>
                  ))}
                </div>
              </div>
            )}

            <motion.div
              className="text-center mt-12"
              initial={init} whileInView="visible" variants={variants} custom={journalArticles.length + 4} viewport={{ once: true }}
            >
              <a
                href="https://orcid.org/0009-0005-7035-5696"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 text-white/20 text-xs tracking-[0.1em] hover:text-purple-400 transition-colors pb-1"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
              >
                View Full Profile on ORCID
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M1 11L11 1M11 1H4M11 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[0.55em] opacity-40">ORCID: 0009-0005-7035-5696</span>
              </a>
            </motion.div>

            <motion.p
              className="text-center text-white/06 text-[0.5rem] font-mono mt-6 tracking-[0.08em]"
              initial={init} whileInView="visible" variants={variants} custom={journalArticles.length + 5} viewport={{ once: true }}
            >
              {journalArticles.length} journal articles · data fetched live from ORCID API
            </motion.p>
          </>
        )}
      </div>
    </section>
  );
};

export default ResearchSection;
