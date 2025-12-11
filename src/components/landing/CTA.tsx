import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import abstractWellness from "@/assets/abstract-wellness.png";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={abstractWellness} 
          alt="Abstract wellness waves" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden hover:scale-105 transition-transform duration-500 shadow-card">

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 animate-fade-in">
                Ready to transform your organization's wellbeing?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Join hundreds of forward-thinking companies and schools that use Gimble to build healthier, more resilient communities.
              </p>

              <div className="flex justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <Link to="/contact">
                  <Button 
                    size="xl" 
                    className="bg-card text-foreground hover:bg-card/90 hover:scale-110 rounded-2xl shadow-card group transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Demo
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>

              <p className="text-muted-foreground text-sm mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                Free consultation • No commitment required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
