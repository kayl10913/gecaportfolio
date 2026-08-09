import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';

  return (
    <motion.div
      className={`mb-14 flex max-w-3xl flex-col gap-3 ${alignClass}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="text-base text-slate-300 sm:text-lg">{subtitle}</p>}
      <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-gold to-gold-light" />
    </motion.div>
  );
}
