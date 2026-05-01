import { Link } from "@tanstack/react-router";
import { Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="font-display text-2xl font-black tracking-[0.2em]">
              DETAIL<span className="text-primary">DRIVE</span>
            </span>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Premium Fahrzeugaufbereitung — mit Leidenschaft, Präzision und höchstem Anspruch an Qualität.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">Kontakt</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Am alten Sägewerk 4, 53913 Swisttal</li>
              <li><a href="tel:+4915170009451" className="hover:text-primary">0151 70009451</a></li>
              <li><a href="mailto:info@detaildrive.de" className="hover:text-primary">info@detaildrive.de</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">Folge uns</h4>
            <div className="mt-4 flex gap-3">
              <a href="https://www.instagram.com/detaildrive_de" aria-label="Instagram" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Instagram size={18}/></a>
              <a href="https://www.tiktok.com/@detaildrive_de" aria-label="TikTok" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1.84-.04Z"/></svg>
              </a>
              <a href="https://www.youtube.com/detaildrive" aria-label="Youtube" className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><Youtube size={18}/></a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Detail Drive. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-primary">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-primary">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
