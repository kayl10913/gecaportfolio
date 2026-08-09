import { FaLinkedinIn } from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '../data';

export default function Contact() {
  const contactRows = [
    { icon: Mail, text: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: Phone, text: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { icon: MapPin, text: siteConfig.location },
    { icon: FaLinkedinIn, text: 'LinkedIn Profile', href: siteConfig.social.linkedin },
  ];

  return (
    <section id="contact" className="border-t border-slate-800 bg-navy section-padding">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-3 lg:items-center">
          <div>
            <p className="label-caps">Let&apos;s Connect</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
              Available for media opportunities and professional inquiries. Feel free to get in touch.
            </p>
          </div>

          <ul className="space-y-4">
            {contactRows.map(({ icon: Icon, text, href }) => (
              <li key={text} className="flex items-center gap-3 text-sm text-slate-200">
                <Icon className="shrink-0 text-gold" size={18} />
                {href ? (
                  <a href={href} className="transition hover:text-gold">
                    {text}
                  </a>
                ) : (
                  <span>{text}</span>
                )}
              </li>
            ))}
          </ul>

          <div className="flex lg:justify-end">
            <a
              href="https://kaylmatyu.is-pinoy.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Built by Kayl Matyu"
            >
              <img
                src="https://badges.is-pinoy.dev/badge/kaylmatyu?label=BUILT+BY&theme=dark"
                alt="Built by badge"
                className="h-auto w-auto"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
