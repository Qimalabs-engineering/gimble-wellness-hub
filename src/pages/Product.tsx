import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Brain, Shield, BarChart3, Heart, Users, Zap, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";

const features = [
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Beautiful, intuitive mobile experience for iOS and Android. Track your wellbeing on the go with daily check-ins and personalized insights.",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Our advanced AI analyzes patterns in your wellness data to provide personalized recommendations and early intervention alerts.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data is encrypted end-to-end. You control what's shared with your organization. Complete transparency and GDPR compliance.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Powerful organizational insights with anonymous, aggregated data. Track wellness trends without compromising individual privacy.",
  },
  {
    icon: Heart,
    title: "Wellness Journeys",
    description: "Curated content paths for stress management, resilience building, mindfulness, and more. Assign journeys to teams or individuals.",
  },
  {
    icon: Users,
    title: "Team Wellness",
    description: "Foster connection with group challenges, peer support features, and team wellness goals that bring people together.",
  },
];

const Product = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Product Features - Gimble Mental Health Platform"
        description="Explore Gimble's powerful features: mobile app, AI insights, privacy-first design, analytics dashboard, wellness journeys, and team wellness tools."
        canonical="https://gimble.app/product"
      />
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Product
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Everything you need for{" "}
              <span className="text-primary">complete wellbeing</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              A comprehensive platform that empowers individuals while giving organizations the ethical insights they need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="group">
                <Smartphone className="w-5 h-5" />
                Download App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                <Lock className="w-4 h-4" />
                Enterprise Security
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Security and privacy by design
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Gimble is built with security at its core. We're GDPR compliant, SOC 2 certified, and use end-to-end encryption to protect your data.
              </p>
              <ul className="space-y-4">
                {[
                  "End-to-end encryption for all personal data",
                  "SOC 2 Type II certified infrastructure",
                  "GDPR and HIPAA compliant",
                  "Regular third-party security audits",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square rounded-3xl gradient-primary opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Shield className="w-32 h-32 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to transform your organization's wellbeing?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join 500+ organizations already using Gimble to support their people.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Get Started Today
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Product;