import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, HelpCircle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />
      
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float blob" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed blob" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-breathe" />

      <main className="flex min-h-screen items-center justify-center px-6 pt-20">
        <div className="text-center max-w-2xl mx-auto">
          {/* Animated 404 */}
          <div className="relative mb-8 animate-fade-in">
            <h1 className="text-[150px] sm:text-[200px] font-bold text-primary/10 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
                <Search className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Oops! Page not found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              The page you're looking for seems to have wandered off on its own wellness journey. 
              Let's get you back on track.
            </p>
          </div>

          {/* Actions */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Link to="/">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                <Home className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => window.history.back()}
              className="group w-full sm:w-auto"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Go Back
            </Button>
          </div>

          {/* Helpful links */}
          <div 
            className="mt-16 pt-8 border-t border-border/50 animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-sm text-muted-foreground mb-6">
              Looking for something specific? Try these popular pages:
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: "Features", href: "/#features" },
                { name: "Who We Serve", href: "/who-we-serve" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-4 py-2 rounded-full bg-muted hover:bg-primary/10 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Help prompt */}
          <div 
            className="mt-12 p-6 rounded-2xl bg-card/50 glass animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
          >
            <div className="flex items-center justify-center gap-3 text-muted-foreground">
              <HelpCircle className="w-5 h-5" />
              <span>Need help? </span>
              <Link to="/contact" className="text-primary font-medium hover:underline underline-animate">
                Contact our support team
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;