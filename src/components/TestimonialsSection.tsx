import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Engr. Adebayo Ogunleye",
    location: "Lekki, Lagos",
    text: "GORATECH installed a 5kVA hybrid system for my home. We haven't used the generator in 3 months. Their audit tool helped me understand exactly what I needed before we even spoke.",
    rating: 5,
  },
  {
    name: "Mrs. Chidinma Eze",
    location: "Enugu",
    text: "Very professional team. They sized our system perfectly — no more guesswork. The solar panels have been running smoothly since installation. Highly recommend!",
    rating: 5,
  },
  {
    name: "Alhaji Musa Ibrahim",
    location: "Abuja",
    text: "I was skeptical at first, but GORATECH delivered beyond expectations. Our office now runs fully on solar and we've cut energy costs by over 70%. Excellent service.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real feedback from homes and businesses powered by GORATECH.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-border bg-card p-8 glow-box flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
