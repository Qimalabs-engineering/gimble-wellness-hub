import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The State of Mental Health in African Workplaces",
    excerpt: "Exploring the unique challenges and opportunities for workplace wellness across the continent.",
    category: "Research",
    date: "Coming Soon",
    readTime: "5 min read",
    image: null,
  },
  {
    id: 2,
    title: "5 Ways to Support Employee Wellbeing",
    excerpt: "Practical strategies for organizations looking to prioritize mental health in their teams.",
    category: "Tips",
    date: "Coming Soon",
    readTime: "4 min read",
    image: null,
  },
  {
    id: 3,
    title: "Why Mental Wellness Matters for Productivity",
    excerpt: "The business case for investing in employee mental health and wellbeing programs.",
    category: "Insights",
    date: "Coming Soon",
    readTime: "6 min read",
    image: null,
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO 
        title="Blog - Gimble | Mental Health & Wellness Insights"
        description="Explore insights, tips, and research on mental health and workplace wellness from the Gimble team."
        canonical="https://gimble.app/blog"
      />
      <Navbar />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Blog
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Insights & <span className="text-primary">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest in workplace wellness, mental health research, and tips for thriving organizations.
            </p>
          </div>

          {/* Coming Soon Notice */}
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Blog Coming Soon
              </h2>
              <p className="text-muted-foreground mb-6">
                We're working on bringing you valuable content about mental wellness in the workplace. 
                Check back soon for articles, research insights, and practical tips.
              </p>
              <Button variant="hero" asChild>
                <a href="/contact">
                  Get Notified
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Preview Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in-up opacity-60"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Placeholder Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-4xl opacity-50">📝</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
