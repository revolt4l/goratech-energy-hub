import { useState, type FormEvent } from "react";
import { Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const { error } = await supabase.from("contact_submissions").insert({
      name: (formData.get("name") as string).trim(),
      phone: (formData.get("phone") as string).trim(),
      email: (formData.get("email") as string).trim(),
      message: (formData.get("message") as string).trim(),
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
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Ready to switch to solar? Book a free consultation today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <Input name="name" placeholder="Your Name" required className="bg-background border-border" />
            <Input name="phone" placeholder="Phone Number" type="tel" required className="bg-background border-border" />
            <Input name="email" placeholder="Email Address" type="email" required className="bg-background border-border" />
            <Textarea name="message" placeholder="Your Message" rows={4} required className="bg-background border-border resize-none" />
            <Button type="submit" className="w-full gap-2" size="lg" disabled={loading}>
              <Send className="h-4 w-4" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {/* Info */}
          <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
