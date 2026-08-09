import { motion } from 'framer-motion';
import { skillCategories } from '../data';
import SectionHeading from './SectionHeading';
import { getSkillIcon } from '../utils/skillIcons';
import { fadeUp, staggerContainer } from '../utils/animations';
import { useInView } from '../hooks/useInView';

function SkillBar({ skill }) {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const Icon = getSkillIcon(skill.icon);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      whileHover={{ scale: 1.02 }}
      className="rounded-xl border border-slate-700 bg-slate-800/50 p-4 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Icon size={18} className="text-gold" aria-hidden />
          <span className="text-sm font-medium text-slate-100">{skill.name}</span>
        </div>
        <span className="text-xs font-semibold text-gold">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-slate-700">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Expertise"
          title="Skills & Tools"
          subtitle="Core competencies across journalism, broadcast, and digital production."
        />

        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          {skillCategories.map((cat) => (
            <motion.article key={cat.name} variants={fadeUp} className="glass-card p-6 sm:p-8">
              <h3 className="mb-6 font-heading text-xl font-bold text-white">{cat.name}</h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
