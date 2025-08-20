import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, PenTool } from "lucide-react";

export const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">
            Blog
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="text-center">
          <Card className="project-card max-w-2xl mx-auto">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <BookOpen className="text-primary h-16 w-16" />
                  <PenTool className="text-secondary h-8 w-8 absolute -bottom-2 -right-2" />
                </div>
              </div>
              
              <h3 className="font-cyber text-2xl font-bold text-primary mb-4">
                Sharing Cybersecurity Insights
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I regularly write about cybersecurity topics, CTF writeups, and security research 
                on my Hashnode blog. From beginner-friendly tutorials to advanced security concepts, 
                I share my learning journey and insights with the community.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center text-muted-foreground">
                  <span className="text-primary mr-2">•</span>
                  Cybersecurity fundamentals and best practices
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <span className="text-primary mr-2">•</span>
                  CTF challenge writeups and solutions
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <span className="text-primary mr-2">•</span>
                  Security tool reviews and tutorials
                </div>
                <div className="flex items-center justify-center text-muted-foreground">
                  <span className="text-primary mr-2">•</span>
                  Industry trends and threat analysis
                </div>
              </div>

              <Button className="cyber-button px-8 py-3 text-lg font-mono" asChild>
                <a 
                  href="https://hashnode.com/@KshitijGupta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visit My Blog
                </a>
              </Button>

              <p className="text-sm text-muted-foreground mt-4 font-mono">
                hashnode.com/@KshitijGupta
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};