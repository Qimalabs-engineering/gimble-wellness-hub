import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const UserSection = () => {
  const benefits = [
    "Personalized wellness journeys for your specific needs",
    "Private journaling with AI-powered supportive feedback",
    "Track mood, sleep, and stress patterns over time",
    "Guided breathing and calming audio sessions",
    "Complete control over your data sharing preferences",
  ];

  return (
    <section id="users" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              For Individuals
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Your personal space for growth
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're managing daily stress or working through deeper challenges, Gimble gives you the tools and privacy you need to build emotional resilience.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="group">
              Explore User Features
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={appMockup}
                alt="Gimble mobile app for users"
                className="w-full max-w-md mx-auto rounded-3xl shadow-card"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSection;
