import { Button } from "@/components/ui/button";
import { Check, ArrowRight, BarChart3 } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import { useEffect, useState, useRef } from "react";

const OrganizationSection = () => {
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
    "Anonymous aggregated insights across stress, mood, and wellbeing",
    "Assign guided journeys to prioritize organizational themes",
    "Customize the resource library to reflect your culture",
    "Configure emergency contacts visible to all users",
    "Track engagement trends without compromising privacy",
  ];

  return (
    <section ref={sectionRef} id="organizations" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float blob" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className={`relative order-2 lg:order-1 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              <img
                src={dashboardMockup}
                alt="Gimble organization dashboard"
                className="w-full rounded-3xl shadow-card hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Floating stats badge */}
              <div className="absolute -bottom-4 -left-4 lg:left-8 bg-card/90 glass rounded-2xl p-4 shadow-lg animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Wellness +23%</p>
                    <p className="text-xs text-muted-foreground">This quarter</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-breathe" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
          </div>

          {/* Content */}
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <BarChart3 className="w-4 h-4" />
              For Organizations
            </span>
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Insights that drive{" "}
              <span className="text-primary">better decisions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Stop guessing about your team's wellbeing. Gimble provides clear, ethical visibility into the emotional climate of your workforce or student community.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-3 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground group-hover:text-accent/90 transition-colors duration-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button variant="accent" size="lg" className="group hover-glow">
              See Admin Dashboard
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;