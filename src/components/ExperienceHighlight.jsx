import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { experienceHighlight, experiences } from '../data';
import LazyImage from './LazyImage';
import ExperienceModal from './ExperienceModal';
import { scrollToSection } from '../utils/animations';

export default function ExperienceHighlight() {
  const [selected, setSelected] = useState(null);
  const newsIntern = experiences.find((exp) => exp.id === 1) ?? experienceHighlight;

  return (
    <section id="experience" className="section-padding bg-navy">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="overflow-hidden rounded-2xl bg-navy shadow-2xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-8 p-8 lg:grid-cols-12 lg:gap-6 lg:p-10">
            <div className="lg:col-span-3">
              <p className="label-caps text-gold">Experience Highlight</p>
              <h2 className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
                {experienceHighlight.title}
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-xs font-bold text-gold">
                  BC
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{experienceHighlight.company}</p>
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    {experienceHighlight.period}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <ul className="space-y-2 text-sm text-slate-200">
                {experienceHighlight.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-gold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => setSelected(newsIntern)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold transition hover:gap-3"
                >
                  View Photos & Details
                  <ArrowRight size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('experience-more')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-300 transition hover:text-white"
                >
                  See More Experience
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 lg:col-span-5">
              {experienceHighlight.workPhotos.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={`overflow-hidden rounded-xl text-left ${i === 0 ? 'col-span-2' : ''}`}
                  onClick={() => setSelected(newsIntern)}
                >
                  <LazyImage
                    src={src}
                    alt={`Work photo ${i + 1}`}
                    className={`w-full object-cover ${
                      i === 0 ? 'aspect-[16/9] sm:h-36 sm:aspect-auto' : 'aspect-square sm:h-32 sm:aspect-auto'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <ExperienceModal experience={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
