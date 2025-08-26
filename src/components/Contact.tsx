import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, Trophy } from "lucide-react";

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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">
            Ping Me
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="project-card">
              <CardContent className="p-8">
                <h3 className="font-cyber text-2xl font-bold text-secondary mb-6">
                  Get In Touch
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, collaborations, 
                  or just chatting about cybersecurity. Feel free to reach out through 
                  any of the channels below!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 terminal-border rounded-lg hover:border-opacity-50 transition-all duration-300 group"
                    >
                      <info.icon className={`${info.color} mr-4 h-5 w-5 group-hover:scale-110 transition-transform`} />
                      <div>
                        <div className="font-mono text-sm text-muted-foreground">
                          {info.label}
                        </div>
                        <div className={`${info.color} font-semibold`}>
                          {info.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="project-card">
              <CardContent className="p-6">
                <h4 className="font-cyber text-lg font-bold text-accent mb-4">
                  Response Time
                </h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-cyber font-bold text-primary">24h</div>
                    <div className="text-sm text-muted-foreground">Email Response</div>
                  </div>
                  <div>
                    <div className="text-2xl font-cyber font-bold text-secondary">100%</div>
                    <div className="text-sm text-muted-foreground">Response Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};