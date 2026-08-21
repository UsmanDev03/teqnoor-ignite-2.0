import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "@/components/common/SectionTitle";
import { TESTIMONIALS } from "@/utils/constants";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#0c0414] py-20 lg:py-28 text-white">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-900/20 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-pink-900/15 blur-[140px]" />

      <div className="shell relative z-10">
        {/* Title */}
        <SectionTitle
          eyebrow="Clients"
          title="Real client"
          highlight="feedback"
          className="text-4xl font-light text-white sm:text-5xl lg:text-5xl"
        />

        {/* Swiper Slider */}
        <div className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              el: ".custom-swiper-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((t, idx) => (
              <SwiperSlide key={t.name || idx} className="h-auto">
                <figure className="group relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#160926] p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                  {/* Subtle Gradient Accent Line at top of card */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff2a5f] via-[#ff7034] to-[#ffb800] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div>
                    {/* Quotation Icon */}
                    <div className="flex items-center justify-between">
                      <span className="inline-block text-3xl text-[#ff3366] transition-transform duration-300 group-hover:scale-110">
                        <FaQuoteLeft />
                      </span>
                    </div>

                    {/* Quote Content */}
                    <blockquote className="mt-6 text-sm leading-relaxed text-purple-100/90 md:text-base">
                      “{t.quote}”
                    </blockquote>
                  </div>

                  {/* Author & Company Info */}
                  <figcaption className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-base font-bold text-white tracking-wide">{t.name}</p>
                    <p className="text-xs font-medium text-pink-400/90 mt-0.5">{t.title}</p>
                    
                    {/* Company Branding */}
                    <div className="mt-4 flex items-center justify-between">
                      <p className="font-display text-lg font-black uppercase tracking-wider text-white group-hover:text-pink-300 transition-colors duration-300">
                        {t.company}
                      </p>
                      {t.logo && (
                        <img src={t.logo} alt={t.company} className="h-6 object-contain opacity-80 group-hover:opacity-100" />
                      )}
                    </div>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Horizontal Progress/Pagination Bar matching Image Reference */}
          <div className="custom-swiper-pagination mt-4 flex justify-start gap-2" />
        </div>
      </div>

      {/* Pagination Styles Fix */}
      <style jsx global>{`
        .custom-swiper-pagination .swiper-pagination-bullet {
          width: 40px;
          height: 3px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          transition: all 0.3s ease;
        }
        .custom-swiper-pagination .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #ff2a5f, #ff7e29);
          width: 60px;
        }
      `}</style>
    </section>
  );
}