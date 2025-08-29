import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, PenTool, Terminal, FileText, Edit3 } from "lucide-react";

export const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4 relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-20 w-1 h-1 bg-primary animate-pulse-glow rounded-full"></div>
        <div className="absolute top-48 right-24 w-1.5 h-1.5 bg-secondary animate-pulse-glow rounded-full animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-accent animate-pulse-glow rounded-full animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Terminal className="text-primary mr-3 h-8 w-8 animate-pulse" />
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold glow-text">
              &gt; BLOG.md
            </h2>
            <Edit3 className="text-secondary ml-3 h-8 w-8 animate-pulse" />
          </div>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse"></div>
          <div className="font-mono text-accent text-sm mt-4">
            [ LOADING CONTENT REPOSITORY... ]
          </div>
        </div>

        <div className="text-center">
          <div className="terminal-border rounded-lg bg-background/80 backdrop-blur-sm max-w-3xl mx-auto overflow-hidden">
            {/* Terminal Header */}
            <div className="border-b border-primary/30 p-3 bg-primary/5">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-1000"></div>
                <div className="ml-4 font-mono text-xs text-muted-foreground">
                  root@cyberpulse:~$ cat blog_content.txt
                </div>
              </div>
            </div>

            <div className="p-12">
              <div className="flex justify-center mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-full scale-150 animate-pulse opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <BookOpen className="text-primary h-16 w-16 relative z-10 group-hover:animate-pulse transition-all duration-300" />
                  <PenTool className="text-secondary h-8 w-8 absolute -bottom-2 -right-2 z-10 group-hover:animate-pulse transition-all duration-300" />
                </div>
              </div>
              
              <h3 className="font-cyber text-3xl font-bold text-primary mb-4 glow-text">
                CONTENT_SHARING.init()
              </h3>
              
              <div className="bg-background/30 p-4 rounded border border-primary/20 mb-8 font-mono text-sm text-left">
                <div className="text-primary">&gt; Initializing blog connection...</div>
                <div className="text-secondary">&gt; Platform: Hashnode</div>
                <div className="text-accent">&gt; Status: ACTIVE_WRITER</div>
                <div className="text-primary">&gt; Content focus: Cybersecurity insights</div>
              </div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed border-l-2 border-primary/50 pl-4">
                Regularly publishing cybersecurity insights, CTF writeups, and security research 
                on Hashnode. From beginner-friendly tutorials to advanced security concepts, 
                sharing knowledge with the global cybersecurity community.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: FileText, text: "Cybersecurity fundamentals and best practices", color: "text-primary" },
                  { icon: Terminal, text: "CTF challenge writeups and solutions", color: "text-secondary" },
                  { icon: BookOpen, text: "Security tool reviews and tutorials", color: "text-accent" },
                  { icon: Edit3, text: "Industry trends and threat analysis", color: "text-primary" }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center text-muted-foreground p-3 terminal-border rounded hover:bg-primary/5 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <item.icon className={`${item.color} mr-3 h-5 w-5 group-hover:animate-pulse transition-all duration-300`} />
                    <span className="group-hover:text-foreground transition-colors duration-300">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button className="cyber-button px-8 py-3 text-lg font-mono group/btn mb-6" asChild>
                <a 
                  href="https://hashnode.com/@KshitijGupta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5 group-hover/btn:animate-pulse" />
                  Access_Blog.sh
                </a>
              </Button>

              <div className="p-3 bg-background/30 rounded border border-secondary/20 font-mono text-sm">
                <div className="text-secondary">hashnode.com/@KshitijGupta</div>
                <div className="text-accent mt-1">Status: Publishing regularly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};