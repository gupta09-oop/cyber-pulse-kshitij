import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Shield, Globe, Lock } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "PhishX",
      status: "In Development",
      description: "AI-powered phishing detection tool for small teams using local LLM technology",
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
      description: "Advanced text encryption and decryption tool with multiple cipher algorithms for secure communication",
      tech: ["HTML", "CSS", "JavaScript", "Cryptography"],
      icon: Lock,
      color: "text-accent",
      github: "https://github.com/gupta09-oop/Cipherhide-main.git",
      demo: "https://cipherhide-main.vercel.app/",
      features: [
        "Multiple encryption algorithms",
        "Secure text hiding",
        "Easy-to-use interface",
        "Real-time encryption/decryption"
      ]
    },
    {
      title: "Password Strength Checker",
      status: "Completed",
      description: "Web-based tool to analyze password security and estimate cracking time with 'Have I Been Pwned?' integration",
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
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">
            What I'm Building
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <CardContent className="p-8">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <project.icon className={`${project.color} mr-3 h-8 w-8`} />
                    <div>
                      <h3 className={`font-cyber text-2xl font-bold ${project.color}`}>
                        {project.title}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono mt-1 ${
                        project.status === 'Completed' 
                          ? 'bg-secondary/20 text-secondary' 
                          : 'bg-accent/20 text-accent'
                      }`}>
                        {project.status}
                      </span>
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

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="cyber-button flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
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
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="text-center mt-12">
          <Card className="project-card inline-block">
            <CardContent className="p-8">
              <Globe className="text-accent mx-auto mb-4 h-12 w-12" />
              <h3 className="font-cyber text-xl font-bold text-accent mb-2">
                More Projects Coming Soon
              </h3>
              <p className="text-muted-foreground">
                Currently working on additional cybersecurity tools and applications
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};