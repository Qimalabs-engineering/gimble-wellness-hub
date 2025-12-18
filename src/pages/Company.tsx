import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Heart, Globe, Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import africanTeamWellness from "@/assets/african-team-wellness.png";

const team = [
  {
    name: "Amara Okonkwo",
    role: "CEO & Co-Founder",
    bio: "Former McKinsey consultant passionate about mental health in Africa.",
  },
  {
    name: "David Mensah",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer building technology for wellbeing at scale.",
  },
  {
    name: "Fatima Hassan",
    role: "Chief Product Officer",
    bio: "Product leader with 15+ years in health tech innovation.",
  },
  {
    name: "James Ndegwa",
    role: "Head of Customer Success",
    bio: "Dedicated to helping organizations transform their wellness culture.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "We believe in treating every person with empathy and understanding.",
  },
  {
    icon: Target,
    title: "Impact Driven",
    description: "We measure success by the positive change we create in people's lives.",
  },
  {
    icon: Globe,
    title: "African Excellence",
    description: "We're proud to build solutions that understand African contexts.",
  },
  {
    icon: Users,
    title: "Together Strong",
    description: "We believe wellness is a community effort, not just individual work.",
  },
];

const Company = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="About Gimble - Our Mission, Team & Values"
        description="Learn about Gimble's mission to improve mental health across Africa. Meet our team and discover the values that drive our work."
        canonical="https://gimble.app/company"
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
              Our Company
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Building a mentally healthy{" "}
              <span className="text-primary">Africa</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're on a mission to make mental health support accessible, stigma-free, and effective for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Started with a simple question
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                In 2021, our founders asked: "Why is mental health support still so inaccessible in Africa?" Despite a growing crisis, millions lacked access to affordable, culturally-relevant support.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Gimble was born to change that. We built a platform that meets people where they are—on their phones, in their workplaces, in their communities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we serve over 500 organizations across 15 African countries, helping millions of people live healthier, happier lives.
              </p>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img 
                src={africanTeamWellness} 
                alt="Gimble team collaborating"
                className="w-full rounded-3xl shadow-card"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Our Values
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What we stand for
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group p-6 rounded-3xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Leadership
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet our team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate people dedicated to making mental health accessible to all.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-3xl text-primary-foreground font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                <div className="flex justify-center gap-3 mt-4">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Get in touch
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We'd love to hear from you. Reach out to learn more about Gimble or explore partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <div className="flex items-center gap-3 justify-center">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground">hello@gimble.app</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground">Nairobi, Kenya</span>
              </div>
            </div>
            <Link to="/contact">
              <Button variant="hero" size="lg" className="group">
                Contact Us
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

export default Company;