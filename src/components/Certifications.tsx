import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Calendar, ExternalLink, Eye } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "StackSmash CTF Playground",
      issuer: "HackTheBox",
      date: "Jul 2025",
      credential: "Team: thexploiters0909",
      type: "CTF Competition",
      color: "text-accent",
      image: "/lovable-uploads/stacksmash-ctf-certificate.jpg"
    },
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
      title: "Introduction to OSINT",
      issuer: "Security Blue Team",
      date: "May 14, 2025",
      credential: "727299518",
      type: "Professional",
      color: "text-primary",
      image: "/lovable-uploads/56933fda-ad55-41ef-b520-ee8ede7a3968.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">
            Certifications
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="project-card">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <Award className={`${cert.color} h-8 w-8 flex-shrink-0`} />
                  <Badge 
                    variant="outline" 
                    className={`${cert.color} border-current text-xs`}
                  >
                    {cert.type}
                  </Badge>
                </div>

                <h3 className={`font-cyber text-lg font-bold ${cert.color} mb-2 leading-tight`}>
                  {cert.title}
                </h3>

                <p className="text-muted-foreground font-mono text-sm mb-3">
                  {cert.issuer}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="mr-1 h-4 w-4" />
                    {cert.date}
                  </div>
                  {cert.credential && (
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>

                {cert.credential && (
                  <div className="mb-3 p-2 terminal-border rounded text-center">
                    <p className="text-xs text-muted-foreground mb-1">Credential ID</p>
                    <p className="font-mono text-xs text-foreground break-all leading-tight">{cert.credential}</p>
                  </div>
                )}

                {/* View Certificate Button */}
                {cert.image && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 terminal-border rounded-lg hover:bg-primary/10 transition-colors">
                        <Eye className="h-4 w-4" />
                        <span className="font-mono text-sm">View Certificate</span>
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
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="terminal-border p-6 rounded-lg">
            <div className="text-3xl font-cyber font-bold text-primary mb-2">6</div>
            <div className="text-muted-foreground">Certifications Earned</div>
          </div>
          <div className="terminal-border p-6 rounded-lg">
            <div className="text-3xl font-cyber font-bold text-secondary mb-2">2025</div>
            <div className="text-muted-foreground">Active Learning Year</div>
          </div>
          <div className="terminal-border p-6 rounded-lg">
            <div className="text-3xl font-cyber font-bold text-accent mb-2">∞</div>
            <div className="text-muted-foreground">Continuous Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};