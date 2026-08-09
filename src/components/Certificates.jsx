import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { certificates, certificateFilters } from '../data';
import SectionHeading from './SectionHeading';
import LazyImage from './LazyImage';

export default function Certificates() {
  const [filter, setFilter] = useState('All');
  const [preview, setPreview] = useState(null);

  const items =
    filter === 'All' ? certificates : certificates.filter((c) => c.type === filter);

  useEffect(() => {
    if (!preview) return undefined;
    const onKey = (e) => e.key === 'Escape' && setPreview(null);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [preview]);

  return (
    <section id="certificates" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Recognition"
          title="Achievements"
          subtitle="Honors and awards from academics and film."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {certificateFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === f
                  ? 'bg-gold text-navy'
                  : 'bg-slate-800 text-slate-300'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cert, i) => (
            <motion.button
              key={cert.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setPreview(cert)}
              className="glass-card overflow-hidden text-left"
            >
              <div className="bg-slate-950 p-3">
                <LazyImage
                  src={cert.image}
                  alt={cert.title}
                  className="aspect-[4/3] w-full object-contain transition duration-500 hover:scale-[1.02]"
                />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold uppercase text-gold">{cert.type}</span>
                <h3 className="mt-1 font-heading font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-slate-400">{cert.date}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="award-preview-title"
          >
            <button
              type="button"
              className="absolute inset-0 bg-navy/80 backdrop-blur-sm"
              onClick={() => setPreview(null)}
              aria-label="Close preview"
            />
            <motion.div
              className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-slate-900 shadow-2xl"
              initial={{ scale: 0.95, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 16 }}
            >
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-slate-800 p-2 shadow"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <div className="flex min-h-0 flex-1 items-center justify-center bg-slate-950 p-4">
                <img
                  src={preview.image}
                  alt={preview.title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>

              <div className="shrink-0 border-t border-slate-800 p-5">
                <h3
                  id="award-preview-title"
                  className="font-heading text-xl font-bold text-white"
                >
                  {preview.title}
                </h3>
                <p className="mt-1 text-sm text-gold">
                  {preview.type} · {preview.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
