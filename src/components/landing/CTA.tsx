import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import abstractWellness from "@/assets/abstract-wellness.png";
import { useEffect, useState, useRef } from "react";
import WaitlistForm from "./WaitlistForm";

const CTA = () => {
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

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={abstractWellness} 
          alt="Abstract wellness waves" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${5 + i}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-4xl mx-auto ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="bg-card/95 backdrop-blur-md rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 border border-primary/10">
            
            {/* Decorative gradient orbs */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-breathe" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />

            <div className="relative z-10">
              {/* Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 ${isVisible ? 'animate-fade-in-down' : ''}`}>
                <Sparkles className="w-4 h-4 animate-pulse" />
                Start your transformation today
              </div>
              
              <h2 className={`text-3xl lg:text-5xl font-bold text-foreground mb-6 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.1s' }}>
                Ready to transform your{" "}
                <span className="text-primary">organization's wellbeing</span>?
              </h2>
              <p className={`text-muted-foreground text-lg mb-8 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
                Join hundreds of forward-thinking companies and schools that use Gimble to build healthier, more resilient communities.
              </p>

              {/* Waitlist Form */}
              <div className={`max-w-lg mx-auto mb-8 ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.3s' }}>
                <WaitlistForm buttonText="Join the Waitlist" />
              </div>

              <div className={`flex justify-center ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.4s' }}>
                <p className="text-muted-foreground text-sm mb-4">Or schedule a personalized demo</p>
              </div>
              
              <div className={`flex justify-center ${isVisible ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '0.5s' }}>
                <Link to="/contact">
                  <Button 
                    variant="heroOutline"
                    size="lg" 
                    className="group"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Demo
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm text-muted-foreground ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Free consultation
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  No commitment required
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Setup in 24 hours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;