import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  image_url: string | null;
  read_time: string | null;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("blog_posts")
        .select("id, title, excerpt, category, image_url, read_time, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false });
      setPosts(data || []);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

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
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Blog
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4">
              Insights & <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with the latest in workplace wellness, mental health research, and tips for thriving organizations.
            </p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-2xl border border-border/50 overflow-hidden animate-pulse">
                  <div className="aspect-video bg-muted" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-muted rounded w-1/4" />
                    <div className="h-6 bg-muted rounded w-3/4" />
                    <div className="h-4 bg-muted rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 animate-fade-in-up">
                <h2 className="text-2xl font-bold text-foreground mb-3">Blog Coming Soon</h2>
                <p className="text-muted-foreground mb-6">
                  We're working on bringing you valuable content about mental wellness in the workplace.
                </p>
                <Button variant="hero" asChild>
                  <a href="/contact">
                    Get Notified <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Featured Post */}
              {featuredPost && (
                <Link
                  to={`/blog/${featuredPost.id}`}
                  className="block group animate-fade-in-up"
                >
                  <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-card hover:shadow-glow transition-all duration-500 card-modern">
                    <div className="grid lg:grid-cols-2">
                      <div className="aspect-video lg:aspect-auto lg:min-h-[360px] bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                        {featuredPost.image_url ? (
                          <img
                            src={featuredPost.image_url}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-6xl opacity-30">📝</span>
                          </div>
                        )}
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                          {featuredPost.category && (
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                              {featuredPost.category}
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {format(new Date(featuredPost.created_at), "MMM d, yyyy")}
                          </span>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          {featuredPost.read_time && (
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {featuredPost.read_time}
                            </span>
                          )}
                          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                            Read Article <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* Remaining Posts Grid */}
              {remainingPosts.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {remainingPosts.map((post, index) => (
                    <Link
                      to={`/blog/${post.id}`}
                      key={post.id}
                      className="group rounded-2xl overflow-hidden border border-border/50 bg-card shadow-sm card-modern animate-fade-in-up"
                      style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                    >
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden relative">
                        {post.image_url ? (
                          <img
                            src={post.image_url}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-4xl opacity-30">📝</span>
                          </div>
                        )}
                        {post.category && (
                          <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-primary text-xs font-semibold uppercase tracking-wider">
                            {post.category}
                          </span>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {format(new Date(post.created_at), "MMM d, yyyy")}
                          </span>
                          {post.read_time && (
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.read_time}
                            </span>
                          )}
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-300">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blog;
