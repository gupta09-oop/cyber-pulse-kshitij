import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Calendar, ExternalLink, Eye } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export const Certifications = () => {
  const certifications = [
    { title: "StackSmash CTF Playground", issuer: "HackTheBox", date: "Jul 2025", credential: "Team: thexploiters0909", type: "CTF Competition", color: "text-accent", image: "/lovable-uploads/stacksmash-ctf-certificate.jpg" },
    { title: "Career Essentials in Cybersecurity", issuer: "Microsoft & LinkedIn", date: "Apr 09, 2025", credential: "2f6ed1dbfa510b5d75b6ea1514d20d407e70c335c8b346290b5f18791dbc8514", type: "Professional", color: "text-primary", image: "/lovable-uploads/464dfb19-fc57-42ab-bdb4-9d5762e4988b.png" },
    { title: "Pre Security Learning Path", issuer: "TryHackMe", date: "Feb 20, 2026", credential: "", type: "Learning Path", color: "text-accent", image: "/lovable-uploads/pre-security-tryhackme.jpg" },
    { title: "Introduction to OSINT", issuer: "Security Blue Team", date: "May 14, 2025", credential: "727299518", type: "Professional", color: "text-primary", image: "/lovable-uploads/56933fda-ad55-41ef-b520-ee8ede7a3968.png" },
  ];

  return (
    <section id="certifications" className="py-24 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">Certifications</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <Award className={`${cert.color} h-7 w-7 flex-shrink-0`} />
                  <Badge variant="outline" className={`${cert.color} border-current text-xs`}>{cert.type}</Badge>
                </div>
                <h3 className={`font-cyber text-lg font-bold ${cert.color} mb-2 leading-tight`}>{cert.title}</h3>
                <p className="text-muted-foreground font-mono text-sm mb-3">{cert.issuer}</p>
                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <Calendar className="mr-1.5 h-4 w-4" />
                  {cert.date}
                </div>
                {cert.credential && (
                  <div className="mb-3 p-2 terminal-border rounded bg-background/30 text-center">
                    <p className="text-xs text-muted-foreground mb-0.5">Credential ID</p>
                    <p className="font-mono text-xs text-foreground/80 break-all leading-tight">{cert.credential}</p>
                  </div>
                )}
                {cert.image && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 glass-card hover:border-primary/40 transition-colors font-mono text-sm">
                        <Eye className="h-4 w-4" /> View Certificate
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
                      <DialogHeader>
                        <DialogTitle className="font-cyber text-xl">{cert.title}</DialogTitle>
                      </DialogHeader>
                      <div className="flex justify-center">
                        <img src={cert.image} alt={`${cert.title} Certificate`} className="max-w-full max-h-[70vh] object-contain rounded-lg" />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { value: "4", label: "Certifications Earned", color: "text-primary" },
            { value: "2025", label: "Active Learning Year", color: "text-secondary" },
            { value: "∞", label: "Continuous Learning", color: "text-accent" },
          ].map((stat, i) => (
            <AnimatedSection key={i} delay={0.5 + i * 0.1}>
              <div className="glass-card p-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`text-3xl font-cyber font-bold ${stat.color} mb-2`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
