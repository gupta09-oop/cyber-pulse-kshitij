import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Wifi } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const projects = [
  {
    title: "Evil Twin & Deauthentication Attack Simulation (ESP32)",
    status: "Completed",
    label: "Controlled Security Research Lab",
    description:
      "Built a controlled Wi-Fi security lab using ESP32/ESP8266 to simulate Evil Twin and deauthentication attacks, exploring wireless network vulnerabilities in a controlled environment.",
    tech: ["ESP32", "ESP8266", "Wireshark", "Packet Injection"],
    icon: Wifi,
    color: "text-secondary",
    github: "https://github.com/gupta09-oop/-WiFi-Security-Evil-Twin-Deauthentication-Simulation-ESP32-.git",
    demo: null,
    features: [
      "Evil Twin attack simulation",
      "Deauthentication attack testing",
      "Network scanning",
      "SSID cloning",
      "Controlled credential-capture testing",
      "Wireless security research",
    ],
  },
  {
    title: "Phishing Email & URL Detection System",
    status: "Completed",
    label: "July 2026",
    description:
      "Developed a rule-based phishing detection web application that analyzes emails and URLs using 21 security rules, transparent risk scoring, and confidence classification; integrated VirusTotal and WHOIS checks with .eml analysis and persistent scan history.",
    tech: ["Python", "Flask", "NLTK", "SQLite", "VirusTotal API"],
    icon: Shield,
    color: "text-primary",
    github: null,
    demo: "https://phishing-email-link-detector.onrender.com/",
    features: [
      "Email analysis",
      "URL analysis",
      "21 security rules",
      "Risk scoring",
      "Confidence classification",
      "VirusTotal integration",
      "WHOIS checks",
      ".eml analysis",
      "Persistent scan history",
    ],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="glass-card inline-block px-4 py-2 mb-6">
              <span className="font-mono text-secondary text-sm">root@projects:~$ ls -la</span>
            </div>
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">Projects</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.15}>
              <div className="glass-card p-6 md:p-8 h-full flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <project.icon className={`${project.color} h-7 w-7 flex-shrink-0 mt-1`} />
                  <div>
                    <h3 className={`font-cyber text-lg md:text-xl font-bold ${project.color} leading-tight`}>
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="inline-block px-3 py-0.5 rounded-full text-xs font-mono bg-secondary/10 text-secondary border border-secondary/20">
                        {project.status}
                      </span>
                      <span className="inline-block px-3 py-0.5 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20">
                        {project.label}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-5 leading-relaxed text-sm">{project.description}</p>

                <div className="mb-5">
                  <h4 className="font-cyber text-sm font-bold text-foreground mb-2">Key Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center text-muted-foreground text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">{tech}</span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  {project.github && (
                    <Button className="cyber-button flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> GitHub
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" className="cyber-button flex-1 border-secondary text-secondary hover:text-secondary" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> View Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
