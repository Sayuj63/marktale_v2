import HeroSection from "./components/HeroSection";
import PhilosophySection from "./components/PhilosophySection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import WorkGallery from "./components/WorkGallery";
import Testimonials from "./components/Testimonials";
import StartupFeature from "./components/StartupFeature";
import Awards from "./components/Awards";
import TeamCTA from "./components/TeamCTA";
import GlobalIndustries from "./components/GlobalIndustries";
import CertificationsSection from "./components/CertificationsSection";
import ReviewsSection from "./components/ReviewsSection";
import WhatsAppMascot from "./components/WhatsAppMascot";
import WhatsAppFloat from "./components/WhatsAppFloat";
import PricingSection from "./components/PricingSection";
import HomeContactSection from "./components/HomeContactSection";
import CreativeShowcase from "./components/CreativeShowcase";


export default async function Home() {

  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <PhilosophySection />
      <WorkGallery />
      <StartupFeature />
      <ServicesSection />
      <PricingSection />
      <GlobalIndustries />
      <CreativeShowcase />
      <Testimonials />
      <Awards />
      <TeamCTA />
      <AboutSection />
      <CertificationsSection />
      <ReviewsSection />
      <HomeContactSection />

      {/* Floating WhatsApp Components */}
      <WhatsAppMascot />
      <WhatsAppFloat />
    </main>
  );
}
