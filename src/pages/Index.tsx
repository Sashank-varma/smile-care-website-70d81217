import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import AppointmentSection from "@/components/AppointmentSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <AppointmentSection />
      <Footer />
    </>
  );
};

export default Index;
