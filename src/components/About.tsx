import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, GraduationCap, User, Terminal, Cpu, FileCode } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-8 w-1 h-1 bg-primary animate-pulse-glow rounded-full"></div>
        <div className="absolute top-40 right-12 w-1.5 h-1.5 bg-secondary animate-pulse-glow rounded-full animation-delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-accent animate-pulse-glow rounded-full animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Terminal className="text-primary mr-3 h-8 w-8 animate-pulse" />
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold glow-text">
              &gt; USER_PROFILE.exe
            </h2>
            <Cpu className="text-secondary ml-3 h-8 w-8 animate-pulse" />
          </div>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse"></div>
          <div className="font-mono text-accent text-sm mt-4">
            [ LOADING PROFILE DATA... ]
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section - Terminal Style */}
          <div className="terminal-border rounded-lg bg-background/80 backdrop-blur-sm overflow-hidden">
            {/* Terminal Header */}
            <div className="border-b border-primary/30 p-3 bg-primary/5">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-1000"></div>
                <div className="ml-4 font-mono text-xs text-muted-foreground">
                  root@cyberpulse:~$ cat about.txt
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex items-center mb-6">
                <User className="text-primary mr-3 h-6 w-6 animate-pulse" />
                <h3 className="font-cyber text-2xl font-bold text-primary">
                  PROFILE.init()
                </h3>
              </div>
              
              <div className="space-y-4 font-mono text-sm">
                <div className="text-primary">&gt; Initializing user profile...</div>
                <div className="text-secondary">&gt; Name: Kshitij Gupta</div>
                <div className="text-accent">&gt; Role: Cybersecurity Student & Developer</div>
                <div className="text-primary">&gt; Status: ACTIVE</div>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground border-l-2 border-primary/50 pl-4">
                Cybersecurity enthusiast pursuing
                <span className="text-primary font-semibold glow-text"> BCA (Hons.) in Cybersecurity</span> at 
                LPU. Specializing in ethical hacking, network security, and secure development with a passion 
                for AI-powered security solutions.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground border-l-2 border-secondary/50 pl-4">
                Exploring the convergence of cybersecurity and AI to build intelligent, resilient systems. 
                Continuous learner through CTF challenges, practical implementations, and real-world security projects.
              </p>
              
              {/* System Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-3 bg-primary/10 rounded border border-primary/30">
                  <div className="text-xs text-muted-foreground">Experience Level</div>
                  <div className="text-primary font-cyber font-bold">Intermediate</div>
                </div>
                <div className="p-3 bg-secondary/10 rounded border border-secondary/30">
                  <div className="text-xs text-muted-foreground">Focus Area</div>
                  <div className="text-secondary font-cyber font-bold">CyberSec + AI</div>
                </div>
              </div>
              
              {/* Resume Download */}
              <div className="pt-6">
                <Button 
                  asChild 
                  className="cyber-button w-full px-8 py-3 font-mono group"
                >
                  <a href="/lovable-uploads/fc68869f-79ce-4984-a28e-28b7145095da.png" download="Kshitij_Gupta_Resume.png">
                    <Download className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Download_Resume.pdf
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Education Section - Enhanced Terminal */}
          <div className="terminal-border rounded-lg bg-background/80 backdrop-blur-sm overflow-hidden">
            {/* Terminal Header */}
            <div className="border-b border-secondary/30 p-3 bg-secondary/5">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-1000"></div>
                <div className="ml-4 font-mono text-xs text-muted-foreground">
                  root@cyberpulse:~$ cat education.log
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-secondary mr-3 h-6 w-6 animate-pulse" />
                <h3 className="font-cyber text-2xl font-bold text-secondary">
                  EDUCATION.sys
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="terminal-border p-6 rounded-lg bg-gradient-to-r from-secondary/5 to-primary/5 hover:from-secondary/10 hover:to-primary/10 transition-all duration-500">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-cyber text-xl font-bold text-primary">
                      BCA (Hons.) Cybersecurity
                    </h4>
                    <FileCode className="text-accent h-5 w-5 animate-pulse" />
                  </div>
                  <p className="text-accent font-mono mb-2">
                    Lovely Professional University
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Expected 2027 • Second Semester
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="text-secondary font-mono">25%</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-2">
                      <div className="bg-gradient-to-r from-secondary to-primary h-2 rounded-full animate-pulse" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Academic Matrix */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 terminal-border rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 group">
                  <div className="text-2xl font-cyber font-bold text-primary group-hover:glow-text transition-all duration-300">2027</div>
                  <div className="text-sm text-muted-foreground">Target Year</div>
                </div>
                <div className="text-center p-4 terminal-border rounded-lg bg-secondary/5 hover:bg-secondary/10 transition-all duration-300 group">
                  <div className="text-2xl font-cyber font-bold text-secondary group-hover:glow-text transition-all duration-300">7.52</div>
                  <div className="text-sm text-muted-foreground">Current CGPA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};