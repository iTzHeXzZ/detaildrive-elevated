import { motion } from "framer-motion";
import { Sparkles, Droplets, Sofa, Shield, Wind, ChevronRight } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Fahrzeugreinigung außen",
    desc: "Handwäsche mit hochwertigen Produkten und Lackversiegelung für langanhaltenden Glanz.",
    items: ["Schonende Handwäsche", "Lackversiegelung", "Felgen- & Reifenpflege"],
  },
  {
    icon: Sparkles,
    title: "Innenreinigung",
    desc: "Tiefenreinigung aller Oberflächen für ein hygienisches und makelloses Innenraumerlebnis.",
    items: ["Sitze, Teppiche & Kofferraum", "Kunststoff- & Tiefenreinigung", "Fenster, Flecken & Gerüche"],
  },
  {
    icon: Sofa,
    title: "Sitz- & Polsterpflege",
    desc: "Professionelle Nass- und Lederreinigung für gepflegte und langlebige Polster.",
    items: ["Nassreinigung Stoffpolster", "Lederreinigung", "Lederpflege & Schutz"],
  },
  {
    icon: Shield,
    title: "Lackpflege & Politur",
    desc: "Step-Politur, Keramikversiegelung und Premium-Schutz für tiefen Glanz und Werterhalt.",
    items: ["Kneten & Flugrostentfernung", "1- & 2-Step Politur", "Keramik-Versiegelung"],
  },
  {
    icon: Wind,
    title: "Dampfdrachen-Technologie",
    desc: "Modernste Dampfreinigung — hygienisch, materialschonend und tief in jede Pore.",
    items: ["Hygienisch & desinfizierend", "Schonend für alle Materialien", "Erreicht jede Stelle"],
  },
  {
    icon: Sparkles,
    title: "Zusatzleistungen",
    desc: "Individuelle Extras für Ihren ganz persönlichen Premium-Anspruch.",
    items: ["Scheibenversiegelung", "Cabrioverdeck-Reinigung", "Tierhaarentfernung"],
  },
];

export function ServicesSection() {
  return (
    <section id="leistungen" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Unsere Leistungen
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Car Detailing auf <span className="text-gradient-primary">höchstem Niveau</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Mit modernster Dampfdrachen-Technologie, Premiumprodukten und langlebigen Versiegelungen
            bringen wir Ihr Auto auf Hochglanz – innen wie außen.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 hover-lift"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <s.icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-foreground/85">
                      <ChevronRight size={14} className="text-primary" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
