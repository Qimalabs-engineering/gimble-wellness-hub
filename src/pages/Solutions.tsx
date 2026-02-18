import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, GraduationCap, Shield, Heart, Target, TrendingUp, Users, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";

const solutions = [
  {
    icon: Building2,
    title: "Corporate Wellness",
    description: "Reduce burnout, boost engagement, and create a culture of wellbeing. Our corporate solution integrates seamlessly with HR systems and provides actionable insights.",
    features: ["Employee wellness tracking", "Anonymous surveys", "Manager dashboards", "ROI reporting"],
    link: "/who-we-serve",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Support student mental health with age-appropriate tools. Help educators identify at-risk students early and provide resources that make a difference.",
    features: ["Student check-ins", "Counselor alerts", "Parent portals", "Crisis support"],
    link: "/who-we-serve",
  },
  {
    icon: Shield,
    title: "Government",
    description: "Secure, compliant wellness solutions for public sector organizations. Meet duty of care obligations while supporting your workforce.",
    features: ["High security compliance", "Department analytics", "Policy integration", "24/7 support"],
    link: "/who-we-serve",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description: "Extend care beyond clinical settings. Give patients tools for daily wellbeing management and provide clinicians with valuable insights.",
    features: ["Patient engagement", "Clinical integration", "Outcome tracking", "Care coordination"],
    link: "/who-we-serve",
  },
];

const useCases = [
  {
    icon: Target,
    title: "Stress Management",
    description: "Equip your people with tools to identify and manage stress before it becomes burnout.",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Healthy teams are productive teams. Track the connection between wellbeing and performance.",
  },
  {
    icon: Users,
    title: "Team Building",
    description: "Foster connection and psychological safety with group wellness activities and challenges.",
  },
  {
    icon: Lightbulb,
    title: "Leadership Development",
    description: "Help leaders model healthy behaviors and create supportive environments for their teams.",
  },
];

const Solutions = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Solutions - Corporate, Education, Government & Healthcare | Gimble"
        description="Tailored mental health solutions for corporate wellness, education, government, and healthcare. Discover how Gimble adapts to your industry's unique needs."
        canonical="https://usegimble.io/solutions"
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
              Solutions
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Solutions tailored to{" "}
              <span className="text-primary">your industry</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every organization is different. Gimble adapts to your specific needs, compliance requirements, and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{solution.description}</p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={solution.link}>
                  <Button variant="ghost" className="group/btn p-0 h-auto">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Use Cases
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Common challenges we solve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From stress management to leadership development, Gimble helps organizations tackle their biggest wellbeing challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <useCase.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Let's find the right solution for you
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team will work with you to understand your unique needs and create a customized implementation plan.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Schedule a Consultation
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

export default Solutions;