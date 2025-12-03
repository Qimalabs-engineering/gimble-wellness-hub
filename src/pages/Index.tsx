import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import UserSection from "@/components/landing/UserSection";
import OrganizationSection from "@/components/landing/OrganizationSection";
import Benefits from "@/components/landing/Benefits";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <UserSection />
      <OrganizationSection />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
