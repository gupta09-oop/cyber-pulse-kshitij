import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Award, Calendar, Eye } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export const Certifications = () => {
  const certifications = [
    { title: "StackSmash CTF Playground", issuer: "HackTheBox", date: "Jul 2025", credential: "Team: thexploiters0909", type: "CTF", color: "text-secondary", image: "/lovable-uploads/stacksmash-ctf-certificate.jpg" },
    { title: "Career Essentials in Cybersecurity", issuer: "Microsoft & LinkedIn", date: "Apr 09, 2025", credential: "2f6ed1dbfa510b5d75b6ea1514d20d407e70c335c8b346290b5f18791dbc8514", type: "CERT", color: "text-primary", image: "/lovable-uploads/464dfb19-fc57-42ab-bdb4-9d5762e4988b.png" },
    { title: "Pre Security Learning Path", issuer: "TryHackMe", date: "Feb 20, 2026", credential: "", type: "PATH", color: "text-accent", image: "/lovable-uploads/pre-security-tryhackme.jpg" },
    { title: "Introduction to OSINT", issuer: "Security Blue Team", date: "May 14, 2025", credential: "727299518", type: "CERT", color: "text-primary", image: "/lovable-uploads/56933fda-ad55-41ef-b520-ee8ede7a3968.png" },
  ];

  return (
    <section id="certifications" className="py-24 px-4 matrix-gradient">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <p className="font-mono text-[10px] text-muted-foreground mb-2">
              <span className="text-secondary">$</span> gpg --list-keys --keyring ~/certs/
            </p>
            <h2 className="section-header text-3xl md:text-4xl font-terminal mb-4">CERTIFICATIONS</h2>
            <div className="w-24 h-px bg-primary/30"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="terminal-card p-5 h-full">
                <div className="flex items-start justify-between mb-3">
                  <Award className={`${cert.color} h-5 w-5 flex-shrink-0`} />
                  <span className={`font-mono text-[9px] ${cert.color} uppercase tracking-widest border border-current/20 px-2 py-0.5`}>
                    {cert.type}
                  </span>
                </div>
                <h3 className={`font-terminal text-lg ${cert.color} mb-1 leading-tight`}>{cert.title}</h3>
                <p className="text-muted-foreground font-mono text-[10px] mb-2">{cert.issuer}</p>
                <div className="flex items-center text-muted-foreground text-[10px] font-mono mb-3">
                  <Calendar className="mr-1 h-3 w-3" />
                  {cert.date}
                </div>
                {cert.credential && (
                  <div className="mb-3 p-2 border border-primary/10 bg-primary/3">
                    <p className="text-[9px] text-muted-foreground mb-0.5 font-mono uppercase tracking-wider">credential_id</p>
                    <p className="font-mono text-[10px] text-foreground/70 break-all leading-tight">{cert.credential}</p>
                  </div>
                )}
                {cert.image && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="w-full mt-2 hack-btn flex items-center justify-center gap-2 px-4 py-2 text-[10px]">
                        <span className="relative z-10 flex items-center gap-2">
                          <Eye className="h-3 w-3" /> view_certificate
                        </span>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-background border-primary/20">
                      <DialogHeader>
                        <DialogTitle className="font-terminal text-xl text-primary">{cert.title}</DialogTitle>
                      </DialogHeader>
                      <div className="flex justify-center">
                        <img src={cert.image} alt={`${cert.title} Certificate`} className="max-w-full max-h-[70vh] object-contain" />
                      </div>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            { value: "4", label: "certs_earned", color: "text-primary" },
            { value: "2026", label: "active_year", color: "text-secondary" },
            { value: "∞", label: "learning_mode", color: "text-accent" },
          ].map((stat, i) => (
            <AnimatedSection key={i} delay={0.5 + i * 0.1}>
              <div className="terminal-card p-5 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className={`text-3xl font-terminal ${stat.color} text-glow-green mb-1`}
                >
                  {stat.value}
                </motion.div>
                <div className="text-muted-foreground font-mono text-[10px] uppercase tracking-wider">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};