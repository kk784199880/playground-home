import { type FC } from 'react';
import { motion } from 'framer-motion';

interface Props {
  reducedMotion: boolean;
}

const navItems = [
  { label: 'Works', href: '#works' },
  { label: 'Research', href: '#research' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const DockNav: FC<Props> = ({ reducedMotion }) => {
  const entrance = reducedMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 30, scale: 0.9 };

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      initial={entrance}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 3.5, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        className="flex items-center gap-1 px-3 py-2 rounded-full"
        style={{
          background: 'rgba(18, 18, 24, 0.85)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 0 40px -10px rgba(139,92,246,0.15)',
        }}
      >
        {navItems.map(item => (
          <motion.a
            key={item.label}
            href={item.href}
            className="relative px-5 py-2 text-xs font-mono tracking-[0.12em] rounded-full transition-colors"
            style={{ color: 'rgba(255,255,255,0.45)' }}
            whileHover={{
              color: '#fff',
              backgroundColor: 'rgba(255,255,255,0.06)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default DockNav;
