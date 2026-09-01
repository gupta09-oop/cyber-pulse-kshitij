import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Youtube, Github, Terminal } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const categories = [
  "CTF write-ups",
  "Cybersecurity tutorials",
  "Security projects",
  "Technical walkthroughs",
  "Security research",
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">Content & Research</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 h-full flex flex-col">
              <div className="inline-flex p-3 rounded-2xl bg-primary/5 border border-primary/10 w-fit mb-5">
                <BookOpen className="text-primary h-7 w-7" />
              </div>
              <h3 className="font-cyber text-xl font-bold text-primary mb-3">CTF Write-ups & Security Research</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sharing CTF walkthroughs, cybersecurity concepts, security projects, and practical research
                through technical write-ups.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 mb-8">
                {categories.map((item) => (
                  <div key={item} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Button className="cyber-button font-mono mt-auto w-full sm:w-auto" asChild>
                <a href="https://medium.com/@guptakshitij4723" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Read My Medium
                </a>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 h-full flex flex-col">
              <div className="inline-flex p-3 rounded-2xl bg-secondary/5 border border-secondary/10 w-fit mb-5">
                <Youtube className="text-secondary h-7 w-7" />
              </div>
              <h3 className="font-cyber text-xl font-bold text-secondary mb-3">CTF Videos & Walkthroughs</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Documenting CTF problem-solving, cybersecurity projects, technical walkthroughs, and practical
                security learning.
              </p>
              <div className="terminal-border rounded-lg bg-background/30 p-5 mb-8">
                <p className="font-mono text-xs text-muted-foreground mb-1">channel</p>
                <p className="font-cyber text-lg font-bold text-accent">Exploiter404</p>
              </div>
              <Button
                variant="outline"
                className="cyber-button font-mono mt-auto w-full sm:w-auto border-secondary text-secondary hover:text-secondary"
                asChild
              >
                <a href="https://www.youtube.com/@Exploiter404" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> Watch on YouTube
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="glass-card mt-8 p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Terminal className="text-primary h-5 w-5" />
              <h3 className="font-cyber text-2xl font-bold text-primary">Learn. Build. Break. Document.</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Exploring cybersecurity through CTFs, hands-on projects, technical write-ups, and video walkthroughs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" className="cyber-button font-mono" asChild>
                <a href="https://medium.com/@guptakshitij4723" target="_blank" rel="noopener noreferrer">
                  <BookOpen className="mr-2 h-4 w-4" /> Medium
                </a>
              </Button>
              <Button variant="outline" className="cyber-button font-mono" asChild>
                <a href="https://www.youtube.com/@Exploiter404" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> YouTube
                </a>
              </Button>
              <Button variant="outline" className="cyber-button font-mono" asChild>
                <a href="https://github.com/gupta09-oop" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
