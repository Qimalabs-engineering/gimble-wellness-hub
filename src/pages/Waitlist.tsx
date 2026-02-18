import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import WaitlistForm from "@/components/landing/WaitlistForm";
import SEO from "@/components/SEO";
import { Sparkles } from "lucide-react";

const Waitlist = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Join the Waitlist - Gimble"
        description="Be the first to experience Gimble, Africa's mental wellness platform. Join our waitlist for early access."
        canonical="https://usegimble.io/waitlist"
      />
      <Navbar />
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Early Access
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Join the <span className="text-primary">Waitlist</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Be among the first to experience Gimble. We'll notify you as soon as we launch.
            </p>
            <WaitlistForm showName buttonText="Join the Waitlist" />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Waitlist;
