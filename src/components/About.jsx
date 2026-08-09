import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Heart, Shield } from 'lucide-react';
import { aboutContent, siteConfig } from '../data';
import { profilePic } from '../assets/photos';
import LazyImage from './LazyImage';

const factIcons = {
  graduation: GraduationCap,
  map: MapPin,
  heart: Heart,
  shield: Shield,
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-navy pt-8 sm:pt-10 lg:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <LazyImage
              src={profilePic}
              alt={`Professional photo of ${siteConfig.name}`}
              className="aspect-[3/4] w-full object-cover object-top sm:aspect-[4/5]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center lg:min-h-[min(100%,420px)]"
          >
            <p className="label-caps">About Me</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.5rem]">
              {aboutContent.headline}
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              {aboutContent.bio.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {aboutContent.quickFacts.map((fact) => {
                const Icon = factIcons[fact.icon] || Heart;
                return (
                  <div key={fact.label} className="flex flex-col items-center text-center">
                    <Icon className="mb-2 text-gold" size={22} strokeWidth={1.5} />
                    <p className="text-[11px] font-medium leading-snug text-slate-300">{fact.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
