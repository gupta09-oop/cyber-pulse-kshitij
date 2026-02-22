import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Globe } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Projects = () => {
  const projects = [
    {
      title: "WiFi Security Lab with ESP32",
      status: "Completed",
      description: "A controlled laboratory simulation of WiFi security attacks including Evil Twin and Deauthentication attacks using ESP32 microcontroller. This project explored wireless network vulnerabilities and defensive countermeasures in a safe environment.",
      tech: ["WiFi Security", "ESP32", "Ethical Hacking", "IoT Security"],
      icon: Shield,
      color: "text-secondary",
      github: "https://github.com/gupta09-oop/-WiFi-Security-Evil-Twin-Deauthentication-Simulation-ESP32-.git",
      demo: null,
      features: ["Evil Twin attack simulation", "Deauthentication attack testing", "ESP32 IoT security research", "Defensive countermeasures analysis"],
    },
    {
      title: "Password Strength Analyzer",
      status: "Completed",
      description: "A web-based security tool that evaluates password strength and checks against known data breaches using the HaveIBeenPwned API. Provides real-time feedback on password security and estimates cracking time.",
      tech: ["HTML", "CSS", "JavaScript", "API Integration"],
      icon: Shield,
      color: "text-secondary",
      github: "#",
      demo: "https://passwordstrengthcheckerbykshitij.netlify.app",
      features: ["Password strength analysis", "Cracking time estimation", "Breach database checks", "Educational security tips"],
    },
    {
      title: "USB Rubber Ducky with Raspberry Pi Pico",
      status: "Upcoming",
      description: "A hardware-based penetration testing tool built using Raspberry Pi Pico to simulate USB Human Interface Device attacks. Explores physical security vulnerabilities and automated payload delivery systems.",
      tech: ["Raspberry Pi Pico", "MicroPython", "Hardware Hacking", "USB HID"],
      icon: Shield,
      color: "text-primary",
      github: "#",
      demo: null,
      features: ["USB HID attack simulation", "Automated payload execution", "Physical security testing", "Hardware penetration testing"],
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="glass-card inline-block px-4 py-2 mb-6">
              <span className="font-mono text-secondary text-sm">root@projects:~$ ls -la</span>
            </div>
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">What I'm Building</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.15}>
              <div className="glass-card p-8 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <project.icon className={`${project.color} mr-3 h-7 w-7`} />
                    <div>
                      <h3 className={`font-cyber text-xl font-bold ${project.color}`}>{project.title}</h3>
                      <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-mono mt-1 ${
                        project.status === "Completed" ? "bg-secondary/10 text-secondary border border-secondary/20" : "bg-accent/10 text-accent border border-accent/20"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-5 leading-relaxed text-sm flex-grow">{project.description}</p>

                <div className="mb-5">
                  <h4 className="font-cyber text-sm font-bold text-foreground mb-2">Key Features</h4>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button className="cyber-button flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  {project.demo && (
                    <Button variant="outline" className="cyber-button flex-1 border-secondary text-secondary hover:text-secondary" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5}>
          <div className="text-center mt-12">
            <div className="glass-card inline-block p-8">
              <Globe className="text-accent mx-auto mb-4 h-10 w-10" />
              <h3 className="font-cyber text-lg font-bold text-accent mb-2">More Projects Coming Soon</h3>
              <p className="text-muted-foreground text-sm">Currently working on additional cybersecurity tools</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
