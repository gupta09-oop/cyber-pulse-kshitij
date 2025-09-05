import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Shield, Globe, Lock } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "PhishX",
      status: "In Development",
      description: "An AI-powered phishing detection system designed to identify malicious emails and URLs in real-time using local LLM technology. This project focuses on privacy-first security solutions for small teams and organizations. Through this development, I'm gaining expertise in AI integration for cybersecurity applications and exploring the potential of local AI models for threat detection.",
      tech: ["Python", "Streamlit", "Ollama", "Local LLM"],
      icon: Brain,
      color: "text-primary",
      github: "https://github.com/gupta09-oop/Ai-powered_phising-analyzer.git",
      demo: null,
      features: [
        "Real-time phishing detection",
        "Local AI processing",
        "Team collaboration features",
        "Privacy-focused design"
      ]
    },
    {
      title: "CipherHide",
      status: "Completed",
      description: "A secure web application that combines text encryption with steganography to hide encrypted messages within images. This project demonstrates practical implementation of cryptographic principles and covert communication techniques. I learned to integrate multiple security layers and developed skills in both frontend development and cryptographic algorithm implementation.",
      tech: ["React", "Tailwind CSS", "Cryptography", "Steganography", "Vercel"],
      icon: Lock,
      color: "text-accent",
      github: "https://github.com/gupta09-oop/Cipherhide-main.git",
      demo: "https://cipherhide-main.vercel.app/",
      features: [
        "Text encryption and steganography",
        "Image-based data hiding",
        "Responsive web interface",
        "Secure messaging capabilities"
      ]
    },
    {
      title: "WiFi Security Lab with ESP32",
      status: "Completed",
      description: "A controlled laboratory simulation of WiFi security attacks including Evil Twin and Deauthentication attacks using ESP32 microcontroller. This project explored wireless network vulnerabilities and defensive countermeasures in a safe environment. I gained hands-on experience with IoT security, wireless penetration testing techniques, and understanding of 802.11 protocol vulnerabilities.",
      tech: ["WiFi Security", "ESP32", "Ethical Hacking", "IoT Security"],
      icon: Shield,
      color: "text-secondary",
      github: "https://github.com/gupta09-oop/-WiFi-Security-Evil-Twin-Deauthentication-Simulation-ESP32-.git",
      demo: null,
      features: [
        "Evil Twin attack simulation",
        "Deauthentication attack testing",
        "ESP32 IoT security research",
        "Defensive countermeasures analysis"
      ]
    },
    {
      title: "Password Strength Analyzer",
      status: "Completed",
      description: "A web-based security tool that evaluates password strength and checks against known data breaches using the HaveIBeenPwned API. The application provides real-time feedback on password security and estimates cracking time based on various attack methods. This project enhanced my understanding of password security principles and API integration for security applications.",
      tech: ["HTML", "CSS", "JavaScript", "API Integration"],
      icon: Shield,
      color: "text-secondary",
      github: "#",
      demo: "https://passwordstrengthcheckerbykshitij.netlify.app",
      features: [
        "Password strength analysis",
        "Cracking time estimation",
        "Breach database checks",
        "Educational security tips"
      ]
    },
    {
      title: "USB Rubber Ducky with Raspberry Pi Pico",
      status: "Upcoming",
      description: "A hardware-based penetration testing tool built using Raspberry Pi Pico to simulate USB Human Interface Device attacks. This project will explore physical security vulnerabilities and automated payload delivery systems. I aim to learn about hardware hacking, embedded systems programming, and the intersection of physical and digital security testing.",
      tech: ["Raspberry Pi Pico", "MicroPython", "Hardware Hacking", "USB HID"],
      icon: Shield,
      color: "text-primary",
      github: "#",
      demo: null,
      features: [
        "USB HID attack simulation",
        "Automated payload execution",
        "Physical security testing",
        "Hardware penetration testing"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="terminal-border inline-block p-4 mb-6 bg-background/50 backdrop-blur-sm animate-fade-in">
            <span className="font-mono text-secondary text-sm">root@projects:~$ find . -name "*.project" -type f</span>
          </div>
          <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6 animate-pulse-glow">
            Project Repository
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto animate-scan"></div>
          
          {/* Terminal Status */}
          <div className="mt-8 terminal-border inline-block p-3 bg-background/30 backdrop-blur-sm">
            <div className="font-mono text-xs text-accent">
              <span className="animate-pulse">🔍 Scanning projects... Found 5 repositories</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card animate-fade-in hover:animate-pulse-glow" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                {/* Terminal Header for each project */}
                <div className="terminal-border p-2 mb-4 bg-background/20">
                  <div className="font-mono text-xs text-secondary">
                    <span className="animate-pulse">$ git status {project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                  </div>
                </div>
                
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <project.icon className={`${project.color} mr-3 h-8 w-8 animate-pulse`} />
                    <div>
                      <h3 className={`font-cyber text-2xl font-bold ${project.color}`}>
                        {project.title}
                      </h3>
                      <div className="flex items-center mt-1">
                        <div className={`w-2 h-2 rounded-full mr-2 animate-pulse ${
                          project.status === 'Completed' ? 'bg-green-500' : 
                          project.status === 'In Development' ? 'bg-yellow-500' : 
                          'bg-blue-500'
                        }`}></div>
                        <span className="font-mono text-xs text-muted-foreground">
                          status: {project.status.toLowerCase().replace(' ', '_')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-cyber text-lg font-bold text-foreground mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground">
                        <span className="text-primary mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-cyber text-sm font-bold text-foreground mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons with Terminal Style */}
                <div className="terminal-border p-3 bg-background/20 mb-4">
                  <div className="font-mono text-xs text-secondary mb-2">
                    <span className="animate-pulse">$ ./deploy.sh --env=production</span>
                  </div>
                  <div className="flex gap-4">
                    <Button className="cyber-button flex-1 animate-pulse-glow" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button 
                        variant="outline" 
                        className="cyber-button flex-1 border-secondary text-secondary hover:text-secondary" 
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Execute
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects Coming Soon with Terminal Animation */}
        <div className="text-center mt-12">
          <Card className="project-card inline-block animate-fade-in animate-pulse-glow">
            <CardContent className="p-8">
              <div className="terminal-border p-3 mb-4 bg-background/20">
                <div className="font-mono text-xs text-secondary">
                  <span className="animate-pulse">$ while true; do echo "building_next_project..."; sleep 1; done</span>
                </div>
              </div>
              <Globe className="text-accent mx-auto mb-4 h-12 w-12 animate-float" />
              <h3 className="font-cyber text-xl font-bold text-accent mb-2">
                queue.size() &gt; 0
              </h3>
              <p className="text-muted-foreground font-mono">
                // More security tools compiling in background...
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};