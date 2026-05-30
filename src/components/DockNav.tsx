import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  reducedMotion: boolean;
}

const links = [
  { label: 'Works', href: '#works' },
  { label: 'Research', href: '#research' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const DockNav: FC<Props> = ({ reducedMotion }) => {
  const entrance = reducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 24, scale: 0.95 };

  return (
    <div
      className="fixed z-50"
      style={{
        left: '50%',
        bottom: '28px',
        transform: 'translateX(-50%)',
      }}
    >
      <motion.nav
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
        style={{
          background: 'rgba(20, 20, 26, 0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.07)',
          boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
        }}
        initial={entrance}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          delay: 3.2,
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
      {/* Left badge */}
      <span
        className="px-3 py-1 rounded-full font-mono tracking-[0.12em] text-white/25"
        style={{
          fontSize: '0.6rem',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        WUFAN
      </span>

      {/* Nav links */}
      {links.map((link) => (
        <motion.a
          key={link.label}
          href={link.href}
          className="relative px-3.5 py-1 rounded-full font-mono tracking-[0.1em] transition-colors"
          style={{
            fontSize: '0.6rem',
            color: 'rgba(255,255,255,0.38)',
          }}
          whileHover={{
            color: '#fff',
            backgroundColor: 'rgba(255,255,255,0.06)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          {link.label}
        </motion.a>
      ))}

      {/* Right CTA button */}
      <motion.a
        href="#contact"
        className="px-3.5 py-1 rounded-full font-mono tracking-[0.1em]"
        style={{
          fontSize: '0.6rem',
          background: 'rgba(139,92,246,0.28)',
          color: '#c4b5fd',
          border: '1px solid rgba(139,92,246,0.25)',
        }}
        whileHover={{
          background: 'rgba(139,92,246,0.45)',
          color: '#e9d5ff',
          border: '1px solid rgba(139,92,246,0.5)',
          scale: 1.03,
        }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Me
      </motion.a>
      </motion.nav>
    </div>
  );
};

export default DockNav;
