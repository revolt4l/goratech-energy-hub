import { useState, useEffect } from "react";
import { Star, Quote, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";
import { motion } from "framer-motion";

const testimonialSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  location: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(500),
  rating: z.number().min(1).max(5),
});

type Testimonial = {
  id: string;
  name: string;
  location: string;
  message: string;
  rating: number;
  created_at: string;
};

const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);
      if (data) setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = testimonialSchema.safeParse({ name, location, message, rating });
    if (!result.success) {
      toast.error(result.error.errors[0].message);
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("testimonials").insert({
      name: result.data.name,
      location: result.data.location || "",
      message: result.data.message,
      rating: result.data.rating,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Failed to submit. Please try again.");
    } else {
      toast.success("Thank you! Your testimonial will appear once reviewed.");
      setName("");
      setLocation("");
      setMessage("");
      setRating(5);
    }
  };

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hear from our clients — or share your own experience with GORATECH.
          </p>
        </motion.div>

        {testimonials.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-xl border border-border bg-card p-8 glow-box flex flex-col hover:border-primary/30 transition-colors"
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  "{t.message}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-display font-semibold text-sm">{t.name}</p>
                {t.location && <p className="text-muted-foreground text-xs">{t.location}</p>}
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto rounded-xl border border-border bg-card p-8 glow-box"
        >
          <h3 className="font-display font-semibold text-xl mb-2 text-center">Share Your Experience</h3>
          <p className="text-muted-foreground text-sm text-center mb-6">
            Your review will be published after a quick review.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} maxLength={100} required />
            <Input placeholder="Location (e.g. Lagos)" value={location} onChange={(e) => setLocation(e.target.value)} maxLength={100} />
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Rating:</span>
              {[1, 2, 3, 4, 5].map((r) => (
                <button key={r} type="button" onClick={() => setRating(r)} className="focus:outline-none">
                  <Star className={`h-5 w-5 transition-colors ${r <= rating ? "fill-primary text-primary" : "text-muted-foreground/30"}`} />
                </button>
              ))}
            </div>
            <Textarea placeholder="Tell us about your experience with GORATECH..." value={message} onChange={(e) => setMessage(e.target.value)} maxLength={500} rows={4} required />
            <Button type="submit" className="w-full gap-2" disabled={submitting}>
              <Send className="h-4 w-4" />
              {submitting ? "Submitting..." : "Submit Testimonial"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
