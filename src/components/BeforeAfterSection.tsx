import { motion } from "framer-motion";
import { BeforeAfter } from "./BeforeAfter";
import beforeI from "@/assets/before-interior.jpg";
import afterI from "@/assets/after-interior.jpg";
import beforeE from "@/assets/before-exterior.jpg";
import afterE from "@/assets/after-exterior.jpg";

export function BeforeAfterSection() {
  return (
    <section id="vorher-nachher" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Vorher · Nachher
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Der Unterschied, den <span className="text-gradient-primary">Liebe zum Detail</span> macht
          </h2>
          <p className="mt-4 text-muted-foreground">Schieben Sie den Regler — und sehen Sie das Ergebnis selbst.</p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div>
            <BeforeAfter before={beforeI} after={afterI} alt="Innenraum" />
            <p className="mt-4 text-center text-sm uppercase tracking-widest text-muted-foreground">Innenraumreinigung</p>
          </div>
          <div>
            <BeforeAfter before={beforeE} after={afterE} alt="Lackpflege" />
            <p className="mt-4 text-center text-sm uppercase tracking-widest text-muted-foreground">Lackpflege & Politur</p>
          </div>
        </div>
      </div>
    </section>
  );
}
