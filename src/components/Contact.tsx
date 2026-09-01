import { Mail, Phone, Github, Linkedin, Trophy, Terminal, BookOpen, Youtube } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const contactInfo = [
  { icon: Mail, label: "Email", value: "guptakshitij4723@gmail.com", href: "mailto:guptakshitij4723@gmail.com", color: "text-primary" },
  { icon: Phone, label: "Phone", value: "+91 9026372084", href: "tel:+919026372084", color: "text-secondary" },
  { icon: Github, label: "GitHub", value: "@gupta09-oop", href: "https://github.com/gupta09-oop", color: "text-accent" },
  { icon: Linkedin, label: "LinkedIn", value: "kshitijgupta1806", href: "https://linkedin.com/in/kshitijgupta1806", color: "text-primary" },
  { icon: BookOpen, label: "Medium", value: "@guptakshitij4723", href: "https://medium.com/@guptakshitij4723", color: "text-secondary" },
  { icon: Youtube, label: "YouTube", value: "Exploiter404", href: "https://www.youtube.com/@Exploiter404", color: "text-accent" },
  { icon: Trophy, label: "TryHackMe", value: "guptakshitij4723", href: "https://tryhackme.com/p/guptakshitij4723", color: "text-primary" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 gradient-mesh relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">Let's Connect</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cybersecurity student focused on CTF development, security research, and hands-on cybersecurity.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <AnimatedSection delay={0.1}>
            <div className="glass-card rounded-xl overflow-hidden">
              <div className="border-b border-primary/10 p-3 bg-primary/5">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary/80"></div>
                  <span className="ml-4 font-mono text-xs text-muted-foreground">kshitij@portfolio:~$ cat contact.txt</span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-cyber text-lg font-bold text-secondary mb-6 flex items-center">
                  <Terminal className="mr-2 h-5 w-5 text-accent" />
                  Contact Channels
                </h3>

                <div className="grid sm:grid-cols-2 gap-3">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center p-4 glass-card hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="mr-4 p-2 rounded-lg bg-background/50 group-hover:scale-110 transition-transform">
                        <info.icon className={`${info.color} h-5 w-5`} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{info.label}</div>
                        <div className={`${info.color} font-semibold text-sm truncate`}>{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
