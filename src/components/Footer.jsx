import { siteConfig } from '../data';

export default function Footer() {
  return (
    <footer className="bg-navy py-5 text-center text-sm text-slate-300">
      <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
    </footer>
  );
}
