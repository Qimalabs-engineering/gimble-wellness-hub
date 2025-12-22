import { useEffect, useState, useRef } from "react";

const TrustedBy = () => {
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

  const organizations = [
    "Microsoft",
    "Google",
    "Amazon",
    "IBM",
    "Salesforce",
    "Oracle",
    "Meta",
    "Apple",
    "Netflix",
    "Adobe",
    "Cisco",
    "Intel",
  ];

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-muted/30 relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
            Trusted by{" "}
            <span className="text-primary">Forward-Thinking Organizations</span>
          </h2>
          <p className="text-muted-foreground">
            Join the growing list of companies prioritizing employee wellbeing
          </p>
        </div>

        {/* Sliding logos container */}
        <div className="relative">
          {/* Gradient overlays with better fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 via-muted/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 via-muted/20 to-transparent z-10 pointer-events-none" />
          
          {/* Sliding track */}
          <div className={`flex ${isVisible ? 'animate-slide' : ''}`}>
            {/* First set */}
            {organizations.map((org, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-6 lg:mx-10 flex items-center justify-center group"
              >
                <div className="text-2xl lg:text-3xl font-bold text-muted-foreground/40 group-hover:text-primary/60 transition-all duration-300 whitespace-nowrap group-hover:scale-110">
                  {org}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {organizations.map((org, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-6 lg:mx-10 flex items-center justify-center group"
              >
                <div className="text-2xl lg:text-3xl font-bold text-muted-foreground/40 group-hover:text-primary/60 transition-all duration-300 whitespace-nowrap group-hover:scale-110">
                  {org}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats row */}
        <div className={`flex flex-wrap justify-center gap-8 lg:gap-16 mt-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {[
            { value: "20+", label: "Organizations" },
            { value: "1K+", label: "Active Users" },
            { value: "5+", label: "Countries" },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl lg:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;