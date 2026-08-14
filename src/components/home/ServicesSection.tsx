import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import { SERVICES } from "@/utils/constants";
import { staggerContainer, viewportOnce } from "@/utils/animations";

export default function ServicesSection() {
  return (
    <section className="section-pad bg-background">
      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Solutions"
            title="Solutions to reach your audiences across"
            highlight="every channel"
          />
          <Button to="/services">Find your solution</Button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <Card key={service.title} className="overflow-hidden p-0">
              <div className={`${service.gradient} p-6`}>
                <span className="text-3xl">{service.icon}</span>
                <h3 className="mt-4 font-display text-xl font-bold uppercase text-primary-foreground">
                  {service.title}
                </h3>
              </div>
              <p className="p-6 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
