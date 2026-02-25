import { Briefcase, Calendar, Shield, Trophy } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">Experience</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass-card p-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
              <div className="flex items-center mb-4 lg:mb-0">
                <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 mr-4">
                  <Briefcase className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-cyber text-2xl font-bold text-primary">Cybersecurity Workshop Intern</h3>
                  <p className="text-accent font-mono text-sm">Let's Give Hope Foundation</p>
                </div>
              </div>
              <div className="flex items-center text-muted-foreground glass-card px-4 py-2">
                <Calendar className="mr-2 h-4 w-4" />
                <span className="font-mono text-sm">May 2024 – June 2024</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Shield, color: "text-secondary", title: "Workshop Leadership", desc: "Conducted phishing & digital hygiene awareness workshops for diverse audiences" },
                { icon: Trophy, color: "text-accent", title: "Ethical Hacking Demos", desc: "Led ethical hacking demonstrations to showcase security vulnerabilities" },
                { icon: Briefcase, color: "text-primary", title: "Content Creation", desc: "Created training content for non-technical users on cybersecurity best practices" },
              ].map((item, i) => (
                <div key={i} className="glass-card p-5">
                  <item.icon className={`${item.color} mb-3 h-5 w-5`} />
                  <h4 className={`font-cyber text-sm font-bold ${item.color} mb-2`}>{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
