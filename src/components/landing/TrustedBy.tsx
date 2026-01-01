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


  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-muted/30 relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      
      <div className="container mx-auto px-6">
        {/* Stats row */}
        <div className={`flex flex-wrap justify-center gap-8 lg:gap-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {[
            { value: "5", label: "Organizations" },
            { value: "1K+", label: "Active Users" },
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