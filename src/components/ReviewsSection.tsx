import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Markus B.",
    car: "BMW M3",
    text: "Absolut Top! Mein Auto hat noch nie so makellos ausgesehen. Der Innenraum wirkt wie neu – jedes Detail wurde berücksichtigt.",
  },
  {
    name: "Sandra L.",
    car: "Audi Q5",
    text: "Sehr professioneller Service, faire Preise und ein Ergebnis, das wirklich begeistert. Die Jungs lieben, was sie tun.",
  },
  {
    name: "Tobias K.",
    car: "Mercedes E-Klasse",
    text: "Pünktlich, freundlich und absolute Profis. Die Keramikversiegelung sieht großartig aus – jederzeit wieder!",
  },
  {
    name: "Lena F.",
    car: "VW Golf GTI",
    text: "Hervorragende Arbeit! Man merkt sofort die Leidenschaft fürs Detail. Klare Empfehlung für jeden Autoliebhaber.",
  },
];

export function ReviewsSection() {
  return (
    <section id="bewertungen" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Bewertungen
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Was unsere <span className="text-gradient-primary">Kunden sagen</span>
          </h2>
          <div className="mt-6 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-[oklch(0.82_0.13_85)] text-[oklch(0.82_0.13_85)]" />
            ))}
            <span className="ml-3 text-sm text-muted-foreground">5.0 · Durchschnittsbewertung</span>
          </div>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <motion.blockquote
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 hover-lift"
            >
              <Quote className="absolute right-5 top-5 text-primary/20" size={56} />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} className="fill-[oklch(0.82_0.13_85)] text-[oklch(0.82_0.13_85)]" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-relaxed text-foreground/90">„{r.text}"</p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{r.car}</div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
