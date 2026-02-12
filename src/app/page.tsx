import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";
import { AboutSection } from "@/components/features/AboutSection";
import { ServiceSection } from "@/components/features/ServiceSection";
import { ImportantInfo } from "@/components/features/ImportantInfo";
import { ProfessionalsSection } from "@/components/features/ProfessionalsSection";
import { TestimonialsSection } from "@/components/features/TestimonialsSection";
import { GallerySection } from "@/components/features/GallerySection";
import { CTASection } from "@/components/features/CTASection";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServiceSection />
        <ImportantInfo />
        <ProfessionalsSection />
        <TestimonialsSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
