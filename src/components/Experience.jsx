import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Images } from 'lucide-react';
import { experiences } from '../data';
import SectionHeading from './SectionHeading';
import ExperienceModal from './ExperienceModal';
import { fadeUp } from '../utils/animations';

export default function Experience() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="experience-more" className="section-padding bg-navy-light/40">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Career"
          title="Experience"
          subtitle="Click a role to view details and photos from the field, studio, and production sets."
        />

        <div className="relative pl-8 md:pl-0">
          <div
            className="absolute left-3 top-0 h-full w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent md:left-1/2 md:-translate-x-px"
            aria-hidden
          />

          <ul className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.li
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative md:flex md:w-1/2 ${
                  index % 2 === 0
                    ? 'md:mr-auto md:pr-12 md:text-right'
                    : 'md:ml-auto md:pl-12 md:pt-0'
                }`}
              >
                <span
                  className={`absolute top-6 h-3 w-3 rounded-full bg-gold ring-4 ring-gold/20 ${
                    index % 2 === 0
                      ? 'left-3 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2'
                      : 'left-3 -translate-x-1/2 md:left-0'
                  }`}
                  aria-hidden
                />

                <motion.button
                  type="button"
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelected(exp)}
                  className="glass-card relative z-10 w-full cursor-pointer p-6 text-left transition hover:ring-2 hover:ring-gold/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold md:ml-0"
                >
                  <div
                    className={`mb-2 flex items-center gap-2 text-gold ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}
                  >
                    <Briefcase size={18} />
                    <span className="text-xs font-semibold uppercase tracking-wider">{exp.period}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-sm font-medium text-slate-400">{exp.company}</p>
                  <p className="mt-3 line-clamp-2 text-sm text-slate-300">{exp.description}</p>
                  {exp.photos?.length > 0 && (
                    <p
                      className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold ${
                        index % 2 === 0 ? 'md:ml-auto' : ''
                      }`}
                    >
                      <Images size={14} />
                      View {exp.photos.length} photos
                    </p>
                  )}
                </motion.button>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <ExperienceModal experience={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
