import { Mail, Phone, Github, Linkedin, Trophy, Terminal, Zap, Wifi } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Contact = () => {
  const contactInfo = [
    { icon: Mail, label: "email", value: "kshitijexploit@gmail.com", href: "mailto:kshitijexploit@gmail.com", color: "text-primary" },
    { icon: Phone, label: "phone", value: "+91 9026372084", href: "tel:+919026372084", color: "text-secondary" },
    { icon: Github, label: "github", value: "@gupta09-oop", href: "https://github.com/gupta09-oop", color: "text-primary" },
    { icon: Linkedin, label: "linkedin", value: "Kshitij Gupta", href: "https://linkedin.com/in/kshitij-gupta", color: "text-accent" },
    { icon: Trophy, label: "tryhackme", value: "Profile", href: "https://tryhackme.com/p/guptakshitij4723", color: "text-secondary" },
  ];

  return (
    <section id="contact" className="py-24 px-4 matrix-gradient">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <p className="font-mono text-[10px] text-muted-foreground mb-2">
              <span className="text-secondary">$</span> nc -lvp 4444
            </p>
            <h2 className="section-header text-3xl md:text-4xl font-terminal mb-4">CONTACT</h2>
            <div className="w-24 h-px bg-primary/30"></div>
            <p className="font-mono text-[10px] text-primary mt-3">
              <span className="status-online inline-block mr-2 align-middle" />
              listening on [0.0.0.0] port 4444 ...
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="terminal-card mb-6">
              <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/10 bg-primary/3">
                <div className="w-2 h-2 rounded-full bg-secondary/60" />
                <div className="w-2 h-2 rounded-full bg-accent/60" />
                <div className="w-2 h-2 rounded-full bg-primary/60" />
                <span className="ml-2 font-mono text-[10px] text-muted-foreground">root@kshitij:~$ cat contact.conf</span>
              </div>

              <div className="p-6">
                <div className="mb-5 border-l-2 border-secondary/30 pl-3">
                  <p className="font-mono text-[10px] text-muted-foreground leading-relaxed">
                    <span className="text-secondary"># </span>All channels monitored. Encrypted comms preferred.<br />
                    <span className="text-secondary"># </span>Response time: &lt; 24h
                  </p>
                </div>

                <div className="space-y-1">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center p-3 hover:bg-primary/3 transition-all duration-300 border border-transparent hover:border-primary/10"
                    >
                      <info.icon className={`${info.color} h-4 w-4 mr-4 flex-shrink-0 group-hover:text-glow-green transition-all`} />
                      <div className="flex-1 min-w-0">
                        <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-widest">{info.label}</span>
                        <div className={`${info.color} font-mono text-xs truncate`}>{info.value}</div>
                      </div>
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary group-hover:shadow-[0_0_6px] group-hover:shadow-primary/50 transition-all flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              { label: "connection", status: "SECURE", color: "text-primary" },
              { label: "availability", status: "ONLINE", color: "text-primary" },
              { label: "encryption", status: "AES-256", color: "text-secondary" },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={0.2 + i * 0.1}>
                <div className="terminal-card p-3 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-muted-foreground uppercase">{item.label}</span>
                  <span className={`flex items-center ${item.color} font-mono text-[10px]`}>
                    <div className="status-online mr-1.5" />
                    {item.status}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};