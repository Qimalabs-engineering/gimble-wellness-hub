import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

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
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-50" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
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

      {/* Story */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
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
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-10 lg:p-16">
                <div className="grid grid-cols-2 gap-8 text-center">
                  <div>
                    <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">500+</p>
                    <p className="text-muted-foreground">Organizations</p>
                  </div>
                  <div>
                    <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">250K+</p>
                    <p className="text-muted-foreground">Users Supported</p>
                  </div>
                  <div>
                    <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">30+</p>
                    <p className="text-muted-foreground">Countries</p>
                  </div>
                  <div>
                    <p className="text-4xl lg:text-5xl font-bold text-primary mb-2">4.9</p>
                    <p className="text-muted-foreground">User Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at Gimble.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-soft hover:shadow-card transition-all duration-300">
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
          <div className="max-w-3xl mx-auto text-center">
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
