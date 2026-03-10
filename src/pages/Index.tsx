import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HighlightsSection from "@/components/HighlightsSection";
import DetailsSection from "@/components/DetailsSection";
import RoundsAndCriteria from "@/components/RoundsAndCriteria";
import RegisterSection from "@/components/RegisterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <HighlightsSection />
    <DetailsSection />
    <RoundsAndCriteria />
    <RegisterSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
