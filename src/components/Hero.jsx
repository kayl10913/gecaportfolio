import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { siteConfig } from '../data';
import { heroBackground } from '../assets/photos';
import { scrollToSection } from '../utils/animations';

export default function Hero() {
  return (
    <div className="relative bg-navy">
      <section
        id="home"
        className="relative min-h-[88vh] overflow-hidden pb-10 pt-28 lg:min-h-[90vh] lg:pb-14"
      >
        <div
          className="absolute inset-0 bg-navy bg-cover bg-right bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent lg:via-navy/50"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy" aria-hidden />

        <div className="relative z-10 mx-auto flex max-w-7xl items-end px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-xl pb-8 lg:pb-16"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="label-caps mb-4">{siteConfig.title}</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {siteConfig.name}
            </h1>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">
              {siteConfig.tagline}
            </p>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-300 sm:text-base">
              {siteConfig.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button type="button" className="btn-hero-primary" onClick={() => scrollToSection('portfolio')}>
                View My Work
              </button>
              <a href={siteConfig.cvUrl} download="Angelica_D_Arano_CV.pdf" className="btn-hero-outline">
                <Download size={16} />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="h-20 sm:h-24 lg:h-28" aria-hidden />
    </div>
  );
}
