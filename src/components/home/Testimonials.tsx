import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import SectionTitle from "@/components/common/SectionTitle";
import { TESTIMONIALS } from "@/utils/constants";

export default function Testimonials() {
  return (
    <section className="section-pad bg-surface">
      <div className="shell">
        <SectionTitle eyebrow="Clients" title="Real client" highlight="feedback" />

        <div className="mt-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.name} className="h-auto">
                <figure className="flex h-full min-h-[300px] flex-col justify-between rounded-md border border-border bg-background p-7">
                  <FaQuoteLeft className="text-2xl text-primary" />
                  <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/90">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6">
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.title}</p>
                    <p className="mt-4 font-display text-lg font-bold text-gradient">{t.company}</p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
