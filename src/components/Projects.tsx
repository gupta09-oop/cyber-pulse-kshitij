import { ExternalLink, Github, Shield, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Projects = () => {
  const projects = [
    {
      title: "WiFi Security Lab — ESP32",
      status: "[COMPLETE]",
      statusColor: "text-primary",
      description: "Controlled lab simulation of WiFi security attacks: Evil Twin & Deauthentication using ESP32. Explored wireless vulnerabilities & defensive countermeasures.",
      tech: ["WiFi Security", "ESP32", "Ethical Hacking", "IoT"],
      github: "https://github.com/gupta09-oop/-WiFi-Security-Evil-Twin-Deauthentication-Simulation-ESP32-.git",
      demo: null,
      features: ["Evil Twin attack simulation", "Deauth attack testing", "ESP32 security research", "Defense analysis"],
    },
    {
      title: "Password Strength Analyzer",
      status: "[COMPLETE]",
      statusColor: "text-primary",
      description: "Web security tool evaluating password strength & checking breaches via HaveIBeenPwned API. Real-time feedback on password security & cracking time estimation.",
      tech: ["HTML", "CSS", "JavaScript", "API"],
      github: "#",
      demo: "https://passwordstrengthcheckerbykshitij.netlify.app",
      features: ["Strength analysis", "Crack time estimation", "Breach database check", "Security tips"],
    },
    {
      title: "USB Rubber Ducky — RPi Pico",
      status: "[UPCOMING]",
      statusColor: "text-accent",
      description: "Hardware pentest tool using Raspberry Pi Pico to simulate USB HID attacks. Physical security vulnerability exploration & automated payload delivery.",
      tech: ["RPi Pico", "MicroPython", "Hardware Hacking", "USB HID"],
      github: "#",
      demo: null,
      features: ["USB HID simulation", "Auto payload execution", "Physical pentest", "Hardware exploitation"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 matrix-gradient">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <p className="font-mono text-[10px] text-muted-foreground mb-2">
              <span className="text-secondary">$</span> find ~/projects -type f -name "*.exploit" | head
            </p>
            <h2 className="section-header text-3xl md:text-4xl font-terminal mb-4">PROJECTS</h2>
            <div className="w-24 h-px bg-primary/30"></div>
          </div>
        </AnimatedSection>

        <div className="space-y-4">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div className="terminal-card">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/10 bg-primary/3">
                  <div className="w-2 h-2 rounded-full bg-secondary/60" />
                  <div className="w-2 h-2 rounded-full bg-accent/60" />
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                    ~/projects/{project.title.toLowerCase().replace(/\s+/g, '-').replace(/—/g, '')}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-terminal text-xl text-primary text-glow-green">{project.title}</h3>
                      <span className={`font-mono text-[10px] ${project.statusColor} uppercase tracking-wider`}>
                        {project.status}
                      </span>
                    </div>
                    <Shield className="text-primary/30 h-5 w-5 flex-shrink-0" />
                  </div>

                  <p className="text-muted-foreground font-mono text-xs mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((f, i) => (
                        <li key={i} className="font-mono text-[10px] text-muted-foreground flex items-center gap-1.5">
                          <span className="text-primary">→</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-tag">{t}</span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="hack-btn px-4 py-1.5 text-[10px] inline-flex items-center gap-1.5">
                      <span className="relative z-10 flex items-center gap-1.5"><Github className="h-3 w-3" /> source</span>
                    </a>
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hack-btn hack-btn-red px-4 py-1.5 text-[10px] inline-flex items-center gap-1.5">
                        <span className="relative z-10 flex items-center gap-1.5"><ExternalLink className="h-3 w-3" /> live</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="mt-8 terminal-card p-6 text-center">
            <Globe className="text-primary/30 mx-auto mb-3 h-8 w-8" />
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-secondary">// </span>more exploits in development...
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};