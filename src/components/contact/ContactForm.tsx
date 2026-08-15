import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import Button from "@/components/common/Button";
import SectionTitle from "@/components/common/SectionTitle";
import { BRAND } from "@/utils/constants";
import { fadeIn, viewportOnce } from "@/utils/animations";

const inputClass =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // REPLACE LATER: connect to a real backend / email service
    setTimeout(() => {
      setSending(false);
      toast.success("Thanks — we'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section className="section-pad bg-background">
      <div className="shell grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionTitle eyebrow="Say hello" title="Send us a" highlight="message" />
          <div className="mt-8 space-y-2 text-sm text-muted-foreground">
            <p>{BRAND.email}</p>
            <p>{BRAND.phone}</p>
          </div>
        </div>

        <motion.form
          onSubmit={onSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeIn}
          className="grid gap-4 rounded-md border border-border bg-card p-7 sm:grid-cols-2"
        >
          <input required name="name" placeholder="Full name" className={inputClass} />
          <input required type="email" name="email" placeholder="Work email" className={inputClass} />
          <input name="company" placeholder="Company" className={inputClass} />
          <input name="budget" placeholder="Budget range" className={inputClass} />
          <textarea
            required
            name="message"
            rows={5}
            placeholder="How can we help?"
            className={`${inputClass} sm:col-span-2`}
          />
          <div className="sm:col-span-2">
            <Button type="submit">{sending ? "Sending…" : "Send message"}</Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
