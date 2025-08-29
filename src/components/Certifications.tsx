import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Calendar, ExternalLink, Eye, Terminal, Shield, Trophy, Zap } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Career Essentials in Cybersecurity",
      issuer: "Microsoft & LinkedIn",
      date: "Apr 09, 2025",
      credential: "2f6ed1dbfa510b5d75b6ea1514d20d407e70c335c8b346290b5f18791dbc8514",
      type: "Professional",
      color: "text-primary",
      image: "/lovable-uploads/464dfb19-fc57-42ab-bdb4-9d5762e4988b.png"
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      issuer: "Tata Forage",
      date: "Feb 15, 2025",
      type: "Simulation",
      color: "text-secondary",
      image: "/lovable-uploads/09236005-af4d-4c89-a0ad-3240b07af8d0.png"
    },
    {
      title: "Cyber Job Simulation",
      issuer: "Deloitte Forage",
      date: "Jun 17, 2025",
      type: "Simulation",
      color: "text-accent",
      image: "/lovable-uploads/df256736-1337-45c3-a6ce-2ae9c2110fde.png"
    },
    {
      title: "TryHackMe Certificate",
      issuer: "TryHackMe",
      date: "Jul 25, 2025",
      credential: "THM-AW3FPSEPC",
      type: "Platform",
      color: "text-primary"
    },
    {
      title: "TryHackMe Advent of Cyber 2024",
      issuer: "TryHackMe",
      date: "Jul 25, 2025",
      credential: "THM-AW3FPS5EPC",
      type: "Achievement",
      color: "text-accent",
      image: "/lovable-uploads/939e9026-d747-407f-af32-55807e9beb61.png"
    },
    {
      title: "AI for Cybersecurity & Bug Bounty Hunting",
      issuer: "Udemy",
      date: "Jul 14, 2025",
      credential: "UC-18cdf247-7430-4ea9-807c-1d6ac8af2667",
      type: "Course",
      color: "text-secondary",
      image: "/lovable-uploads/377293a3-d440-48ee-93d5-94b782f5b615.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-muted/5 relative overflow-hidden">
      {/* Matrix Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-28 left-14 w-1 h-1 bg-primary animate-pulse-glow rounded-full"></div>
        <div className="absolute top-52 right-20 w-1.5 h-1.5 bg-secondary animate-pulse-glow rounded-full animation-delay-1000"></div>
        <div className="absolute bottom-28 left-1/4 w-1 h-1 bg-accent animate-pulse-glow rounded-full animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Shield className="text-primary mr-3 h-8 w-8 animate-pulse" />
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold glow-text">
              &gt; CREDENTIALS.cert
            </h2>
            <Trophy className="text-secondary ml-3 h-8 w-8 animate-pulse" />
          </div>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse"></div>
          <div className="font-mono text-accent text-sm mt-4">
            [ LOADING CERTIFICATION DATABASE... ]
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="terminal-border rounded-lg bg-background/80 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Terminal Header */}
              <div className={`border-b border-${cert.color.split('-')[1]}/30 p-2 bg-${cert.color.split('-')[1]}/5`}>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse animation-delay-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse animation-delay-1000"></div>
                  <div className="ml-2 font-mono text-xs text-muted-foreground">
                    cert_{cert.type.toLowerCase()}.sh
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Award className={`${cert.color} h-8 w-8 flex-shrink-0 group-hover:animate-pulse transition-all duration-300`} />
                  <Badge 
                    variant="outline" 
                    className={`${cert.color} border-current text-xs bg-background/50`}
                  >
                    [{cert.type.toUpperCase()}]
                  </Badge>
                </div>

                <h3 className={`font-cyber text-lg font-bold ${cert.color} mb-2 leading-tight group-hover:glow-text transition-all duration-300`}>
                  {cert.title}
                </h3>

                <p className="text-muted-foreground font-mono text-sm mb-3 bg-background/30 p-2 rounded border border-primary/10">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="mr-1 h-4 w-4" />
                    {cert.date}
                  </div>
                  {cert.credential && (
                    <Zap className="h-4 w-4 text-accent animate-pulse" />
                  )}
                </div>

                {cert.credential && (
                  <div className="mb-3 p-3 terminal-border rounded bg-gradient-to-r from-primary/5 to-secondary/5">
                    <p className="text-xs text-muted-foreground mb-1">Credential_ID</p>
                    <p className="font-mono text-xs text-foreground break-all">{cert.credential}</p>
                  </div>
                )}

                {cert.image && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 terminal-border rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group/btn">
                        <Eye className="h-4 w-4 group-hover/btn:animate-pulse" />
                        <span className="font-mono text-sm">View_Certificate.sh</span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                      <DialogHeader>
                        <DialogTitle className="font-cyber text-xl">
                          {cert.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="flex justify-center">
                        <img 
                          src={cert.image} 
                          alt={`${cert.title} Certificate`}
                          className="max-w-full max-h-[70vh] object-contain rounded-lg"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Terminal */}
        <div className="mt-16">
          <div className="terminal-border rounded-lg bg-background/80 backdrop-blur-sm overflow-hidden">
            <div className="border-b border-primary/30 p-3 bg-primary/5">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-1000"></div>
                <div className="ml-4 font-mono text-xs text-muted-foreground">
                  root@cyberpulse:~$ ./cert_stats.sh
                </div>
              </div>
            </div>
            <div className="p-8 grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 terminal-border rounded-lg bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-all duration-500 group">
                <div className="text-4xl font-cyber font-bold text-primary mb-2 group-hover:glow-text transition-all duration-300">6</div>
                <div className="text-muted-foreground font-mono text-sm">Certifications.count()</div>
              </div>
              <div className="p-6 terminal-border rounded-lg bg-gradient-to-br from-secondary/5 to-transparent hover:from-secondary/10 transition-all duration-500 group">
                <div className="text-4xl font-cyber font-bold text-secondary mb-2 group-hover:glow-text transition-all duration-300">2025</div>
                <div className="text-muted-foreground font-mono text-sm">Learning.year()</div>
              </div>
              <div className="p-6 terminal-border rounded-lg bg-gradient-to-br from-accent/5 to-transparent hover:from-accent/10 transition-all duration-500 group">
                <div className="text-4xl font-cyber font-bold text-accent mb-2 group-hover:glow-text transition-all duration-300">∞</div>
                <div className="text-muted-foreground font-mono text-sm">Growth.loop()</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};