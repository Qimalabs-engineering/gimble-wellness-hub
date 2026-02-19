import { useState, useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Pencil, Trash2, Plus, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import RichTextEditor from "@/components/RichTextEditor";

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
  updated_at: string;
}

const emptyPost = {
  title: "",
  excerpt: "",
  content: "",
  category: "",
  image_url: "",
  read_time: "",
  published: false,
  meta_title: "",
  meta_description: "",
  focus_keyword: "",
};

const BlogAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState(emptyPost);
  const [showForm, setShowForm] = useState(false);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");

  // Simple password gate — set your admin password here
  const ADMIN_KEY = "gimble-blog-admin";

  const handleLogin = () => {
    if (adminPassword === ADMIN_KEY) {
      setAuthenticated(true);
      toast.success("Authenticated!");
    } else {
      toast.error("Incorrect password");
    }
  };

  const fetchPosts = async () => {
    setLoading(true);
    // Use service role via edge function to bypass RLS for admin
    const { data, error } = await supabase.functions.invoke("blog-admin", {
      body: { action: "list", password: ADMIN_KEY },
    });
    if (error) {
      toast.error("Failed to load posts");
    } else {
      setPosts(data?.posts || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (authenticated) fetchPosts();
  }, [authenticated]);

  const handleSave = async () => {
    if (!form.title.trim()) {
      toast.error("Title is required");
      return;
    }

    const action = editing ? "update" : "create";
    const { data, error } = await supabase.functions.invoke("blog-admin", {
      body: { action, password: ADMIN_KEY, post: { ...form, id: editing } },
    });

    if (error || data?.error) {
      toast.error(data?.error || "Failed to save post");
    } else {
      toast.success(editing ? "Post updated!" : "Post created!");
      setShowForm(false);
      setEditing(null);
      setForm(emptyPost);
      fetchPosts();
    }
  };

  const handleEdit = (post: BlogPost) => {
    setForm({
      title: post.title,
      excerpt: post.excerpt || "",
      content: post.content || "",
      category: post.category || "",
      image_url: post.image_url || "",
      read_time: post.read_time || "",
      published: post.published,
      meta_title: post.meta_title || "",
      meta_description: post.meta_description || "",
      focus_keyword: post.focus_keyword || "",
    });
    setEditing(post.id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;
    const { data, error } = await supabase.functions.invoke("blog-admin", {
      body: { action: "delete", password: ADMIN_KEY, postId: id },
    });
    if (error || data?.error) {
      toast.error("Failed to delete post");
    } else {
      toast.success("Post deleted!");
      fetchPosts();
    }
  };

  if (!authenticated) {
    return (
      <main className="min-h-screen bg-background">
        <SEO title="Blog Admin - Gimble" description="Manage blog posts" />
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 max-w-md">
            <h1 className="text-3xl font-bold text-foreground mb-6 text-center">Blog Admin</h1>
            <div className="bg-card rounded-2xl border border-border p-8 space-y-4">
              <Label>Admin Password</Label>
              <Input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Enter admin password"
              />
              <Button onClick={handleLogin} className="w-full">Login</Button>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <SEO title="Blog Admin - Gimble" description="Manage blog posts" />
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link to="/blog">
                <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
              </Link>
              <h1 className="text-3xl font-bold text-foreground">Manage Blog Posts</h1>
            </div>
            <Button
              onClick={() => {
                setForm(emptyPost);
                setEditing(null);
                setShowForm(true);
              }}
            >
              <Plus className="w-4 h-4 mr-2" /> New Post
            </Button>
          </div>

          {showForm && (
            <div className="bg-card rounded-2xl border border-border p-6 mb-8 space-y-4 animate-fade-in">
              <h2 className="text-xl font-semibold text-foreground">
                {editing ? "Edit Post" : "New Post"}
              </h2>
              <div className="grid gap-4">
                <div>
                  <Label>Title *</Label>
                  <Input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
                </div>
                <div>
                  <Label>Excerpt</Label>
                  <Textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2} />
                </div>
                <div>
                  <Label>Content</Label>
                  <RichTextEditor
                    content={form.content}
                    onChange={(html) => setForm({ ...form, content: html })}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Category</Label>
                    <Input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="e.g. Research, Tips" />
                  </div>
                  <div>
                    <Label>Read Time</Label>
                    <Input value={form.read_time} onChange={(e) => setForm({ ...form, read_time: e.target.value })} placeholder="e.g. 5 min read" />
                  </div>
                </div>
                <div>
                  <Label>Image URL</Label>
                  <Input value={form.image_url} onChange={(e) => setForm({ ...form, image_url: e.target.value })} placeholder="https://..." />
                </div>
                <div className="flex items-center gap-3">
                  <Switch checked={form.published} onCheckedChange={(checked) => setForm({ ...form, published: checked })} />
                  <Label>Published</Label>
                </div>
              </div>
              <div className="flex gap-3 pt-2">
                <Button onClick={handleSave}>{editing ? "Update" : "Create"}</Button>
                <Button variant="outline" onClick={() => { setShowForm(false); setEditing(null); }}>Cancel</Button>
              </div>
            </div>
          )}

          {loading ? (
            <p className="text-muted-foreground text-center py-12">Loading posts...</p>
          ) : posts.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">No posts yet. Create your first one!</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.id} className="bg-card rounded-xl border border-border p-5 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-foreground truncate">{post.title}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${post.published ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{post.excerpt || "No excerpt"}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(post)}>
                      <Pencil className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(post.id)}>
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogAdmin;
