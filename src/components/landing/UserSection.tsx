import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import userApp from "@/assets/user-app.png";
import { useEffect, useState, useRef } from "react";

const UserSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    "Personalized wellness journeys for your specific needs",
    "Private journaling with AI-powered supportive feedback",
    "Track mood, sleep, and stress patterns over time",
    "Guided breathing and calming audio sessions",
    "Complete control over your data sharing preferences",
  ];

  return (
    <section ref={sectionRef} id="users" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float blob" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className={isVisible ? 'animate-fade-in-left' : 'opacity-0'}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              For Individuals
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Your personal space for{" "}
              <span className="text-primary">growth</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether you're managing daily stress or working through deeper challenges, Gimble gives you the tools and privacy you need to build emotional resilience.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-3 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground group-hover:text-primary/90 transition-colors duration-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="group hover-glow">
              Explore User Features
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              <img
                src={userApp}
                alt="Person using Gimble wellness app"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-card hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Floating feature badge */}
              <div className="absolute -top-4 -right-4 lg:right-8 bg-card/90 glass rounded-2xl p-4 shadow-lg animate-bounce-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-xl">✨</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">7-day streak!</p>
                    <p className="text-xs text-muted-foreground">Keep it up</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-breathe" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSection;