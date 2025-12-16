import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import teamWellness from "@/assets/team-wellness.png";
import abstractWellness from "@/assets/abstract-wellness.png";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "We believe mental health support should be accessible, empathetic, and human-centered.",
  },
  {
    icon: Shield,
    title: "Privacy & Trust",
    description: "User privacy is non-negotiable. We build systems that protect personal data while delivering insights.",
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "We're committed to creating healthier communities—one organization at a time.",
  },
  {
    icon: Target,
    title: "Evidence-Based",
    description: "Our approach is grounded in research and proven methodologies for mental wellness.",
  },
];

const AboutUs = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="About Gimble - Our Mission & Story | Mental Health Platform"
        description="Learn about Gimble's mission to support mental health in organizations. 500+ organizations trust us to help their people thrive with ethical wellness solutions."
        canonical="https://gimble.app/about"
      />
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={abstractWellness} 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/90" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              About Gimble
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Building a world where{" "}
              <span className="text-primary">wellbeing</span> comes first
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We started Gimble with a simple mission: help organizations support their people's mental health in a way that's ethical, effective, and empowering.
            </p>
          </div>
        </div>
      </section>

      {/* Story with Team Image */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Gimble was born from a recognition that traditional approaches to workplace and educational wellbeing weren't working. Organizations wanted to support their people but lacked the tools to do so effectively—or ethically.
                </p>
                <p>
                  We saw an opportunity to create something different: a platform that empowers individuals with personal wellness tools while giving organizations the aggregated insights they need to make informed decisions.
                </p>
                <p>
                  Today, Gimble serves hundreds of organizations worldwide, helping them build cultures where mental health is a priority, not an afterthought.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <img 
                src={teamWellness} 
                alt="Diverse team collaborating in modern office" 
                className="w-full rounded-3xl shadow-card"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-card">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Organizations</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">250K+</p>
                    <p className="text-sm text-muted-foreground">Users</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 gradient-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">500+</p>
              <p className="text-primary-foreground/80">Organizations</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">250K+</p>
              <p className="text-primary-foreground/80">Users Supported</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">30+</p>
              <p className="text-primary-foreground/80">Countries</p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">4.9</p>
              <p className="text-primary-foreground/80">User Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at Gimble.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-card hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to transform your organization?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join hundreds of forward-thinking organizations supporting their people with Gimble.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Book a Demo
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

export default AboutUs;
