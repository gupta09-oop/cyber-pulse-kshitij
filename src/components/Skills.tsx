import { Card, CardContent } from "@/components/ui/card";
import { Code, Shield, Database, Monitor, Lightbulb, Users } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      skills: ["Python", "Bash", "SQL", "HTML/CSS", "C", "C++", "MicroPython"]
    },
    {
      title: "Cybersecurity Tools",
      icon: Shield,
      color: "text-secondary",
      skills: ["Wireshark", "Burp Suite", "Nmap", "Metasploit", "Nessus", "OSINT Framework", "Aircrack-ng"]
    },
    {
      title: "Security Specializations",
      icon: Shield,
      color: "text-accent",
      skills: ["Penetration Testing", "Wireless Security", "Phishing Detection", "Vulnerability Assessment", "CTF Competitions", "IoT Security"]
    },
    {
      title: "Hardware & IoT",
      icon: Monitor,
      color: "text-primary",
      skills: ["ESP32", "Raspberry Pi Pico", "Hardware Hacking", "Wireless Protocols", "Embedded Systems"]
    },
    {
      title: "Development & Platforms",
      icon: Database,
      color: "text-secondary",
      skills: ["Streamlit", "React", "MySQL", "Linux", "Windows", "Git"]
    },
    {
      title: "Professional Skills",
      icon: Users,
      color: "text-accent",
      skills: ["Problem-Solving", "Team Collaboration", "Project Management", "Technical Documentation"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">
            Arsenal
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="project-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className={`${category.color} mr-3 h-6 w-6`} />
                  <h3 className={`font-cyber text-lg font-bold ${category.color}`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Terminal Style Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="terminal-border p-6 rounded-lg bg-background/50 backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <span className="text-secondary text-sm font-mono">root@kshitij:~$</span>
            </div>
            <div className="font-cyber text-3xl font-bold text-primary mb-2 animate-fade-in">15+</div>
            <p className="text-muted-foreground font-mono">CTF_challenges_solved</p>
          </div>
          <div className="terminal-border p-6 rounded-lg bg-background/50 backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <span className="text-secondary text-sm font-mono">root@arsenal:~$</span>
            </div>
            <div className="font-cyber text-3xl font-bold text-secondary mb-2 animate-fade-in">20+</div>
            <p className="text-muted-foreground font-mono">security_tools_mastered</p>
          </div>
          <div className="terminal-border p-6 rounded-lg bg-background/50 backdrop-blur-sm">
            <div className="flex items-center mb-2">
              <span className="text-secondary text-sm font-mono">root@certs:~$</span>
            </div>
            <div className="font-cyber text-3xl font-bold text-accent mb-2 animate-fade-in">6</div>
            <p className="text-muted-foreground font-mono">certifications_earned</p>
          </div>
        </div>
      </div>
    </section>
  );
};