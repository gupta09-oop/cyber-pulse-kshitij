import { Download, GraduationCap, User, Skull } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 matrix-gradient">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <p className="font-mono text-[10px] text-muted-foreground mb-2">
              <span className="text-secondary">$</span> cat ./about.md
            </p>
            <h2 className="section-header text-3xl md:text-4xl font-terminal mb-4">WHO AM I</h2>
            <div className="w-24 h-px bg-primary/30"></div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-6">
          <AnimatedSection delay={0.1}>
            <div className="terminal-card p-6 h-full">
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-primary/10">
                <User className="text-primary h-4 w-4" />
                <span className="font-mono text-xs text-primary uppercase tracking-wider">identity.conf</span>
              </div>
              <div className="space-y-4 font-mono text-xs leading-relaxed text-muted-foreground">
                <p>
                  <span className="text-primary">{">"}</span> Cybersecurity enthusiast and aspiring security analyst pursuing{" "}
                  <span className="text-accent">BCA (Hons.) in Cybersecurity</span> at Lovely Professional University.
                </p>
                <p>
                  <span className="text-primary">{">"}</span> Built <span className="text-primary">CipherHide</span> (steganography web app) and a{" "}
                  <span className="text-primary">Wi-Fi Security Lab</span> with ESP32 (Evil Twin & Deauth attack simulations).
                  Developing <span className="text-secondary">PhishX</span> — AI-powered phishing detection.
                </p>
                <p>
                  <span className="text-primary">{">"}</span> Next targets: SOC analysis, penetration testing, hardware security tools.
                  Building a <span className="text-accent">USB Rubber Ducky</span> with Raspberry Pi Pico.
                </p>
                <div className="pt-4">
                  <a
                    href="/lovable-uploads/fc68869f-79ce-4984-a28e-28b7145095da.png"
                    download="Kshitij_Gupta_Resume.png"
                    className="hack-btn inline-flex items-center gap-2 px-5 py-2 text-[11px]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Download className="h-3.5 w-3.5" />
                      download resume.pdf
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="terminal-card p-6 h-full">
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-primary/10">
                <GraduationCap className="text-secondary h-4 w-4" />
                <span className="font-mono text-xs text-secondary uppercase tracking-wider">education.log</span>
              </div>
              <div className="space-y-5">
                <div className="border border-primary/10 p-5 bg-primary/3">
                  <h4 className="font-terminal text-xl text-primary text-glow-green mb-1">
                    BCA (Hons.) in Cybersecurity
                  </h4>
                  <p className="text-accent font-mono text-xs mb-3">Lovely Professional University</p>
                  <p className="text-muted-foreground font-mono text-[10px] mb-4">Expected 2027</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-mono">CGPA:</span>
                      <span className="font-mono text-primary font-bold text-glow-green">7.92</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-mono">Semester:</span>
                      <span className="font-mono text-primary">Third</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-4 terminal-card">
                    <div className="text-2xl font-terminal text-primary text-glow-green">2027</div>
                    <div className="text-[9px] text-muted-foreground mt-1 font-mono uppercase tracking-wider">graduation</div>
                  </div>
                  <div className="text-center p-4 terminal-card">
                    <div className="text-2xl font-terminal text-secondary text-glow-red">7.92</div>
                    <div className="text-[9px] text-muted-foreground mt-1 font-mono uppercase tracking-wider">cgpa</div>
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