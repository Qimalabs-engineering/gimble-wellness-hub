import { TrendingUp, Users, Shield, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Benefits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 47, suffix: "%", label: "Reduction in reported stress levels" },
    { value: 3.2, suffix: "x", label: "Increase in wellbeing engagement" },
    { value: 89, suffix: "%", label: "User satisfaction rate" },
    { value: 60, suffix: "%", label: "Improvement in team collaboration" },
  ];

  const outcomes = [
    {
      icon: TrendingUp,
      title: "Informed Decision Making",
      description: "Understand mood patterns, stress levels, and engagement trends to make better decisions about workload, team structure, and support programs.",
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
    {
      icon: Users,
      title: "Stronger Culture",
      description: "When organizations assign journeys and curate resources, users internalize values like emotional awareness, empathy, and resilience.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Shield,
      title: "Privacy You Can Trust",
      description: "Individual data stays private. Organizations only see anonymous, aggregated insights—building trust while gaining visibility.",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      icon: Sparkles,
      title: "Sustainable Performance",
      description: "Teams that think clearly, innovate effectively, and maintain healthy dynamics. Students who manage emotions with confidence.",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
  ];

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isVisible) return;
      
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }, [isVisible, value]);
    
    return (
      <span>
        {suffix === "x" ? count.toFixed(1) : Math.round(count)}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} id="benefits" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed blob" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Stats with animated counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-4xl lg:text-6xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {isVisible ? <AnimatedCounter value={stat.value} suffix={stat.suffix} /> : `0${stat.suffix}`}
              </div>
              <p className="text-muted-foreground text-sm lg:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Outcomes */}
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Why Gimble
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            More than a wellness app
          </h2>
          <p className="text-lg text-muted-foreground">
            Gimble is a strategic partner that helps organizations build environments where people feel supported, capable, and ready to do their best work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.title}
              className={`p-8 rounded-3xl bg-card border border-border/50 card-modern ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl ${outcome.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <outcome.icon className={`w-7 h-7 ${outcome.color}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;