import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data';
import { siteLogo } from '../assets/photos';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { scrollToSection } from '../utils/animations';

export default function Navbar() {
  const { scrolled, scrollY } = useScrollPosition(40);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const onHero = scrollY < window.innerHeight * 0.65;

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNav = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  const lightNav = scrolled || !onHero;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        lightNav ? 'bg-navy/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <button
          type="button"
          onClick={() => handleNav('home')}
          className="flex items-center"
          aria-label="Go to home"
        >
          <img
            src={siteLogo}
            alt="Angelica D. Araño logo"
            className="h-9 w-auto rounded-sm object-contain sm:h-10"
          />
        </button>

        <ul className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => handleNav(link.id)}
                className={`relative text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  lightNav
                    ? active === link.id
                      ? 'text-gold'
                      : 'text-slate-300 hover:text-white'
                    : active === link.id
                      ? 'text-gold'
                      : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gold" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={`rounded-full p-2 lg:hidden ${lightNav ? 'text-white' : 'text-white'}`}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-700 bg-navy lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.id)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider ${
                      active === link.id ? 'bg-gold/10 text-gold' : 'text-slate-200'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
