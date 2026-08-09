import { motion } from 'framer-motion';
import { statistics } from '../data';
import { useInView } from '../hooks/useInView';
import AnimatedNumber from './AnimatedNumber';

function StatCard({ stat, index }) {
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-card flex flex-col items-center p-8 text-center"
    >
      <p className="font-heading text-4xl font-bold text-navy dark:text-white sm:text-5xl">
        <AnimatedNumber value={stat.value} suffix={stat.suffix} active={inView} />
      </p>
      <p className="mt-2 text-sm font-medium text-slate-600 dark:text-slate-300">{stat.label}</p>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section id="stats" className="section-padding bg-navy text-white">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          className="mb-12 text-center font-heading text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Impact in <span className="text-gold">Numbers</span>
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {statistics.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
