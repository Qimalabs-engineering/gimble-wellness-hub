import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedBy from "@/components/landing/TrustedBy";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Benefits from "@/components/landing/Benefits";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gimble",
    "url": "https://gimble.app",
    "description": "Mental health platform that empowers individuals while giving organizations ethical insights into wellbeing.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://gimble.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Gimble - Mental Health & Wellness Platform for Organizations"
        description="Gimble empowers individuals with mental health tools while giving organizations ethical insights into team wellbeing. Reduce burnout, improve retention. Trusted by 500+ organizations."
        canonical="https://gimble.app"
        structuredData={structuredData}
      />
      <Navbar />
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
