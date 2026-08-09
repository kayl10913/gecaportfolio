import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import LazyImage from './LazyImage';

export default function ExperienceModal({ experience, onClose }) {
  const [galleryRoot, setGalleryRoot] = useState(null);

  useEffect(() => {
    if (!experience) {
      setGalleryRoot(null);
      return undefined;
    }
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [experience, onClose]);

  return (
    <AnimatePresence>
      {experience && (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="experience-modal-title"
        >
          <button
            type="button"
            className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close modal"
          />
          <motion.div
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-2xl"
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

            <div
              className={`grid min-h-0 flex-1 gap-0 overflow-hidden ${
                experience.photos?.length ? 'md:grid-cols-2' : ''
              }`}
            >
              {experience.photos?.length > 0 && (
                <div
                  ref={setGalleryRoot}
                  className="min-h-0 overflow-y-auto p-4 md:max-h-[90vh]"
                >
                  {galleryRoot && (
                    <div className="grid grid-cols-2 gap-3">
                      {experience.photos.map((src, i) => (
                        <div
                          key={`${experience.id}-${i}`}
                          className={i === 0 ? 'col-span-2' : undefined}
                        >
                          <LazyImage
                            src={src}
                            alt={`${experience.title} photo ${i + 1}`}
                            root={galleryRoot}
                            rootMargin="100px"
                            className={`w-full rounded-xl ${
                              i === 0 ? 'aspect-[16/10]' : 'aspect-square'
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="overflow-y-auto p-6 md:max-h-[90vh] md:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  {experience.period}
                </p>
                <h2
                  id="experience-modal-title"
                  className="mt-1 font-heading text-2xl font-bold text-white"
                >
                  {experience.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-slate-500">{experience.company}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {experience.description}
                </p>

                <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Responsibilities
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-300">
                  {experience.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
