import { ExternalLink, ArrowRight, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import portfolioImg1 from "@/assets/portfolio-3kva.jpg";
import portfolioImg2 from "@/assets/portfolio-5kva.jpg";
import portfolioImg3 from "@/assets/portfolio-10kva.jpg";
import heroImg from "@/assets/tremo-hero.jpg";

const projects = [
  {
    image: portfolioImg1,
    title: "3KVA Solar Home System",
    description: "Complete off-grid solar installation for a residential home — includes battery bank, inverter, and panel mounting.",
    tag: "Solar Installation",
    tagColor: "text-orange-400",
    tagBg: "bg-orange-400/10 border-orange-400/20",
  },
  {
    image: portfolioImg2,
    title: "5KVA Hybrid Office Setup",
    description: "Hybrid solar system for a small business — seamlessly switches between grid and solar with intelligent load management.",
    tag: "Energy Management",
    tagColor: "text-primary",
    tagBg: "bg-primary/10 border-primary/20",
  },
  {
    image: portfolioImg3,
    title: "10KVA Industrial Solution",
    description: "Large-scale power solution for an SME — custom-engineered for heavy equipment and 24/7 operation reliability.",
    tag: "Industrial Power",
    tagColor: "text-green-400",
    tagBg: "bg-green-400/10 border-green-400/20",
  },
  {
    image: heroImg,
    title: "Tremokearo Website",
    description: "A fully custom, responsive website with modern UI/UX, smooth animations, and complete SEO optimization.",
    tag: "Web Development",
    tagColor: "text-accent",
    tagBg: "bg-accent/10 border-accent/20",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-medium mb-6"
            style={{ background: "hsl(var(--accent) / 0.08)" }}>
            <Layers className="h-3 w-3" />
            Our Work
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-5">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Real solutions we've delivered — from solar installations to digital products.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300 card-shadow"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-xs font-medium ${project.tagBg} ${project.tagColor}`}>
                  {project.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display font-bold text-lg mb-2 group-hover:text-gradient transition-all duration-300">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 rounded-lg border-border/60 hover:border-primary/50 group/btn"
                  asChild
                >
                  <Link to="/portfolio">
                    View Project
                    <ExternalLink className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="gap-2 rounded-xl border-border/80 hover:border-primary/50 px-10" style={{ height: "52px" }} asChild>
            <Link to="/portfolio">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
