import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { portfolioProjects, portfolioCategories } from '../data';
import PortfolioCard from './PortfolioCard';
import PortfolioModal from './PortfolioModal';

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const featured = portfolioProjects.slice(0, 6);

  const filtered = useMemo(() => {
    return portfolioProjects.filter((p) => {
      const matchCat = filter === 'All' || p.category === filter;
      const q = query.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [filter, query]);

  return (
    <section id="portfolio" className="section-padding bg-navy">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="label-caps">Featured Works</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            A Glimpse of My Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <PortfolioCard project={project} onOpen={setSelected} featured />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button type="button" className="btn-navy" onClick={() => setShowAll((s) => !s)}>
            {showAll ? 'Hide Projects' : 'View All Projects'}
          </button>
        </div>

        <AnimatePresence>
          {showAll && (
            <motion.div
              id="portfolio-all"
              className="mt-16 border-t border-slate-100 pt-16"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  {portfolioCategories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setFilter(cat)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        filter === cat
                          ? 'bg-gold text-navy'
                          : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <label className="relative w-full sm:max-w-xs">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                  <input
                    type="search"
                    placeholder="Search projects…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full rounded-full border border-slate-700 bg-slate-900 py-2.5 pl-10 pr-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-gold"
                  />
                </label>
              </div>

              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-2xl bg-slate-900 py-20 text-center">
                  <p className="font-heading text-lg font-semibold text-white">No projects found</p>
                  <p className="mt-2 text-sm text-slate-400">Try a different filter or search term.</p>
                </div>
              ) : (
                <div className="masonry-grid">
                  <AnimatePresence mode="popLayout">
                    {filtered.map((project) => (
                      <PortfolioCard key={project.id} project={project} onOpen={setSelected} />
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && <PortfolioModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
