import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { siteConfig } from '../data';
import SectionHeading from './SectionHeading';

export default function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Resume"
          title="Professional CV"
          subtitle="Download a copy or preview the summary below."
        />

        <motion.div
          className="glass-card overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="border-b border-slate-700 bg-gradient-to-r from-navy to-navy-light p-8 text-white">
            <h3 className="font-heading text-2xl font-bold">{siteConfig.name}</h3>
            <p className="text-gold">{siteConfig.tagline.replace(/\|/g, ' · ')}</p>
            <p className="mt-4 max-w-xl text-sm text-slate-300">{siteConfig.intro}</p>
          </div>

          <div className="grid gap-6 p-8 sm:grid-cols-2">
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-gold">
                Core Skills
              </h4>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>Field reporting & news writing</li>
                <li>Broadcast journalism & interviewing</li>
                <li>Voice-over, TV & film production</li>
                <li>Canva, Microsoft Office, Google Workspace</li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-gold">
                Contact
              </h4>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                <li>{siteConfig.email}</li>
                <li>{siteConfig.phone}</li>
                <li>{siteConfig.location}</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 border-t border-slate-700 p-8">
            <a href={siteConfig.resumeUrl} download="Angelica_D_Arano_CV.pdf" className="btn-gradient">
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
