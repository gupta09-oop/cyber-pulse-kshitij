import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, Shield, Globe, Terminal, Zap, Code2, Activity } from "lucide-react";

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
    <section id="projects" className="py-20 px-4 bg-muted/5 relative overflow-hidden">
      {/* Matrix Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-24 w-1 h-1 bg-primary animate-pulse-glow rounded-full"></div>
        <div className="absolute top-64 right-16 w-1.5 h-1.5 bg-secondary animate-pulse-glow rounded-full animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/5 w-1 h-1 bg-accent animate-pulse-glow rounded-full animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Terminal className="text-primary mr-3 h-8 w-8 animate-pulse" />
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold glow-text">
              &gt; PROJECTS.init()
            </h2>
            <Activity className="text-secondary ml-3 h-8 w-8 animate-pulse" />
          </div>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse"></div>
          <div className="font-mono text-accent text-sm mt-4">
            [ COMPILING PROJECT DATABASE... ]
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="terminal-border rounded-lg bg-background/80 backdrop-blur-sm overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              {/* Terminal Header */}
              <div className={`border-b border-${project.color.split('-')[1]}/30 p-3 bg-${project.color.split('-')[1]}/5`}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-1000"></div>
                  <div className="ml-4 font-mono text-xs text-muted-foreground">
                    root@cyberpulse:~$ ./run_{project.title.toLowerCase().replace(/\s+/g, '_')}.sh
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <project.icon className={`${project.color} mr-3 h-8 w-8 group-hover:animate-pulse transition-all duration-300`} />
                    <div>
                      <h3 className={`font-cyber text-2xl font-bold ${project.color} group-hover:glow-text transition-all duration-300`}>
                        {project.title}.exe
                      </h3>
                      <div className="flex items-center mt-1">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono ${
                          project.status === 'Completed' 
                            ? 'bg-secondary/20 text-secondary border border-secondary/30' 
                            : 'bg-accent/20 text-accent border border-accent/30'
                        }`}>
                          [{project.status.toUpperCase()}]
                        </span>
                        <div className="ml-2 flex items-center">
                          <div className={`w-2 h-2 rounded-full ${
                            project.status === 'Completed' ? 'bg-secondary' : 'bg-accent'
                          } animate-pulse`}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Info Display */}
                <div className="bg-background/30 p-4 rounded border border-primary/20 mb-6 font-mono text-sm">
                  <div className="text-primary">&gt; Scanning project details...</div>
                  <div className="text-secondary">&gt; Description: {project.description}</div>
                  <div className="text-accent">&gt; Status: {project.status.toUpperCase()}</div>
                </div>

                {/* Features Matrix */}
                <div className="mb-6">
                  <h4 className="font-cyber text-lg font-bold text-foreground mb-3 flex items-center">
                    <Code2 className="mr-2 h-5 w-5 animate-pulse" />
                    Features.load()
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground p-2 terminal-border rounded hover:bg-primary/5 transition-all duration-300 group/feature">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover/feature:animate-pulse"></div>
                        <span className="group-hover/feature:text-foreground transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="font-cyber text-sm font-bold text-foreground mb-3 flex items-center">
                    <Zap className="mr-2 h-4 w-4 animate-pulse" />
                    Tech_Stack.list()
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span 
                        key={tech} 
                        className="skill-tag text-xs hover:bg-secondary/20 hover:border-secondary/50 transition-all duration-300"
                        style={{ animationDelay: `${idx * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="cyber-button flex-1 group/btn" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:animate-pulse" />
                      GitHub
                    </a>
                  </Button>
                  {project.demo && (
                    <Button 
                      variant="outline" 
                      className="cyber-button flex-1 border-secondary text-secondary hover:text-secondary group/btn" 
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:animate-pulse" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Terminal */}
        <div className="text-center mt-12">
          <div className="terminal-border rounded-lg bg-background/80 backdrop-blur-sm overflow-hidden inline-block">
            {/* Terminal Header */}
            <div className="border-b border-accent/30 p-3 bg-accent/5">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-1000"></div>
                <div className="ml-4 font-mono text-xs text-muted-foreground">
                  root@cyberpulse:~$ ./future_projects.sh
                </div>
              </div>
            </div>

            <div className="p-8">
              <Globe className="text-accent mx-auto mb-4 h-12 w-12 animate-pulse" />
              <h3 className="font-cyber text-xl font-bold text-accent mb-2 glow-text">
                MORE_PROJECTS.loading()
              </h3>
              <p className="text-muted-foreground font-mono text-sm">
                &gt; Additional cybersecurity tools in development...
              </p>
              <div className="mt-4 p-2 bg-background/30 rounded border border-accent/20 font-mono text-xs">
                <div className="text-accent">&gt; Status: IN_PROGRESS</div>
                <div className="text-primary">&gt; ETA: Soon™</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};