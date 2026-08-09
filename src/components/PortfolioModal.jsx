import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import LazyImage from './LazyImage';
import VideoPlayer from './VideoPlayer';

export default function PortfolioModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  if (!project) return null;

  const hasGallery = project.gallery?.length > 0;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="portfolio-modal-title"
      >
        <button
          type="button"
          className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
          onClick={onClose}
          aria-label="Close modal"
        />
        <motion.div
          className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-slate-900 shadow-2xl"
          initial={{ scale: 0.95, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 20 }}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full bg-slate-800 p-2 shadow"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <div className={`grid gap-0 ${project.video || hasGallery ? 'md:grid-cols-2' : ''}`}>
            {(project.video || hasGallery) && (
              <div className="space-y-2 p-4 md:max-h-[90vh] md:overflow-y-auto">
                {project.video && (
                  <VideoPlayer src={project.video} title={project.title} className="shadow-none ring-0" />
                )}
                {hasGallery &&
                  project.gallery.map((src, i) => (
                    <LazyImage
                      key={src}
                      src={src}
                      alt={`${project.title} gallery ${i + 1}`}
                      className="w-full rounded-xl object-cover"
                    />
                  ))}
              </div>
            )}
            <div className="p-6 md:p-8">
              <span className="text-xs font-semibold uppercase text-gold">{project.category}</span>
              <h2
                id="portfolio-modal-title"
                className="mt-1 font-heading text-2xl font-bold text-white"
              >
                {project.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {project.details}
              </p>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Tools
              </h3>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
