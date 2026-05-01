import { createFileRoute } from "@tanstack/react-router";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { PackagesSection } from "@/components/PackagesSection";
import { AboutSection } from "@/components/AboutSection";
import { GallerySection } from "@/components/GallerySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Detail Drive — Premium Fahrzeugaufbereitung in Swisttal" },
      { name: "description", content: "Detail Drive: Premium Car Detailing & mobile Fahrzeugaufbereitung in Swisttal & Umgebung. Innen- und Außenpflege, Lackversiegelung, Keramikbeschichtung." },
      { property: "og:title", content: "Detail Drive — Premium Fahrzeugaufbereitung" },
      { property: "og:description", content: "Premium Car Detailing mit Leidenschaft. Mobile Fahrzeugaufbereitung in Swisttal." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ServicesSection />
        <BeforeAfterSection />
        <PackagesSection />
        <AboutSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
