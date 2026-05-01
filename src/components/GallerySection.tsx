import { motion } from "framer-motion";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { src: g1, label: "Lackpolitur", span: "md:row-span-2" },
  { src: g2, label: "Felgenpflege", span: "" },
  { src: g3, label: "Lederpflege", span: "" },
  { src: g4, label: "Snow Foam Wash", span: "md:row-span-2" },
  { src: g5, label: "Dampfreinigung", span: "" },
  { src: g6, label: "Keramik-Glanz", span: "" },
];

export function GallerySection() {
  return (
    <section id="galerie" className="relative py-28 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Galerie
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Ergebnisse, die für sich <span className="text-gradient-primary">sprechen</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-3 md:auto-rows-[260px]">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-border ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary-foreground">
                  {it.label}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
