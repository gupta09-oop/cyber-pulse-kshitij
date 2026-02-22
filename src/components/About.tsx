import { Button } from "@/components/ui/button";
import { Download, GraduationCap, User } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">
              Who am I
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-8 h-full">
              <div className="flex items-center mb-6">
                <User className="text-primary mr-3 h-6 w-6" />
                <h3 className="font-cyber text-2xl font-bold text-primary">About Me</h3>
              </div>
              <div className="space-y-5">
                <p className="text-base leading-relaxed text-muted-foreground">
                  I am a cybersecurity enthusiast and aspiring security analyst, currently pursuing
                  <span className="text-primary font-semibold"> BCA (Hons.) in Cybersecurity</span> at
                  Lovely Professional University. My passion lies in ethical hacking, threat detection,
                  and building tools that combine offensive research with defensive strategies.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  I've completed projects such as CipherHide (a secure steganography web app) and a
                  Wi-Fi Security Lab with ESP32 (Evil Twin and Deauthentication attack simulations).
                  I am also developing PhishX, an AI-powered phishing detection tool designed to identify
                  malicious links and emails in real time.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Looking ahead, I aim to expand into SOC analysis, penetration testing, and
                  hardware-based security tools—including my upcoming USB Rubber Ducky built with
                  Raspberry Pi Pico.
                </p>
                <div className="pt-4">
                  <Button asChild className="cyber-button w-full sm:w-auto px-8 py-3 font-mono">
                    <a href="/lovable-uploads/fc68869f-79ce-4984-a28e-28b7145095da.png" download="Kshitij_Gupta_Resume.png">
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card p-8 h-full">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-secondary mr-3 h-6 w-6" />
                <h3 className="font-cyber text-2xl font-bold text-secondary">Education</h3>
              </div>
              <div className="space-y-6">
                <div className="terminal-border p-6 rounded-lg bg-background/30">
                  <h4 className="font-cyber text-xl font-bold text-primary mb-2">
                    BCA (Hons.) in Cybersecurity
                  </h4>
                  <p className="text-accent font-mono mb-2">Lovely Professional University</p>
                  <p className="text-muted-foreground mb-3">Expected 2027</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Current CGPA:</span>
                      <span className="font-mono text-secondary font-bold">7.92</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Semester:</span>
                      <span className="font-mono text-primary">Third</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 glass-card">
                    <div className="text-2xl font-cyber font-bold text-primary">2027</div>
                    <div className="text-xs text-muted-foreground mt-1">Expected Graduation</div>
                  </div>
                  <div className="text-center p-4 glass-card">
                    <div className="text-2xl font-cyber font-bold text-secondary">7.92</div>
                    <div className="text-xs text-muted-foreground mt-1">Current CGPA</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
