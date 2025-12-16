import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import teamWellness from "@/assets/team-wellness.png";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Contact Gimble - Book a Demo | Mental Health Platform"
        description="Get in touch with Gimble. Book a personalized demo to see how our mental health platform can support your organization's wellbeing needs."
        canonical="https://gimble.app/contact"
      />
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-50" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Let's start a{" "}
              <span className="text-primary">conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions about Gimble? Want to book a demo? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-soft animate-fade-in-left">
              <h2 className="text-2xl font-bold text-foreground mb-6">Book a Demo</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" required className="h-12 rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" required className="h-12 rounded-xl" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Work Email
                  </label>
                  <Input type="email" placeholder="john@company.com" required className="h-12 rounded-xl" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Organization Name
                  </label>
                  <Input placeholder="Your Company" required className="h-12 rounded-xl" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Organization Type
                  </label>
                  <select className="w-full h-12 px-4 rounded-xl border border-input bg-background text-foreground">
                    <option value="">Select type...</option>
                    <option value="company">Company</option>
                    <option value="school">School / University</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="nonprofit">Non-profit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <Textarea 
                    placeholder="Tell us about your organization and what you're looking for..."
                    rows={4}
                    className="rounded-xl"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Request Demo"}
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-right">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our team is here to help you find the right solution for your organization. 
                  Reach out and we'll respond within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                    <p className="text-muted-foreground">support@usegimble.io</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">123 Wellness Street</p>
                    <p className="text-muted-foreground">San Francisco, CA 94102</p>
                  </div>
                </div>
              </div>

              {/* Team image */}
              <div className="relative rounded-3xl overflow-hidden shadow-card mt-8">
                <img 
                  src={teamWellness} 
                  alt="Gimble team" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-background font-medium">Our team is ready to help</p>
                </div>
              </div>

              {/* Trust badges */}
              <div className="bg-card rounded-3xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">What to expect</span>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Personalized demo of Gimble's features</li>
                  <li>• Discussion of your organization's needs</li>
                  <li>• Pricing and implementation timeline</li>
                  <li>• No commitment required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
