import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  image_url: string | null;
  read_time: string | null;
  published: boolean;
  meta_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  created_at: string;
}

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("id", id!)
        .eq("published", true)
        .single();
      
      if (!error && data) setPost(data);
      setLoading(false);
    };
    if (id) fetchPost();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center text-muted-foreground">Loading...</div>
        <Footer />
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title={`${post.title} - Gimble Blog`}
        description={post.excerpt || "Read this article on the Gimble blog."}
        canonical={`https://usegimble.io/blog/${post.id}`}
      />
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          {post.image_url && (
            <img src={post.image_url} alt={post.title} className="w-full rounded-2xl mb-8 aspect-video object-cover" />
          )}

          <div className="flex items-center gap-4 mb-4">
            {post.category && (
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {post.category}
              </span>
            )}
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

          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">{post.title}</h1>

          {post.content && (
            <div
              className="blog-content prose prose-lg dark:prose-invert max-w-none text-foreground/90"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default BlogPostPage;
