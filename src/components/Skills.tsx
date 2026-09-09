import { Code, Shield, Network, Wrench } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: Code,
      color: "text-primary",
      skills: ["Python", "C", "C++"],
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "text-secondary",
      skills: [
        "Web Security",
        "OWASP Top 10",
        "Vulnerability Assessment & Penetration Testing",
        "Wi-Fi Security",
        "IDS/IPS",
      ],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "text-accent",
      skills: ["Wireshark", "Nmap", "Burp Suite", "Linux"],
    },
    {
      title: "Networking",
      icon: Network,
      color: "text-primary",
      skills: ["TCP/IP", "Subnetting", "DNS", "DHCP", "VLANs"],
    },
  ];

  const stats = [
    { value: "4+", label: "CTF Competition Placements", color: "text-primary" },
    { value: "5+", label: "Cybersecurity Certifications", color: "text-secondary" },
    { value: "2+", label: "Security Projects", color: "text-accent" },
    { value: "YouTube + Medium", label: "Technical Content", color: "text-primary" },
  ];

  return (
    <section id="skills" className="py-24 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">Skills</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center mb-4">
                  <category.icon className={`${category.color} mr-3 h-6 w-6`} />
                  <h3 className={`font-cyber text-base font-bold ${category.color}`}>{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={0.35 + index * 0.08}>
              <div className="terminal-border bg-background/30 p-5 h-full">
                <div className="font-mono text-xs text-muted-foreground mb-3">kshitij@stats:~$</div>
                <div className={`font-cyber text-xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
