import { Code, Shield, Database, Monitor, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "languages",
      icon: Code,
      color: "text-primary",
      skills: ["Python", "Bash", "SQL", "HTML/CSS", "C", "C++", "MicroPython"],
    },
    {
      title: "offensive_tools",
      icon: Shield,
      color: "text-secondary",
      skills: ["Wireshark", "Burp Suite", "Nmap", "Metasploit", "Nessus", "OSINT Framework", "Aircrack-ng"],
    },
    {
      title: "hardware",
      icon: Monitor,
      color: "text-accent",
      skills: ["ESP32", "Raspberry Pi Pico", "Hardware Hacking", "Wireless Protocols", "Embedded Systems"],
    },
    {
      title: "platforms",
      icon: Database,
      color: "text-primary",
      skills: ["Streamlit", "React", "MySQL", "Linux", "Windows", "Git"],
    },
    {
      title: "soft_skills",
      icon: Users,
      color: "text-muted-foreground",
      skills: ["Problem-Solving", "Team Collaboration", "Project Management", "Adaptability", "Continuous Learning"],
    },
  ];

  const stats = [
    { value: "15+", label: "ctf_challenges_pwned", color: "text-primary" },
    { value: "5+", label: "tools_in_arsenal", color: "text-secondary" },
    { value: "4", label: "certs_acquired", color: "text-accent" },
  ];

  return (
    <section id="skills" className="py-24 px-4 matrix-gradient">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <p className="font-mono text-[10px] text-muted-foreground mb-2">
              <span className="text-secondary">$</span> ls -la ~/arsenal/
            </p>
            <h2 className="section-header text-3xl md:text-4xl font-terminal mb-4">ARSENAL</h2>
            <div className="w-24 h-px bg-primary/30"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="terminal-card p-5 h-full">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/10">
                  <category.icon className={`${category.color} h-4 w-4`} />
                  <span className={`font-mono text-[11px] ${category.color} uppercase tracking-wider`}>
                    {category.title}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={0.5 + i * 0.1}>
              <div className="terminal-card p-5 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className={`font-terminal text-4xl ${stat.color} text-glow-green mb-1`}
                >
                  {stat.value}
                </motion.div>
                <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-wider">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};