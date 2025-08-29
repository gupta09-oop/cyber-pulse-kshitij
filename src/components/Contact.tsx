import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Trophy, Terminal, Zap, Wifi } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kshitijexploit@gmail.com",
      href: "mailto:kshitijexploit@gmail.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9026372084",
      href: "tel:+919026372084",
      color: "text-secondary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@gupta09-oop",
      href: "https://github.com/gupta09-oop",
      color: "text-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Kshitij Gupta",
      href: "https://linkedin.com/in/kshitij-gupta",
      color: "text-primary"
    },
    {
      icon: Trophy,
      label: "TryHackMe",
      value: "Profile",
      href: "https://tryhackme.com/p/guptakshitij4723",
      color: "text-secondary"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-primary animate-pulse-glow rounded-full"></div>
        <div className="absolute top-32 right-16 w-1 h-1 bg-secondary animate-pulse-glow rounded-full animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-accent animate-pulse-glow rounded-full animation-delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-primary animate-pulse-glow rounded-full animation-delay-3000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Terminal className="text-primary mr-3 h-8 w-8 animate-pulse" />
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold glow-text">
              &gt; CONTACT_ESTABLISHED
            </h2>
            <Wifi className="text-secondary ml-3 h-8 w-8 animate-pulse" />
          </div>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse"></div>
          <div className="font-mono text-accent text-sm mt-4 animate-fade-in">
            [ SECURE CONNECTION ACTIVE ]
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Terminal Window Effect */}
          <div className="terminal-border rounded-lg bg-background/80 backdrop-blur-sm mb-8 overflow-hidden">
            {/* Terminal Header */}
            <div className="border-b border-primary/30 p-3 bg-primary/5">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse animation-delay-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse animation-delay-1000"></div>
                <div className="ml-4 font-mono text-xs text-muted-foreground">
                  root@cyberpulse:~$ cat contact.txt
                </div>
              </div>
            </div>

            {/* Contact Info Matrix */}
            <div className="p-8">
              <h3 className="font-cyber text-2xl font-bold text-secondary mb-6 flex items-center">
                <Zap className="mr-2 h-6 w-6 text-accent animate-pulse" />
                COMMUNICATION_CHANNELS.init()
              </h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-mono border-l-2 border-primary/50 pl-4">
                &gt; Establishing secure connection...<br />
                &gt; Cybersecurity expert ready for collaboration<br />
                &gt; All channels encrypted and monitored
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 bg-gradient-to-r from-background to-background/50 border border-primary/20 rounded-lg hover:border-primary/60 hover:from-primary/5 hover:to-secondary/5 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="relative mr-4">
                      <info.icon className={`${info.color} h-6 w-6 group-hover:scale-125 transition-all duration-300 relative z-10`} />
                      <div className={`absolute inset-0 ${info.color.replace('text-', 'bg-')} opacity-0 group-hover:opacity-20 rounded-full scale-150 transition-all duration-300`}></div>
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                        [{info.label}]
                      </div>
                      <div className={`${info.color} font-semibold text-lg group-hover:glow-text transition-all duration-300`}>
                        {info.value}
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* System Status Panel */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="project-card bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/30">
              <CardContent className="p-6">
                <h4 className="font-cyber text-lg font-bold text-accent mb-4 flex items-center">
                  <Terminal className="mr-2 h-5 w-5" />
                  RESPONSE_TIME.status
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded border border-primary/20">
                    <span className="font-mono text-sm">Email Response</span>
                    <span className="text-2xl font-cyber font-bold text-primary animate-pulse">&lt; 24h</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background/50 rounded border border-secondary/20">
                    <span className="font-mono text-sm">Success Rate</span>
                    <span className="text-2xl font-cyber font-bold text-secondary animate-pulse">100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="project-card bg-gradient-to-br from-secondary/5 to-accent/5 border-secondary/30">
              <CardContent className="p-6">
                <h4 className="font-cyber text-lg font-bold text-primary mb-4 flex items-center">
                  <Zap className="mr-2 h-5 w-5 animate-pulse" />
                  SYSTEM.status
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm">Connection</span>
                    <span className="flex items-center text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      SECURE
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm">Availability</span>
                    <span className="flex items-center text-primary">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                      ONLINE
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm">Encryption</span>
                    <span className="flex items-center text-secondary">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse"></div>
                      AES-256
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Terminal Prompt */}
          <div className="mt-8 p-4 bg-background/80 border border-primary/30 rounded font-mono text-sm">
            <div className="text-primary">
              root@cyberpulse:~$ echo "Ready for secure communication"
            </div>
            <div className="text-secondary mt-1">
              Ready for secure communication
            </div>
            <div className="flex items-center mt-2">
              <span className="text-accent">root@cyberpulse:~$</span>
              <div className="w-2 h-4 bg-primary ml-1 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};