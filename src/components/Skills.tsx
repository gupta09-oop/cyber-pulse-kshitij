import { Card, CardContent } from "@/components/ui/card";
import { Code, Shield, Database, Monitor, Lightbulb, Users, Terminal, Cpu, Network, Lock } from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-primary",
      skills: ["Python", "Bash", "SQL", "HTML/CSS", "C", "C++"]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      color: "text-secondary",
      skills: ["Phishing Detection", "CTF Solving", "Recon", "Vulnerability Assessment", "OSINT", "Penetration Testing"]
    },
    {
      title: "Tools & Platforms",
      icon: Monitor,
      color: "text-accent",
      skills: ["Wireshark", "Burp Suite", "Nmap", "Metasploit", "Nessus", "Streamlit", "TryHackMe", "Hack The Box", "HackerRank", "EC-Council Labs"]
    },
    {
      title: "Databases",
      icon: Database,
      color: "text-primary",
      skills: ["MySQL"]
    },
    {
      title: "Operating Systems",
      icon: Monitor,
      color: "text-secondary",
      skills: ["Linux", "Windows"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      color: "text-accent",
      skills: ["Problem-Solving", "Team Collaboration", "Project Management", "Adaptability", "Leadership", "Strategic Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Animated Matrix Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-12 w-1 h-1 bg-primary animate-pulse-glow rounded-full"></div>
        <div className="absolute top-56 right-8 w-1.5 h-1.5 bg-secondary animate-pulse-glow rounded-full animation-delay-1000"></div>
        <div className="absolute bottom-16 left-2/3 w-1 h-1 bg-accent animate-pulse-glow rounded-full animation-delay-2000"></div>
        <div className="absolute bottom-48 right-1/4 w-1 h-1 bg-primary animate-pulse-glow rounded-full animation-delay-3000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Terminal className="text-primary mr-3 h-8 w-8 animate-pulse" />
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold glow-text">
              &gt; SKILLS_ARSENAL.exe
            </h2>
            <Lock className="text-secondary ml-3 h-8 w-8 animate-pulse" />
          </div>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse"></div>
          <div className="font-mono text-accent text-sm mt-4">
            [ LOADING TECHNICAL CAPABILITIES... ]
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="terminal-border rounded-lg bg-background/80 backdrop-blur-sm overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Terminal Header */}
              <div className={`border-b border-${category.color.split('-')[1]}/30 p-3 bg-${category.color.split('-')[1]}/5`}>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse animation-delay-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse animation-delay-1000"></div>
                  <div className="ml-2 font-mono text-xs text-muted-foreground">
                    ~$ load_{category.title.toLowerCase().replace(/\s+/g, '_')}.sh
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-4">
                  <category.icon className={`${category.color} mr-3 h-6 w-6 group-hover:animate-pulse transition-all duration-300`} />
                  <h3 className={`font-cyber text-lg font-bold ${category.color} group-hover:glow-text transition-all duration-300`}>
                    {category.title}
                  </h3>
                </div>
                
                {/* Progress Indicator */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className={`${category.color} font-mono`}>
                      {category.title === 'Programming Languages' ? '85%' : 
                       category.title === 'Cybersecurity' ? '80%' : 
                       category.title === 'Tools & Platforms' ? '90%' : '75%'}
                    </span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-1">
                    <div 
                      className={`bg-gradient-to-r from-${category.color.split('-')[1]} to-${category.color.split('-')[1]}/50 h-1 rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                      style={{ 
                        width: category.title === 'Programming Languages' ? '85%' : 
                               category.title === 'Cybersecurity' ? '80%' : 
                               category.title === 'Tools & Platforms' ? '90%' : '75%'
                      }}
                    ></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill} 
                      className="flex items-center p-2 bg-background/30 rounded border border-primary/10 hover:border-primary/30 transition-all duration-300 group/skill"
                      style={{ animationDelay: `${(index * 200) + (skillIndex * 50)}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover/skill:animate-pulse"></div>
                      <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors duration-300 font-mono">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Statistics Terminal */}
        <div className="mt-16">
          <div className="terminal-border rounded-lg bg-background/80 backdrop-blur-sm overflow-hidden">
            {/* Terminal Header */}
            <div className="border-b border-primary/30 p-3 bg-primary/5">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-1000"></div>
                <div className="ml-4 font-mono text-xs text-muted-foreground">
                  root@cyberpulse:~$ cat statistics.log
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="font-cyber text-2xl font-bold text-primary mb-6 flex items-center">
                <Network className="mr-3 h-6 w-6 animate-pulse" />
                SYSTEM_STATISTICS.display()
              </h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 terminal-border rounded-lg bg-gradient-to-br from-primary/5 to-transparent hover:from-primary/10 transition-all duration-500 group">
                  <div className="font-cyber text-4xl font-bold text-primary mb-2 group-hover:glow-text transition-all duration-300">50+</div>
                  <p className="text-muted-foreground font-mono text-sm">CTF_Challenges.solved()</p>
                  <div className="w-full bg-muted/20 rounded-full h-1 mt-2">
                    <div className="bg-primary h-1 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="text-center p-6 terminal-border rounded-lg bg-gradient-to-br from-secondary/5 to-transparent hover:from-secondary/10 transition-all duration-500 group">
                  <div className="font-cyber text-4xl font-bold text-secondary mb-2 group-hover:glow-text transition-all duration-300">15+</div>
                  <p className="text-muted-foreground font-mono text-sm">Security_Tools.mastered()</p>
                  <div className="w-full bg-muted/20 rounded-full h-1 mt-2">
                    <div className="bg-secondary h-1 rounded-full animate-pulse" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="text-center p-6 terminal-border rounded-lg bg-gradient-to-br from-accent/5 to-transparent hover:from-accent/10 transition-all duration-500 group">
                  <div className="font-cyber text-4xl font-bold text-accent mb-2 group-hover:glow-text transition-all duration-300">6+</div>
                  <p className="text-muted-foreground font-mono text-sm">Certifications.earned()</p>
                  <div className="w-full bg-muted/20 rounded-full h-1 mt-2">
                    <div className="bg-accent h-1 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Command Line Output */}
              <div className="mt-8 p-4 bg-background/30 rounded border border-primary/20 font-mono text-sm">
                <div className="text-primary">&gt; System scan complete.</div>
                <div className="text-secondary">&gt; All skills loaded successfully.</div>
                <div className="text-accent">&gt; Ready for deployment.</div>
                <div className="flex items-center mt-2">
                  <span className="text-primary">root@cyberpulse:~$</span>
                  <div className="w-2 h-4 bg-primary ml-1 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};