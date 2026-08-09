import { motion } from 'framer-motion';
import { siteConfig } from '../data';
import { useHeroPortrait } from '../hooks/useHeroPortrait';
import SkeletonLoader from './SkeletonLoader';

export default function HeroPortrait() {
  const { src, ready } = useHeroPortrait();

  return (
    <motion.div
      className="relative flex justify-center lg:justify-end"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
    >
      {!ready && (
        <SkeletonLoader className="h-[380px] w-64 max-w-full sm:h-[440px] sm:w-72 lg:h-[520px] lg:w-80" />
      )}
      <img
        src={src}
        alt={`Portrait of ${siteConfig.name}`}
        className={`relative z-10 max-h-[400px] w-auto max-w-full object-contain object-bottom drop-shadow-2xl sm:max-h-[460px] lg:max-h-[540px] lg:translate-y-12 ${
          ready ? 'opacity-100' : 'absolute opacity-0'
        }`}
      />
    </motion.div>
  );
}
