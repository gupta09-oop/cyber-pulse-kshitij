import { Briefcase, Calendar, Shield, Trophy } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 matrix-gradient">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <p className="font-mono text-[10px] text-muted-foreground mb-2">
              <span className="text-secondary">$</span> cat ~/.experience/work.log
            </p>
            <h2 className="section-header text-3xl md:text-4xl font-terminal mb-4">EXPERIENCE</h2>
            <div className="w-24 h-px bg-primary/30"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="terminal-card">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/10 bg-primary/3">
              <div className="w-2 h-2 rounded-full bg-secondary/60" />
              <div className="w-2 h-2 rounded-full bg-accent/60" />
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <span className="ml-2 font-mono text-[10px] text-muted-foreground">~/experience/cybersecurity-intern</span>
            </div>

            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div className="flex items-center gap-3 mb-3 lg:mb-0">
                  <Briefcase className="text-primary h-5 w-5 flex-shrink-0" />
                  <div>
                    <h3 className="font-terminal text-xl text-primary text-glow-green">Cybersecurity Workshop Intern</h3>
                    <p className="text-accent font-mono text-[10px] uppercase tracking-wider">Let's Give Hope Foundation</p>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground font-mono text-[10px] terminal-card px-3 py-1.5">
                  <Calendar className="mr-1.5 h-3 w-3" />
                  May 2024 – June 2024
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-3">
                {[
                  { icon: Shield, color: "text-primary", title: "workshop_lead", desc: "Phishing & digital hygiene awareness workshops for diverse audiences" },
                  { icon: Trophy, color: "text-secondary", title: "ethical_hacking", desc: "Led ethical hacking demos showcasing security vulnerabilities" },
                  { icon: Briefcase, color: "text-accent", title: "content_ops", desc: "Created training content for non-technical users on security best practices" },
                ].map((item, i) => (
                  <div key={i} className="terminal-card p-4">
                    <item.icon className={`${item.color} mb-2 h-4 w-4`} />
                    <h4 className={`font-mono text-[10px] ${item.color} mb-1.5 uppercase tracking-wider`}>{item.title}</h4>
                    <p className="text-[11px] text-muted-foreground font-mono leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};