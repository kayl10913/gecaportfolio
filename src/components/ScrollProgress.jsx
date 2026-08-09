import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

export default function ScrollProgress() {
  const { scrollY } = useScrollPosition(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    setProgress(docHeight > 0 ? Math.min((scrollY / docHeight) * 100, 100) : 0);
  }, [scrollY]);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-gold to-gold-light"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  );
}
