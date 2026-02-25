import { ExternalLink, BookOpen, PenTool } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Blog = () => {
  return (
    <section id="blog" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <p className="font-mono text-[10px] text-muted-foreground mb-2">
              <span className="text-secondary">$</span> cat ~/blog/index.md
            </p>
            <h2 className="section-header text-3xl md:text-4xl font-terminal mb-4">BLOG</h2>
            <div className="w-24 h-px bg-primary/30"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="terminal-card max-w-2xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/10 bg-primary/3">
              <div className="w-2 h-2 rounded-full bg-secondary/60" />
              <div className="w-2 h-2 rounded-full bg-accent/60" />
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <span className="ml-2 font-mono text-[10px] text-muted-foreground">medium.com/@guptakshitij4723</span>
            </div>

            <div className="p-8 text-center">
              <div className="flex justify-center mb-5">
                <BookOpen className="text-primary/40 h-10 w-10" />
              </div>

              <h3 className="font-terminal text-2xl text-primary text-glow-green mb-4">SECURITY WRITEUPS</h3>
              <p className="text-muted-foreground font-mono text-xs mb-6 leading-relaxed max-w-md mx-auto">
                <span className="text-secondary">// </span>CTF writeups, security research,<br />
                <span className="text-secondary">// </span>vulnerability analysis & tutorials
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6 max-w-sm mx-auto text-left">
                {["fundamentals", "ctf_writeups", "tool_reviews", "threat_analysis"].map((item, i) => (
                  <div key={i} className="flex items-center font-mono text-[10px] text-muted-foreground">
                    <span className="text-primary mr-1.5">→</span> {item}
                  </div>
                ))}
              </div>

              <a
                href="https://medium.com/@guptakshitij4723"
                target="_blank"
                rel="noopener noreferrer"
                className="hack-btn inline-flex items-center gap-2 px-6 py-2.5 text-xs"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ExternalLink className="h-3.5 w-3.5" /> ./open_blog.sh
                </span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};