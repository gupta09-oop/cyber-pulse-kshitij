import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, PenTool } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Blog = () => {
  return (
    <section id="blog" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">Blog</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="text-center">
            <div className="glass-card max-w-2xl mx-auto p-12">
              <div className="flex justify-center mb-6">
                <div className="relative p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <BookOpen className="text-primary h-12 w-12" />
                  <PenTool className="text-secondary h-6 w-6 absolute -bottom-1 -right-1" />
                </div>
              </div>

              <h3 className="font-cyber text-2xl font-bold text-primary mb-4">Sharing Cybersecurity Insights</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I regularly write about cybersecurity topics, CTF writeups, and security research
                on my blog. From beginner-friendly tutorials to advanced security concepts.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8 max-w-md mx-auto">
                {["Fundamentals & best practices", "CTF writeups & solutions", "Security tool reviews", "Threat analysis"].map((item, i) => (
                  <div key={i} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              <Button className="cyber-button px-8 py-3 text-lg font-mono" asChild>
                <a href="https://medium.com/@guptakshitij4723" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" /> Visit My Blog
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
