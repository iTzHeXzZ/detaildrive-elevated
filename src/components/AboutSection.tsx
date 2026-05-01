import { motion } from "framer-motion";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";

export function AboutSection() {
  return (
    <section id="ueber-uns" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Über uns
            </span>
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
              Vertrauen durch <span className="text-gradient-primary">Leidenschaft</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Bei <span className="font-semibold text-foreground">Detail Drive</span> wissen wir genau, wie viel Liebe, Zeit und
              Geduld in ein perfekt gepflegtes Auto steckt – weil wir selbst echte Detail-Fans sind.
              Wir verstehen, dass Ihr Fahrzeug mehr ist als nur ein Fortbewegungsmittel – es ist ein
              Stück Persönlichkeit.
            </p>
            <p className="mt-4 text-muted-foreground">
              Genau deshalb können Sie uns Ihr Auto mit gutem Gefühl anvertrauen. Wir behandeln jedes
              Fahrzeug, als wäre es unser eigenes, und achten auf jedes kleine Detail – mit echter
              Leidenschaft und höchstem Anspruch an Qualität.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { v: "500+", l: "Fahrzeuge gepflegt" },
                { v: "5★", l: "Kundenbewertungen" },
                { v: "100%", l: "Premium-Produkte" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-card p-4 text-center">
                  <div className="font-display text-2xl font-bold text-gradient-primary">{s.v}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative grid grid-cols-2 gap-5"
          >
            <div className="space-y-5 pt-10">
              <figure className="overflow-hidden rounded-2xl border border-border shadow-elegant">
                <img src={team1} alt="Julian Tänzler" className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <figcaption className="bg-card p-4">
                  <p className="font-semibold">Julian Tänzler</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Gründer · Detailing Spezialist</p>
                </figcaption>
              </figure>
            </div>
            <div className="space-y-5">
              <figure className="overflow-hidden rounded-2xl border border-border shadow-elegant">
                <img src={team2} alt="Michael Häp" className="h-80 w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                <figcaption className="bg-card p-4">
                  <p className="font-semibold">Michael Häp</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Gründer · Lackpflege Profi</p>
                </figcaption>
              </figure>
            </div>
            <div className="absolute -inset-10 -z-10 bg-gradient-radial blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
