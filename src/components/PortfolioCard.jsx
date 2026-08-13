import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Play } from 'lucide-react';
import LazyImage from './LazyImage';

function ProjectThumbnail({ project, featured }) {
  const height = featured ? 'h-36 sm:h-40' : 'h-56';

  if (project.video) {
    return (
      <div className={`relative ${height} w-full overflow-hidden bg-navy`}>
        <video
          src={project.video}
          className="h-full w-full object-cover"
          muted
          playsInline
          preload="metadata"
          aria-hidden
        />
        <span
          className="absolute inset-0 flex items-center justify-center bg-navy/25 transition group-hover:bg-navy/35"
          aria-hidden
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy shadow-lg">
            <Play size={18} className="ml-0.5" fill="currentColor" />
          </span>
        </span>
      </div>
    );
  }

  if (project.document) {
    return (
      <div className={`relative ${height} w-full overflow-hidden bg-navy`}>
        <LazyImage
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className="absolute inset-0 flex items-center justify-center bg-navy/30 transition group-hover:bg-navy/40"
          aria-hidden
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-navy shadow-lg">
            <FileText size={18} />
          </span>
        </span>
      </div>
    );
  }

  return (
    <LazyImage
      src={project.image}
      alt={project.title}
      className={`${height} w-full object-cover transition duration-500 group-hover:scale-105`}
    />
  );
}

export default function PortfolioCard({ project, onOpen, featured = false }) {
  if (featured) {
    return (
      <motion.article
        whileHover={{ y: -4 }}
        className="group flex flex-col rounded-xl bg-slate-900 shadow-md ring-1 ring-slate-700"
      >
        <button type="button" onClick={() => onOpen(project)} className="flex flex-col text-left">
          <div className="overflow-hidden rounded-t-xl">
            <ProjectThumbnail project={project} featured />
          </div>
          <div className="relative flex flex-1 flex-col p-4 pb-5">
            <h3 className="text-[11px] font-bold uppercase tracking-wide text-white">
              {project.category}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-400">{project.description}</p>
            <span
              className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-gold transition group-hover:bg-gold group-hover:text-navy"
              aria-hidden
            >
              <ArrowUpRight size={16} />
            </span>
          </div>
        </button>
      </motion.article>
    );
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      className="masonry-item group overflow-hidden rounded-2xl bg-slate-900 shadow-lg ring-1 ring-slate-700"
    >
      <button type="button" onClick={() => onOpen(project)} className="block w-full text-left">
        <div className="relative overflow-hidden">
          <ProjectThumbnail project={project} featured={false} />
        </div>
        <div className="p-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-gold">
            {project.category}
          </span>
          <h3 className="mt-1 font-heading text-lg font-bold text-white">{project.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-slate-300">{project.description}</p>
          <span className="mt-4 inline-block text-sm font-semibold text-gold">View Project</span>
        </div>
      </button>
    </motion.article>
  );
}
