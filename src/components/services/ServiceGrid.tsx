import { motion } from "framer-motion";
import Card from "@/components/common/Card";
import SectionTitle from "@/components/common/SectionTitle";
import { SERVICES } from "@/utils/constants";
import { staggerContainer, viewportOnce } from "@/utils/animations";

export default function ServiceGrid() {
  return (
    <section className="section-pad bg-background">
      <div className="shell">
        <SectionTitle eyebrow="Capabilities" title="Six ways we" highlight="work with you" />
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
              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <li>— Discovery & strategy</li>
                  <li>— Delivery squads</li>
                  <li>— Ongoing optimisation</li>
                </ul>
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
