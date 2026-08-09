import { motion } from 'framer-motion';
import { siteVideos } from '../assets/media';
import SectionHeading from './SectionHeading';
import VideoPlayer from './VideoPlayer';

export default function FeaturedVideo() {
  return (
    <section id="video" className="section-padding bg-navy-light/40">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Media"
          title="Broadcast & Voice-over Work"
          subtitle="News hosting, reporting, and narration reels from Balisong Channel and academic productions."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {siteVideos.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl bg-slate-900 p-4 shadow-md ring-1 ring-slate-700 sm:p-5"
            >
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gold">
                    {item.category}
                  </p>
                  <h3 className="font-heading text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400">{item.subtitle}</p>
                </div>
              </div>
              <VideoPlayer src={item.src} title={item.title} />
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
