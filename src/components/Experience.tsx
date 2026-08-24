import { Briefcase, Calendar, Flag, Users, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const experiences = [
  {
    icon: Flag,
    color: "text-primary",
    role: "CTF Challenge Developer",
    org: "UNI6CTF",
    period: "2026",
    points: [
      "Designed and developed CTF challenges across Web Security, Forensics, Cryptography, OSINT and Networking.",
      "Tested and validated challenge logic, difficulty balance and solvability before release.",
      "Wrote clear challenge descriptions and structured solution paths for participants.",
    ],
  },
  {
    icon: Shield,
    color: "text-secondary",
    role: "CTF Event Contributor",
    org: "LPU x Play 2 Unite CTF",
    period: "2026",
    points: [
      "Supported the setup and smooth execution of the on-campus CTF competition.",
      "Assisted with challenge deployment, participant guidance and live issue resolution.",
    ],
  },
  {
    icon: Users,
    color: "text-accent",
    role: "Campus Ambassador",
    org: "Sturtle Security & ThunderCipher",
    period: "2025 – Present",
    points: [
      "Promoted cybersecurity learning programs and CTF participation across campus.",
      "Coordinated outreach, event awareness and student onboarding for security challenges.",
    ],
  },
  {
    icon: Briefcase,
    color: "text-primary",
    role: "Digital Literacy & Cybersecurity Workshop Intern",
    org: "Let's Give Hope Foundation",
    period: "May 2024 – June 2024",
    points: [
      "Conducted phishing awareness and digital hygiene workshops for non-technical audiences.",
      "Led ethical hacking demonstrations to explain real-world security risks.",
      "Created training material focused on practical, everyday security practices.",
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
              <div className="glass-card p-6 h-full">
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
                <div className="flex items-center text-muted-foreground mb-4">
                  <Calendar className="mr-2 h-4 w-4" />
                  <span className="font-mono text-xs">{exp.period}</span>
                </div>
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
