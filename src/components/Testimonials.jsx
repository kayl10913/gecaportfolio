import { Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '../data';
import SectionHeading from './SectionHeading';
import LazyImage from './LazyImage';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  if (!testimonials.length) return null;

  return (
    <section id="testimonials" className="section-padding bg-navy-light/40">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="What colleagues say"
          subtitle="Feedback from mentors and collaborators."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="testimonials-swiper pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <article className="glass-card mx-auto max-w-2xl p-8 text-center sm:p-10">
                <Quote className="mx-auto mb-4 text-gold" size={36} aria-hidden />
                <blockquote className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <LazyImage
                    src={t.photo}
                    alt={t.name}
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-gold/50"
                  />
                  <div>
                    <p className="font-heading font-semibold text-white">{t.name}</p>
                    <p className="text-sm text-slate-500">{t.position}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
