import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { format } from "date-fns";

interface Post {
  id: string;
  title: string;
  content: string;
  image_url: string | null;
  created_at: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchPost = async () => {
      try {
        setError(null);

        if (!slug) {
          if (!cancelled) setPost(null);
          return;
        }

        const { data, error } = await supabase
          .from("blog_posts")
          .select("id, title, content, image_url, created_at")
          .eq("slug", slug)
          .eq("published", true)
          .maybeSingle();

        if (error) throw error;
        if (!cancelled) setPost(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? "Failed to load this post.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchPost();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Simple markdown-to-HTML: headings, bold, italic, links, lists, hr
  const renderContent = (md: string) => {
    const html = md
      .replace(/^### (.+)$/gm, '<h3 class="font-display text-xl font-semibold mt-8 mb-3">$1</h3>')
      .replace(/^## (.+)$/gm, '<h2 class="font-display text-2xl font-bold mt-10 mb-4">$1</h2>')
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>')
      .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc text-muted-foreground">$1</li>')
      .replace(/^---$/gm, '<hr class="my-8 border-border" />')
      .replace(/\n\n/g, '</p><p class="text-muted-foreground leading-relaxed mb-4">')
      .replace(/\n/g, "<br />");
    return `<p class="text-muted-foreground leading-relaxed mb-4">${html}</p>`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-28 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button variant="ghost" size="sm" className="mb-8 gap-2" asChild>
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-64 w-full" />
            </div>
          ) : !post ? (
            <div className="text-center py-16">
              <h2 className="font-display text-2xl font-bold mb-4">Post Not Found</h2>
              <p className="text-muted-foreground mb-6">This article doesn't exist or has been removed.</p>
              <Button asChild>
                <Link to="/blog">Browse Articles</Link>
              </Button>
            </div>
          ) : (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Calendar className="h-4 w-4" />
                {format(new Date(post.created_at), "MMMM d, yyyy")}
              </div>
              {post.image_url && (
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full rounded-xl mb-8 object-cover max-h-96"
                />
              )}
              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
              />
            </motion.article>
          )}
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogPost;
