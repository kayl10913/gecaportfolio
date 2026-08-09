import { motion } from 'framer-motion';
import { Camera, Mic, Pen, Video } from 'lucide-react';

const shapes = [
  { size: 120, x: '10%', y: '20%', delay: 0 },
  { size: 80, x: '85%', y: '15%', delay: 0.5 },
  { size: 60, x: '75%', y: '70%', delay: 1 },
  { size: 100, x: '15%', y: '75%', delay: 0.8 },
];

const floatingIcons = [
  { Icon: Mic, x: '88%', y: '40%' },
  { Icon: Camera, x: '8%', y: '45%' },
  { Icon: Pen, x: '92%', y: '78%' },
  { Icon: Video, x: '5%', y: '80%' },
];

export default function ParticleBackground({ variant = 'hero' }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gold/5 dark:from-navy dark:via-navy-light dark:to-gold/10"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        style={{ backgroundSize: '200% 200%' }}
      />

      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-3xl border border-gold/20 bg-white/40 shadow-lg backdrop-blur-sm dark:bg-slate-800/30"
          style={{ width: s.size, height: s.size, left: s.x, top: s.y }}
          animate={{ y: [0, -20, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: s.delay }}
        />
      ))}

      {variant === 'hero' &&
        [...Array(24)].map((_, i) => (
          <motion.span
            key={`p-${i}`}
            className="absolute h-1 w-1 rounded-full bg-gold/40"
            style={{
              left: `${(i * 17) % 100}%`,
              top: `${(i * 23) % 100}%`,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 3 + (i % 5), repeat: Infinity, delay: i * 0.1 }}
          />
        ))}

      {floatingIcons.map(({ Icon, x, y }, i) => (
        <motion.div
          key={`icon-${i}`}
          className="absolute text-gold/30"
          style={{ left: x, top: y }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity }}
        >
          <Icon size={28} strokeWidth={1.5} />
        </motion.div>
      ))}

      <motion.div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-navy/5 blur-3xl dark:bg-gold/5"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
}
