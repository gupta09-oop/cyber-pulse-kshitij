import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar, Shield, Trophy } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">
            Experience
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Professional Experience */}
          <Card className="project-card">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center mb-4 lg:mb-0">
                  <Briefcase className="text-primary mr-3 h-6 w-6" />
                  <div>
                    <h3 className="font-cyber text-2xl font-bold text-primary">
                      Cybersecurity Workshop Intern
                    </h3>
                    <p className="text-accent font-mono">
                      Let's Give Hope Foundation
                    </p>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="font-mono">May 2024 – June 2024</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="terminal-border p-4 rounded-lg">
                  <Shield className="text-secondary mb-2 h-6 w-6" />
                  <h4 className="font-cyber text-lg font-bold text-secondary mb-2">
                    Workshop Leadership
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Conducted phishing & digital hygiene awareness workshops for diverse audiences
                  </p>
                </div>
                
                <div className="terminal-border p-4 rounded-lg">
                  <Trophy className="text-accent mb-2 h-6 w-6" />
                  <h4 className="font-cyber text-lg font-bold text-accent mb-2">
                    Ethical Hacking Demos
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Led ethical hacking demonstrations to showcase security vulnerabilities
                  </p>
                </div>
                
                <div className="terminal-border p-4 rounded-lg">
                  <Briefcase className="text-primary mb-2 h-6 w-6" />
                  <h4 className="font-cyber text-lg font-bold text-primary mb-2">
                    Content Creation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Created training content for non-technical users on cybersecurity best practices
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTF & Practice Experience */}
          <Card className="project-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Trophy className="text-secondary mr-3 h-6 w-6" />
                <div>
                  <h3 className="font-cyber text-2xl font-bold text-secondary">
                    CTF Challenges & Cybersecurity Practice
                  </h3>
                  <p className="text-accent font-mono">
                    Continuous Learning & Skill Development
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Actively participating in Capture The Flag (CTF) competitions and cybersecurity challenges, 
                  focusing on practical application of security concepts across multiple domains.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-cyber text-lg font-bold text-primary mb-3">
                      Challenge Categories
                    </h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Cryptography & Encryption
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Web Security & OWASP Top 10
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Digital Forensics & Investigation
                      </li>
                      <li className="flex items-center">
                        <span className="text-primary mr-2">•</span>
                        Network Security Analysis
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-cyber text-lg font-bold text-secondary mb-3">
                      Tools & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['Linux', 'Python', 'Metasploit', 'Burp Suite', 'Wireshark', 'Nmap', 'Nessus', 'Maltego'].map((tool) => (
                        <span key={tool} className="skill-tag">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};