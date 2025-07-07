import AboutSection from "#/components/landing/aboutus-section";
import TestimonialsSection from "#/components/landing/testimonials";
import { AnimHeroSection } from "#/components/anims/hero-bg-anim";
import FocusAreasSection from "#/components/landing/focus-areas-section";
import CTASection from "#/components/landing/cta-section";

export default function Page() {
  return (
    <>
      <AnimHeroSection />
      <AboutSection />
      <FocusAreasSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
