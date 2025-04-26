import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import AboutSection from '../sections/AboutSection';
import TrustBadgesSection from '../sections/TrustBadgesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import BlogSection from '../sections/BlogSection';
import CtaSection from '../sections/CtaSection';
import ContactSection from '../sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadgesSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
      <ContactSection />
    </>
  );
}