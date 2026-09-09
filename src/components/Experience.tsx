import { Briefcase, Calendar, Flag, Users, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const experiences = [
  {
    icon: Flag,
    color: "text-primary",
    role: "CTF Challenge Developer",
    org: "UNI6CTF",
    period: null,
    points: [
      "Design and develop original CTF challenges, research vulnerabilities, build and validate challenge environments, and create technical documentation and write-ups.",
    ],
  },
  {
    icon: Shield,
    color: "text-secondary",
    role: "CTF Challenge & Platform Developer",
    org: "LPU × Play 2 Unite",
    period: "2026",
    points: [
      "Developed CTF challenges and supported platform deployment for a university cybersecurity event; assisted participants with technical issues, queries, and guided hints.",
    ],
  },
  {
    icon: Users,
    color: "text-accent",
    role: "Campus Ambassador",
    org: "Sturtle Security & ThunderCipher",
    period: "2026 – Present",
    points: [
      "Supported cybersecurity events and CTF outreach, connected students with security learning resources, and contributed to community activities.",
      "Associated XPLOIT404 with Sturtle Security and CyberHunt with ThunderCipher.",
    ],
  },
  {
    icon: Briefcase,
    color: "text-primary",
    role: "Cybersecurity Workshop Intern",
    org: "Let's Give Hope Foundation",
    period: "May 2024 – June 2024",
    points: [
      "Conducted cybersecurity awareness workshops, demonstrated ethical hacking concepts in controlled environments, and created educational content on cybersecurity best practices.",
    ],
  },
];

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

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, i) => (
            <AnimatedSection key={exp.role} delay={i * 0.1}>
              <div className={`glass-card h-full ${i === experiences.length - 1 ? "p-5 opacity-90" : "p-6"}`}>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-xl bg-background/50 ${exp.color}`}>
                      <exp.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className={`font-cyber text-lg font-bold ${exp.color}`}>{exp.role}</h3>
                      <p className="text-accent font-mono text-sm">{exp.org}</p>
                    </div>
                  </div>
                </div>
                {exp.period && (
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span className="font-mono text-xs">{exp.period}</span>
                  </div>
                )}
                <ul className="space-y-2">
                  {exp.points.map((p) => (
                    <li key={p} className="flex text-sm text-muted-foreground leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2.5 mt-1.5 flex-shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
