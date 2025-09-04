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
      skills: ["Problem-Solving", "Team Collaboration", "Project Management", "Technical Documentation", "Ethical Hacking Principles"]
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

        {/* Portfolio Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="font-cyber text-3xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">CTF Challenges Solved</p>
          </div>
          <div className="text-center">
            <div className="font-cyber text-3xl font-bold text-secondary mb-2">20+</div>
            <p className="text-muted-foreground">Security Tools Mastered</p>
          </div>
          <div className="text-center">
            <div className="font-cyber text-3xl font-bold text-accent mb-2">4</div>
            <p className="text-muted-foreground">Certifications Earned</p>
          </div>
        </div>
      </div>
    </section>
  );
};