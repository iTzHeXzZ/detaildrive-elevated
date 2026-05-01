import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-car.jpg";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      {/* BG image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Premium Fahrzeugaufbereitung Detail Drive"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-grid opacity-20" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur">
            <Sparkles size={14} /> Premium Car Detailing · Swisttal & Umgebung
          </span>

          <h1 className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            <span className="text-gradient">Weil Ihr Auto</span>
            <br />
            <span className="text-gradient-primary">mehr verdient</span>
            <br />
            <span className="text-gradient">als nur sauber.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-foreground/80 md:text-xl">
            Modernste Dampfdrachen-Technologie, Premiumprodukte und langlebige Versiegelungen –
            für Fahrzeuge, die nicht nur sauber, sondern <span className="text-foreground">richtig makellos</span> sind.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Termin anfragen
            </a>
            <a
              href="#pakete"
              onClick={(e) => { e.preventDefault(); document.getElementById("pakete")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:border-primary hover:bg-primary/10"
            >
              Pakete entdecken
            </a>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4">
            {[
              { v: "5★", l: "Bewertungen" },
              { v: "500+", l: "Fahrzeuge" },
              { v: "100%", l: "Premium-Produkte" },
              { v: "Mobil", l: "vor Ort verfügbar" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-foreground">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, duration: 2.2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <ChevronDown size={28} />
        </motion.div>
      </div>
    </section>
  );
}
