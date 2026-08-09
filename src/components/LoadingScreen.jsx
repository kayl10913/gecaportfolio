import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { siteLogo } from '../assets/photos';

export default function LoadingScreen({ onComplete }) {
  const done = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!done.current) {
        done.current = true;
        onComplete?.();
      }
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative mb-8 flex h-20 w-20 items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-gold/30 border-t-gold"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />
        <img src={siteLogo} alt="" className="h-12 w-12 rounded-full object-contain" />
      </div>
      <p className="font-heading text-xl font-semibold tracking-wide text-white">Angelica D. Araño</p>
      <p className="mt-2 text-sm text-slate-400">Loading portfolio…</p>
    </motion.div>
  );
}
