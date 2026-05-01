import { createFileRoute, Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung — Detail Drive" },
      { name: "description", content: "Datenschutzerklärung von Detail Drive — Informationen gemäß DSGVO." },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pt-36 pb-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft size={16}/> Zurück
        </Link>
        <h1 className="mt-6 font-display text-5xl font-bold tracking-tight">Datenschutz­erklärung</h1>
        <p className="mt-4 text-sm text-muted-foreground">Stand: {new Date().toLocaleDateString("de-DE")}</p>

        <div className="mt-10 space-y-10 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold">1. Verantwortlicher</h2>
            <p className="mt-2 text-muted-foreground">
              Detail Drive<br/>
              Julian Tänzler & Michael Häp<br/>
              Am alten Sägewerk 4, 53913 Swisttal<br/>
              E-Mail: info@detaildrive.de · Telefon: 0151 70009451
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">2. Allgemeine Hinweise</h2>
            <p className="mt-2 text-muted-foreground">
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre
              Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TDDDG, BDSG).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="mt-2 text-muted-foreground">
              Wenn Sie unser Kontaktformular nutzen oder uns per E-Mail kontaktieren, werden Ihre
              Angaben (Name, E-Mail-Adresse, Telefonnummer, Nachricht) zum Zweck der Bearbeitung Ihrer
              Anfrage gespeichert. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">4. Server-Logfiles</h2>
            <p className="mt-2 text-muted-foreground">
              Beim Aufruf unserer Website werden automatisch Informationen erhoben (IP-Adresse, Datum,
              Uhrzeit, Browsertyp), die zur Sicherstellung des störungsfreien Betriebs benötigt werden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">5. Cookies & Tracking</h2>
            <p className="mt-2 text-muted-foreground">
              Wir verwenden ausschließlich technisch notwendige Cookies. Optionale Tracking- oder
              Marketing-Cookies werden nur nach Ihrer ausdrücklichen Einwilligung eingesetzt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">6. Eingebettete Dienste (Google Maps)</h2>
            <p className="mt-2 text-muted-foreground">
              Zur Standortdarstellung verwenden wir Google Maps der Google Ireland Ltd. Beim Laden der
              Karte werden Daten an Google übertragen. Weitere Informationen finden Sie in der
              Datenschutzerklärung von Google.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">7. Ihre Rechte</h2>
            <p className="mt-2 text-muted-foreground">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
              Verarbeitung, Datenübertragbarkeit und Widerspruch. Wenden Sie sich dafür an
              info@detaildrive.de. Zudem steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">8. Speicherdauer</h2>
            <p className="mt-2 text-muted-foreground">
              Wir speichern Ihre Daten nur so lange, wie es zur Erfüllung des jeweiligen Zwecks
              erforderlich ist oder gesetzliche Aufbewahrungspflichten dies vorsehen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
