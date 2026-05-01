import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="relative py-28 bg-surface/40">
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
            Kontakt
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Bereit für den <span className="text-gradient-primary">Premium-Glanz?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Schreiben Sie uns oder rufen Sie direkt an – wir freuen uns auf Ihr Fahrzeug.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <a href="tel:+4915170009451" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover-lift">
              <div className="rounded-xl bg-gradient-primary p-3 text-primary-foreground"><Phone size={20}/></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Telefon</div>
                <div className="mt-1 font-semibold">0151 70009451</div>
              </div>
            </a>
            <a href="https://wa.me/4915170009451" target="_blank" rel="noopener" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover-lift">
              <div className="rounded-xl bg-[oklch(0.65_0.18_150)] p-3 text-white"><MessageCircle size={20}/></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="mt-1 font-semibold">Direkt schreiben</div>
              </div>
            </a>
            <a href="mailto:info@detaildrive.de" className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover-lift">
              <div className="rounded-xl bg-gradient-primary p-3 text-primary-foreground"><Mail size={20}/></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">E-Mail</div>
                <div className="mt-1 font-semibold">info@detaildrive.de</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="rounded-xl bg-gradient-primary p-3 text-primary-foreground"><MapPin size={20}/></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Adresse</div>
                <div className="mt-1 font-semibold">Am alten Sägewerk 4<br/>53913 Swisttal</div>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
              <div className="rounded-xl bg-gradient-primary p-3 text-primary-foreground"><Clock size={20}/></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Öffnungszeiten</div>
                <div className="mt-1 text-sm text-foreground/85">Mo – Fr: 09:00 – 18:00<br/>Sa: 10:00 – 16:00<br/>So: nach Vereinbarung</div>
              </div>
            </div>
          </motion.div>

          {/* Form + Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-card p-7 shadow-card"
            >
              <h3 className="text-xl font-semibold">Termin anfragen</h3>
              <p className="mt-1 text-sm text-muted-foreground">Wir melden uns innerhalb von 24 Stunden.</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input required placeholder="Name" className="rounded-xl border border-input bg-input/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary" />
                <input required type="email" placeholder="E-Mail" className="rounded-xl border border-input bg-input/40 px-4 py-3 text-sm outline-none focus:border-primary" />
                <input placeholder="Telefon" className="rounded-xl border border-input bg-input/40 px-4 py-3 text-sm outline-none focus:border-primary" />
                <input placeholder="Fahrzeug" className="rounded-xl border border-input bg-input/40 px-4 py-3 text-sm outline-none focus:border-primary" />
              </div>
              <textarea required placeholder="Ihre Nachricht" rows={4} className="mt-4 w-full rounded-xl border border-input bg-input/40 px-4 py-3 text-sm outline-none focus:border-primary" />
              <label className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                <input type="checkbox" required className="mt-0.5 accent-[oklch(0.55_0.22_25)]" />
                <span>Ich bin damit einverstanden, dass meine Daten zum Zwecke der Kontaktaufnahme gespeichert und verarbeitet werden.</span>
              </label>
              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]">
                {sent ? "Nachricht gesendet ✓" : <>Nachricht senden <Send size={16}/></>}
              </button>
            </form>

            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Detail Drive Standort"
                src="https://www.google.com/maps?q=Am+alten+S%C3%A4gewerk+4,+53913+Swisttal&output=embed"
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* WhatsApp floating */}
      <a
        href="https://wa.me/4915170009451"
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-glow transition-transform hover:scale-110"
      >
        <MessageCircle size={26} />
      </a>
    </section>
  );
}
