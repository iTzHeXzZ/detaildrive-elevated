import { createFileRoute, Link } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Detail Drive" },
      { name: "description", content: "Impressum von Detail Drive, Swisttal." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="mx-auto max-w-3xl px-6 pt-36 pb-24">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
          <ArrowLeft size={16}/> Zurück
        </Link>
        <h1 className="mt-6 font-display text-5xl font-bold tracking-tight">Impressum</h1>

        <div className="mt-10 space-y-8 text-foreground/90 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold">Name des Unternehmens</h2>
            <p className="mt-2 text-muted-foreground">Detail Drive</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Vertretungsberechtigte Personen</h2>
            <p className="mt-2 text-muted-foreground">Julian Tänzler & Michael Häp</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Eingetragener Firmensitz</h2>
            <p className="mt-2 text-muted-foreground">Am alten Sägewerk 4<br/>53913 Swisttal</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Kontakt</h2>
            <p className="mt-2 text-muted-foreground">
              Telefon: <a href="tel:+4915170009451" className="text-foreground hover:text-primary">0151 70009451</a><br/>
              E-Mail: <a href="mailto:info@detaildrive.de" className="text-foreground hover:text-primary">info@detaildrive.de</a><br/>
              Website: <a href="https://www.detaildrive.de" className="text-foreground hover:text-primary">www.detaildrive.de</a>
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Aufsichtsbehörde</h2>
            <p className="mt-2 text-muted-foreground">
              Für gewerbliche Tätigkeiten in Swisttal ist der Rhein-Sieg-Kreis zuständig.<br/>
              Rhein-Sieg-Kreis<br/>
              Kaiser-Wilhelm-Platz 1<br/>
              53721 Siegburg<br/>
              Telefon: +49 2241 13-0<br/>
              Website: www.rhein-sieg-kreis.de
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold">Haftung für Inhalte</h2>
            <p className="mt-2 text-muted-foreground">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
