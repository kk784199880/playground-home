import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  reducedMotion: boolean;
}

const contactItems = [
  { label: 'Name', value: 'Wu Fan · 吴凡' },
  { label: 'Email', value: '784199880@qq.com', href: 'mailto:784199880@qq.com' },
  { label: 'WeChat', value: 'kk784199880' },
  { label: 'Phone', value: '+86 185-9340-8031' },
  { label: 'Portfolio', value: 'puxiang.com/wuxiaofan', href: 'https://www.puxiang.com/wuxiaofan' },
];

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const ContactSection: FC<Props> = ({ reducedMotion }) => {
  const init = reducedMotion ? 'visible' : 'hidden';

  return (
    <section id="contact" className="relative py-28 lg:py-36 px-6 border-t border-white/5 bg-black">
      <div className="max-w-md mx-auto text-center">
        <motion.p
          className="font-mono text-[0.6rem] tracking-[0.2em] mb-6"
          style={{ color: 'rgba(255,255,255,0.18)' }}
          initial={init} whileInView="visible" variants={variants} viewport={{ once: true }}
        >
          GET IN TOUCH
        </motion.p>
        <motion.h2
          className="font-display text-white mb-10 leading-none"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.02em' }}
          initial={init} whileInView="visible" variants={variants} custom={1} viewport={{ once: true }}
        >
          Let's connect
          <span className="block text-sm font-normal italic mt-1 opacity-25" style={{ fontFamily: 'Inter', fontWeight: 300 }}>
            联系方式
          </span>
        </motion.h2>

        <motion.div
          className="p-8 rounded-2xl"
          style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}
          initial={init} whileInView="visible" variants={variants} custom={2} viewport={{ once: true }}
        >
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-7" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <img
              src="/assets/portrait-contact.jpg"
              alt="Wu Fan"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-3.5 text-sm">
            {contactItems.map(({ label, value, href }) => (
              <div key={label} className="flex justify-center gap-3">
                <span className="font-mono text-[0.6rem] tracking-[0.1em] opacity-15 w-16 text-right pt-0.5">{label}</span>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener' : undefined}
                    className="text-white/40 hover:text-purple-400 transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-white/40">{value}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
