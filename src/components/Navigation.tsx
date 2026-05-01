import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { label: "Startseite", to: "/", hash: "" },
  { label: "Leistungen", to: "/", hash: "leistungen" },
  { label: "Galerie", to: "/", hash: "galerie" },
  { label: "Über uns", to: "/", hash: "ueber-uns" },
  { label: "Bewertungen", to: "/", hash: "bewertungen" },
  { label: "Kontakt", to: "/", hash: "kontakt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (hash: string) => {
    setOpen(false);
    if (location.pathname === "/" && hash) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled
            ? "glass rounded-2xl shadow-elegant"
            : "bg-transparent"
        }`}
      >
        <Link
          to="/"
          className="flex items-center gap-2 py-3"
          onClick={() => handleNav("")}
        >
          <span className="font-display text-xl font-black tracking-[0.2em] text-foreground">
            DETAIL<span className="text-primary">DRIVE</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.hash ? `/#${l.hash}` : "/"}
              onClick={(e) => {
                if (location.pathname === "/" && l.hash) {
                  e.preventDefault();
                  handleNav(l.hash);
                }
              }}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="/#kontakt"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                handleNav("kontakt");
              }
            }}
            className="inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Termin anfragen
          </a>
        </div>

        <button
          aria-label="Menü"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mx-4 mt-2 glass rounded-2xl p-4 animate-fade-in">
          <nav className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.hash ? `/#${l.hash}` : "/"}
                onClick={(e) => {
                  if (location.pathname === "/" && l.hash) {
                    e.preventDefault();
                    handleNav(l.hash);
                  }
                }}
                className="px-3 py-3 text-base font-medium text-foreground/90 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
