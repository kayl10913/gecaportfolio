import { motion } from 'framer-motion';
import { Camera, FolderOpen, Mic, PenLine, Trophy, Video } from 'lucide-react';
import { statistics } from '../data';
import { useInView } from '../hooks/useInView';
import AnimatedNumber from './AnimatedNumber';

const iconMap = {
  article: PenLine,
  folder: FolderOpen,
  mic: Mic,
  camera: Camera,
  video: Video,
  trophy: Trophy,
};

export default function StatsBar() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div className="relative z-30 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-20 mb-10 sm:-mt-24 sm:mb-12 lg:-mt-28 lg:mb-16">
      <motion.div
        ref={ref}
        className="rounded-2xl bg-slate-900 px-2 py-4 shadow-xl ring-1 ring-slate-700 sm:px-4 sm:py-5"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-col divide-y divide-slate-700 lg:flex-row lg:divide-x lg:divide-y-0">
          {statistics.map((stat, i) => {
            const Icon = iconMap[stat.icon] || PenLine;
            return (
              <motion.div
                key={stat.label}
                className="flex flex-1 items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5 sm:py-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Icon className="shrink-0 text-gold" size={28} strokeWidth={1.5} aria-hidden />
                <div className="min-w-0 text-left">
                  <p className="font-display text-3xl font-semibold leading-none text-white sm:text-4xl">
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} active={inView} />
                  </p>
                  <p className="mt-2 text-[9px] font-bold uppercase leading-snug tracking-[0.12em] text-slate-300 sm:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
