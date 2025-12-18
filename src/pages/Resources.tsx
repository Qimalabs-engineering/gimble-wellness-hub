import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, FileText, Video, Headphones, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";

const resourceCategories = [
  {
    icon: BookOpen,
    title: "Blog & Articles",
    description: "Insights on workplace wellbeing, mental health trends, and best practices from our team of experts.",
    count: "50+ articles",
    link: "#",
  },
  {
    icon: FileText,
    title: "Guides & Whitepapers",
    description: "In-depth research and practical guides on implementing effective wellness programs.",
    count: "12 guides",
    link: "#",
  },
  {
    icon: Video,
    title: "Webinars",
    description: "Watch our expert-led sessions on topics from stress management to building resilient teams.",
    count: "20+ recordings",
    link: "#",
  },
  {
    icon: Headphones,
    title: "Podcast",
    description: "The Wellbeing Works podcast featuring conversations with leaders in mental health and HR.",
    count: "45 episodes",
    link: "#",
  },
];

const featuredResources = [
  {
    type: "Guide",
    title: "The Complete Guide to Workplace Mental Health in Africa",
    description: "A comprehensive resource for HR leaders looking to implement evidence-based wellness programs that resonate with African workplace culture.",
    image: "📚",
  },
  {
    type: "Webinar",
    title: "Building Resilient Teams in Challenging Times",
    description: "Learn strategies for supporting your team's mental health during periods of uncertainty and change.",
    image: "🎥",
  },
  {
    type: "Case Study",
    title: "How Safaricom Reduced Burnout by 40%",
    description: "Discover how one of Africa's leading telecoms used Gimble to transform their employee wellness program.",
    image: "📊",
  },
];

const Resources = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Resources - Guides, Webinars & Mental Health Insights | Gimble"
        description="Access free resources on workplace mental health: guides, webinars, case studies, and expert insights to help you build a healthier organization."
        canonical="https://gimble.app/resources"
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
              Resources
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Learn from the{" "}
              <span className="text-primary">experts</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Free guides, webinars, and insights to help you build a mentally healthy workplace.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourceCategories.map((category, index) => (
              <div 
                key={index}
                className="group p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-2xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">{category.count}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Featured
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Popular resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start with our most-downloaded guides and most-watched webinars.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div 
                key={index}
                className="group p-6 rounded-3xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6">
                  <span className="text-5xl">{resource.image}</span>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {resource.type}
                </span>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                <Button variant="ghost" className="group/btn p-0 h-auto">
                  Read more
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
              <Download className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get the latest insights
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Subscribe to our newsletter for weekly tips on workplace mental health and exclusive resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="hero">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Resources;