import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Detail Basic",
    price: "ab 89 €",
    duration: "1–1,5 Std.",
    tagline: "Schnelle Auffrischung – blitzsauber in kurzer Zeit",
    features: [
      "Absaugen Sitze, Teppiche & Kofferraum",
      "Feuchtreinigung Armaturen & Konsole",
      "Kunststoffpflege & Staubentfernung",
    ],
  },
  {
    name: "Detail Professional",
    price: "ab 149 €",
    duration: "2–2,5 Std.",
    tagline: "Tiefenreinigung mit Dampfdrachen – hygienisch & materialschonend",
    features: [
      "Gründliche Sitz- & Teppichreinigung",
      "Saugen schwer zugänglicher Bereiche",
      "Kunststoffpflege & Desinfektion",
    ],
  },
  {
    name: "Detail Expert",
    price: "ab 219 €",
    duration: "3–4 Std.",
    tagline: "Premium-Innenreinigung für ein langanhaltendes Ergebnis",
    features: [
      "Teppich- & Polstershampoonierung",
      "Lederpflege inkl. Tiefenreinigung",
      "Oberflächenpflege & Desinfektion",
    ],
    highlight: true,
  },
  {
    name: "Expert + Außen Light",
    price: "ab 299 €",
    duration: "4–5 Std.",
    tagline: "Rundum-Paket Innen & Außen – schonend & effektiv",
    features: [
      "Detail Expert komplett",
      "Außenwäsche",
      "Einfache Lackpflege",
    ],
  },
  {
    name: "Full Premium",
    price: "ab 399 €",
    duration: "5–6 Std.",
    tagline: "Premiumversiegelung für langanhaltenden Hochglanz",
    features: [
      "Detail Expert + Außenwäsche",
      "Lackpflege & Versiegelung",
      "Scheiben- & Felgenversiegelung",
    ],
    highlight: true,
  },
  {
    name: "Polish Expert",
    price: "ab 499 €",
    duration: "auf Anfrage",
    tagline: "Keramik-Versiegelung für ultimativen Schutz & Premium-Glanz",
    features: [
      "Kneten, Teer- & Flugrostentfernung",
      "Step-2-Politur",
      "Keramik-Versiegelung",
    ],
  },
];

export function PackagesSection() {
  return (
    <section id="pakete" className="relative py-28 bg-surface/40">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Pakete & Preise
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Mobile Fahrzeugaufbereitung – <span className="text-gradient-primary">individuell für Sie</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative rounded-2xl border p-7 hover-lift ${
                p.highlight
                  ? "border-primary/50 bg-gradient-to-b from-primary/10 to-card shadow-glow"
                  : "border-border bg-card"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-7 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  <Sparkles size={12} /> Empfohlen
                </span>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{p.duration}</p>
              <div className="mt-5 flex items-end gap-2">
                <span className="text-4xl font-bold text-gradient-primary font-display">{p.price}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.tagline}</p>
              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="mt-0.5 shrink-0 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-7 inline-flex w-full items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                Termin anfragen
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Optional: Tierhaarentfernung ab 35 € · Polstershampoonierung 49 € · Lederpflege 49 € · Scheiben-/Felgenversiegelung 39 €
        </p>
      </div>
    </section>
  );
}
