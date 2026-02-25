import { Mail, Phone, Github, Linkedin, Trophy, Terminal, Zap, Wifi } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "kshitijexploit@gmail.com", href: "mailto:kshitijexploit@gmail.com", color: "text-primary" },
    { icon: Phone, label: "Phone", value: "+91 9026372084", href: "tel:+919026372084", color: "text-secondary" },
    { icon: Github, label: "GitHub", value: "@gupta09-oop", href: "https://github.com/gupta09-oop", color: "text-accent" },
    { icon: Linkedin, label: "LinkedIn", value: "Kshitij Gupta", href: "https://linkedin.com/in/kshitij-gupta", color: "text-primary" },
    { icon: Trophy, label: "TryHackMe", value: "Profile", href: "https://tryhackme.com/p/guptakshitij4723", color: "text-secondary" },
  ];

  return (
    <section id="contact" className="py-24 px-4 gradient-mesh relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Terminal className="text-primary mr-3 h-7 w-7" />
              <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold">CONTACT</h2>
              <Wifi className="text-secondary ml-3 h-7 w-7" />
            </div>
            <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            <div className="font-mono text-accent text-xs mt-4">[ SECURE CONNECTION ACTIVE ]</div>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-xl overflow-hidden mb-8">
              {/* Terminal Header */}
              <div className="border-b border-primary/10 p-3 bg-primary/5">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary/80"></div>
                  <span className="ml-4 font-mono text-xs text-muted-foreground">root@cyberpulse:~$ cat contact.txt</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="font-cyber text-xl font-bold text-secondary mb-4 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-accent" />
                  COMMUNICATION_CHANNELS
                </h3>
                <p className="text-sm text-muted-foreground mb-8 font-mono border-l-2 border-primary/30 pl-4 leading-relaxed">
                  &gt; Cybersecurity expert ready for collaboration<br />
                  &gt; All channels encrypted and monitored
                </p>

                <div className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-4 glass-card hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="mr-4 p-2 rounded-lg bg-background/50 group-hover:scale-110 transition-transform">
                        <info.icon className={`${info.color} h-5 w-5`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">[{info.label}]</div>
                        <div className={`${info.color} font-semibold text-base`}>{info.value}</div>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Status panels */}
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedSection delay={0.2}>
              <div className="glass-card p-6">
                <h4 className="font-cyber text-sm font-bold text-accent mb-4 flex items-center">
                  <Terminal className="mr-2 h-4 w-4" /> RESPONSE_TIME
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-background/30 rounded-lg">
                    <span className="font-mono text-xs">Email Response</span>
                    <span className="font-cyber font-bold text-primary">&lt; 24h</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background/30 rounded-lg">
                    <span className="font-mono text-xs">Success Rate</span>
                    <span className="font-cyber font-bold text-secondary">100%</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="glass-card p-6">
                <h4 className="font-cyber text-sm font-bold text-primary mb-4 flex items-center">
                  <Zap className="mr-2 h-4 w-4" /> SYSTEM.status
                </h4>
                <div className="space-y-3">
                  {[
                    { label: "Connection", status: "SECURE", color: "text-secondary" },
                    { label: "Availability", status: "ONLINE", color: "text-primary" },
                    { label: "Encryption", status: "AES-256", color: "text-secondary" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="font-mono text-xs">{item.label}</span>
                      <span className={`flex items-center ${item.color} text-sm font-mono`}>
                        <div className={`w-1.5 h-1.5 rounded-full bg-current mr-2 animate-pulse`} />
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
