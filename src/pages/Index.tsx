import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import UserSection from "@/components/landing/UserSection";
import OrganizationSection from "@/components/landing/OrganizationSection";
import Testimonials from "@/components/landing/Testimonials";
import Benefits from "@/components/landing/Benefits";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <UserSection />
      <OrganizationSection />
      <Testimonials />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
