import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import landscapeHero from "@/assets/landscape-hero.png";
import appMockup from "@/assets/app-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 lg:pt-0 flex items-center overflow-hidden">
      {/* Background landscape */}
      <div className="absolute inset-0">
        <img 
          src={landscapeHero} 
          alt="Serene green landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>
      
      {/* Animated decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float blob" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed blob" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-breathe" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge with shimmer effect */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in-down glass"
              style={{ animationDelay: '0.1s' }}
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Trusted by 500+ organizations
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Wellbeing that{" "}
              <span className="text-primary relative">
                works
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path 
                    d="M2 8C50 2 150 2 198 8" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth="3" 
                    strokeLinecap="round"
                    className="animate-fade-in"
                    style={{ animationDelay: '0.8s' }}
                  />
                </svg>
              </span>
              <br />
              for everyone
            </h1>
            
            <p 
              className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              Gimble is the mental health platform that empowers individuals while giving organizations the insights they need—ethically and effectively.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group hover-glow">
                  <Calendar className="w-5 h-5" />
                  Book a Demo
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            {/* Social proof with staggered animation */}
            <div 
              className="flex items-center gap-6 mt-10 justify-center lg:justify-start animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-background flex items-center justify-center text-xs font-medium text-foreground shadow-sm hover:scale-110 hover:z-10 transition-transform duration-200"
                    style={{ animationDelay: `${0.7 + i * 0.1}s` }}
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg 
                      key={i} 
                      className="w-4 h-4 text-primary fill-current hover:scale-125 transition-transform duration-200" 
                      viewBox="0 0 20 20"
                      style={{ animationDelay: `${0.8 + i * 0.05}s` }}
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">4.9/5 from 2,000+ reviews</p>
              </div>
            </div>
          </div>

          {/* App Mockup with enhanced animation */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative z-10">
              <img
                src={appMockup}
                alt="Gimble app interface showing wellness tracking"
                className="w-full max-w-md mx-auto drop-shadow-2xl animate-float hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating feature badges */}
              <div className="absolute -top-4 -left-4 lg:left-0 bg-card/90 glass rounded-2xl p-3 shadow-lg animate-bounce-subtle">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-lg">🧘</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Daily Check-in</p>
                    <p className="text-xs text-muted-foreground">Track your mood</p>
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute -bottom-4 -right-4 lg:right-0 bg-card/90 glass rounded-2xl p-3 shadow-lg animate-bounce-subtle"
                style={{ animationDelay: '1s' }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="text-lg">📊</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Insights Ready</p>
                    <p className="text-xs text-muted-foreground">Team wellness +12%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glow effects */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-75 animate-pulse-glow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary/10 to-transparent rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center">
          <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;