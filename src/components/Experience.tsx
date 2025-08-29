import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, Shield, Trophy, Terminal, Zap, Code, Target } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/5 relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-1.5 h-1.5 bg-primary animate-pulse-glow rounded-full"></div>
        <div className="absolute top-48 right-20 w-1 h-1 bg-secondary animate-pulse-glow rounded-full animation-delay-1000"></div>
        <div className="absolute bottom-24 left-1/3 w-1 h-1 bg-accent animate-pulse-glow rounded-full animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Zap className="text-primary mr-3 h-8 w-8 animate-pulse" />
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold glow-text">
              &gt; EXPERIENCE.log
            </h2>
            <Target className="text-secondary ml-3 h-8 w-8 animate-pulse" />
          </div>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse"></div>
          <div className="font-mono text-accent text-sm mt-4">
            [ SCANNING WORK HISTORY... ]
          </div>
        </div>

        <div className="space-y-8">
          {/* Professional Experience - Terminal Window */}
          <div className="terminal-border rounded-lg bg-background/80 backdrop-blur-sm overflow-hidden">
            {/* Terminal Header */}
            <div className="border-b border-primary/30 p-3 bg-primary/5">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-1000"></div>
                <div className="ml-4 font-mono text-xs text-muted-foreground">
                  root@cyberpulse:~$ cat professional_experience.txt
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center mb-4 lg:mb-0">
                  <Terminal className="text-primary mr-3 h-6 w-6 animate-pulse" />
                  <div>
                    <h3 className="font-cyber text-2xl font-bold text-primary glow-text">
                      CYBERSECURITY_INTERN.exe
                    </h3>
                    <p className="text-accent font-mono">
                      Let's Give Hope Foundation
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground bg-background/50 px-3 py-2 rounded border border-primary/20">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="font-mono">May 2024 – June 2024</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="terminal-border p-4 rounded-lg bg-gradient-to-br from-secondary/5 to-transparent hover:from-secondary/10 transition-all duration-500 group">
                  <Shield className="text-secondary mb-2 h-6 w-6 group-hover:animate-pulse transition-all duration-300" />
                  <h4 className="font-cyber text-lg font-bold text-secondary mb-2 group-hover:glow-text transition-all duration-300">
                    Workshop_Leadership.init()
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Conducted phishing & digital hygiene awareness workshops for diverse audiences
                  </p>
                </div>
                
                <div className="terminal-border p-4 rounded-lg bg-gradient-to-br from-accent/5 to-transparent hover:from-accent/10 transition-all duration-500 group">
                  <Trophy className="text-accent mb-2 h-6 w-6 group-hover:animate-pulse transition-all duration-300" />
                  <h4 className="font-cyber text-lg font-bold text-accent mb-2 group-hover:glow-text transition-all duration-300">
                    Ethical_Hacking.demo()
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Led ethical hacking demonstrations to showcase security vulnerabilities
                  </p>
                </div>
                
                <div className="terminal-border p-4 rounded-lg bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-all duration-500 group">
                  <Code className="text-primary mb-2 h-6 w-6 group-hover:animate-pulse transition-all duration-300" />
                  <h4 className="font-cyber text-lg font-bold text-primary mb-2 group-hover:glow-text transition-all duration-300">
                    Content_Creation.run()
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Created training content for non-technical users on cybersecurity best practices
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTF Experience - Enhanced Terminal */}
          <div className="terminal-border rounded-lg bg-background/80 backdrop-blur-sm overflow-hidden">
            {/* Terminal Header */}
            <div className="border-b border-secondary/30 p-3 bg-secondary/5">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-1000"></div>
                <div className="ml-4 font-mono text-xs text-muted-foreground">
                  root@cyberpulse:~$ ./ctf_practice.sh --verbose
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center mb-6">
                <Trophy className="text-secondary mr-3 h-6 w-6 animate-pulse" />
                <div>
                  <h3 className="font-cyber text-2xl font-bold text-secondary glow-text">
                    CTF_CHALLENGES.sys
                  </h3>
                  <p className="text-accent font-mono">
                    Continuous Learning & Skill Development
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="font-mono text-sm space-y-1 bg-background/30 p-4 rounded border border-primary/20">
                  <div className="text-primary">&gt; Initializing CTF environment...</div>
                  <div className="text-secondary">&gt; Loading challenge categories...</div>
                  <div className="text-accent">&gt; Status: ACTIVELY_PARTICIPATING</div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed border-l-2 border-secondary/50 pl-4">
                  Actively participating in Capture The Flag (CTF) competitions and cybersecurity challenges, 
                  focusing on practical application of security concepts across multiple domains.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div className="space-y-4">
                    <h4 className="font-cyber text-lg font-bold text-primary flex items-center mb-3">
                      <Code className="mr-2 h-5 w-5 animate-pulse" />
                      Challenge_Categories.list()
                    </h4>
                    <div className="space-y-3">
                      {[
                        { name: "Cryptography & Encryption", color: "text-primary" },
                        { name: "Web Security & OWASP Top 10", color: "text-secondary" },
                        { name: "Digital Forensics & Investigation", color: "text-accent" },
                        { name: "Network Security Analysis", color: "text-primary" }
                      ].map((category, idx) => (
                        <div key={idx} className="flex items-center p-2 terminal-border rounded hover:bg-primary/5 transition-all duration-300 group">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:animate-pulse"></div>
                          <span className={`${category.color} group-hover:glow-text transition-all duration-300`}>
                            {category.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-cyber text-lg font-bold text-secondary flex items-center mb-3">
                      <Terminal className="mr-2 h-5 w-5 animate-pulse" />
                      Tools_Arsenal.load()
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Linux', 'Python', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 'Nessus', 'Maltego'].map((tool, idx) => (
                        <span 
                          key={tool} 
                          className="skill-tag hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300 animate-fade-in"
                          style={{ animationDelay: `${idx * 100}ms` }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};