import { Code, Shield, Database, Monitor, Users } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      borderColor: "border-primary/20",
      skills: ["Python", "Bash", "SQL", "HTML/CSS", "C", "C++", "MicroPython"],
    },
    {
      title: "Cybersecurity Tools",
      icon: Shield,
      color: "text-secondary",
      borderColor: "border-secondary/20",
      skills: ["Wireshark", "Burp Suite", "Nmap", "Metasploit", "Nessus", "OSINT Framework", "Aircrack-ng"],
    },
    {
      title: "Hardware & IoT",
      icon: Monitor,
      color: "text-primary",
      borderColor: "border-primary/20",
      skills: ["ESP32", "Raspberry Pi Pico", "Hardware Hacking", "Wireless Protocols", "Embedded Systems"],
    },
    {
      title: "Development & Platforms",
      icon: Database,
      color: "text-secondary",
      borderColor: "border-secondary/20",
      skills: ["Streamlit", "React", "MySQL", "Linux", "Windows", "Git"],
    },
    {
      title: "Professional Skills",
      icon: Users,
      color: "text-accent",
      borderColor: "border-accent/20",
      skills: ["Problem-Solving", "Team Collaboration", "Project Management", "Adaptability", "Continuous Learning"],
    },
  ];

  const stats = [
    { value: "15+", label: "CTF_challenges_solved", color: "text-primary", prompt: "root@kshitij:~$" },
    { value: "5+", label: "security_tools_mastered", color: "text-secondary", prompt: "root@arsenal:~$" },
    { value: "4", label: "certifications_earned", color: "text-accent", prompt: "root@certs:~$" },
  ];

  return (
    <section id="skills" className="py-24 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">Arsenal</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={0.5 + i * 0.1}>
              <div className="glass-card p-6 text-center">
                <span className="text-secondary text-xs font-mono block mb-2">{stat.prompt}</span>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className={`font-cyber text-4xl font-bold ${stat.color} mb-2`}
                >
                  {stat.value}
                </motion.div>
                <p className="text-muted-foreground font-mono text-sm">{stat.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
