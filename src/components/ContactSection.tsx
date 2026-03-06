import { useState, type FormEvent } from "react";
import { Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = (formData.get("name") as string).trim();
    const phone = (formData.get("phone") as string).trim();
    const location = (formData.get("location") as string).trim();
    const message = (formData.get("message") as string).trim();

    const { error } = await supabase.from("contact_submissions").insert({
      name,
      phone,
      email: "oluwasemiloregoodness@gmail.com",
      message: `Location: ${location}\n\n${message}`,
    });

    if (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } else {
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      form.reset();
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Need solar, web design, AI solutions, or business support? Reach out and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <Input name="name" placeholder="Your Name" required className="bg-background border-border" />
            <Input name="phone" placeholder="Phone Number" type="tel" required className="bg-background border-border" />
            <Input name="location" placeholder="Your Location" required className="bg-background border-border" />
            <Textarea name="message" placeholder="Your Message" rows={4} required className="bg-background border-border resize-none" />
            <Button type="submit" className="w-full gap-2" size="lg" disabled={loading}>
              <Send className="h-4 w-4" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-6 rounded-xl bg-card border border-border space-y-5">
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm mb-1">Phone (Calls)</p>
                  <a href="tel:09168777398" className="text-muted-foreground text-sm hover:text-primary transition-colors">09168777398</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MessageCircle className="h-5 w-5 text-whatsapp mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm mb-1">WhatsApp</p>
                  <a href="https://wa.me/2348059712276" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-whatsapp transition-colors">08059712276</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm mb-1">Email</p>
                  <a href="mailto:oluwasemiloregoodness@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors break-all">oluwasemiloregoodness@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm mb-1">Business Hours</p>
                  <p className="text-muted-foreground text-sm">Monday – Saturday: 9am – 6pm</p>
                </div>
              </div>
            </div>

            <Button variant="outline" size="lg" className="w-full gap-2 border-whatsapp/40 text-whatsapp hover:bg-whatsapp/10" asChild>
              <a href="https://wa.me/2348059712276" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
