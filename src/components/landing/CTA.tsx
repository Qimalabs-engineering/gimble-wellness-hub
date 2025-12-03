import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-primary rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
            {/* Pattern overlay */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="currentColor" />
                </pattern>
                <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
              </svg>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Ready to transform your organization's wellbeing?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
                Join hundreds of forward-thinking companies and schools that use Gimble to build healthier, more resilient communities.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="xl" 
                  className="bg-card text-foreground hover:bg-card/90 rounded-2xl shadow-card group"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  size="xl" 
                  variant="outline"
                  className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 rounded-2xl"
                >
                  <Mail className="w-5 h-5" />
                  Contact Sales
                </Button>
              </div>

              <p className="text-primary-foreground/60 text-sm mt-8">
                No credit card required • Free 14-day trial • Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
