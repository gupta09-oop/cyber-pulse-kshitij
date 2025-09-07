import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, GraduationCap, User } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">
            Who am I
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <Card className="project-card p-8">
            <CardContent className="space-y-6 p-0">
              <div className="flex items-center mb-6">
                <User className="text-primary mr-3 h-6 w-6" />
                <h3 className="font-cyber text-2xl font-bold text-primary">
                  About Me
                </h3>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a cybersecurity enthusiast and aspiring security analyst, currently pursuing 
                <span className="text-primary font-semibold"> BCA (Hons.) in Cybersecurity</span> at 
                Lovely Professional University. My passion lies in ethical hacking, threat detection, 
                and building tools that combine offensive research with defensive strategies.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I've completed projects such as CipherHide (a secure steganography web app) and a 
                Wi-Fi Security Lab with ESP32 (Evil Twin and Deauthentication attack simulations).
                I am also developing PhishX, an AI-powered phishing detection tool designed to identify 
                malicious links and emails in real time. These hands-on projects highlight my ability 
                to explore both AI-driven security solutions and wireless network vulnerabilities.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Looking ahead, I aim to expand into SOC analysis, penetration testing, and 
                hardware-based security tools—including my upcoming USB Rubber Ducky built with 
                Raspberry Pi Pico.
              </p>
              
              {/* Resume Button */}
              <div className="pt-6">
               <Button 
                 asChild 
                 className="cyber-button w-full sm:w-auto px-8 py-3 font-mono"
               >
                 <a href="/lovable-uploads/fc68869f-79ce-4984-a28e-28b7145095da.png" download="Kshitij_Gupta_Resume.png">
                   <Download className="mr-2 h-5 w-5" />
                   Download Resume
                 </a>
               </Button>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="project-card p-8">
            <CardContent className="space-y-6 p-0">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-secondary mr-3 h-6 w-6" />
                <h3 className="font-cyber text-2xl font-bold text-secondary">
                  Education
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="terminal-border p-6 rounded-lg">
                  <h4 className="font-cyber text-xl font-bold text-primary mb-2">
                    BCA (Hons.) in Cybersecurity
                  </h4>
                  <p className="text-accent font-mono mb-2">
                    Lovely Professional University
                  </p>
                  <p className="text-muted-foreground mb-2">
                    Expected 2027
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Current CGPA:
                    </span>
                    <span className="font-mono text-secondary font-bold">
                      7.52
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-muted-foreground">
                      Semester:
                    </span>
                    <span className="font-mono text-primary">
                      Second
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Academic Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 terminal-border rounded-lg">
                  <div className="text-2xl font-cyber font-bold text-primary">2027</div>
                  <div className="text-sm text-muted-foreground">Expected Graduation</div>
                </div>
                <div className="text-center p-4 terminal-border rounded-lg">
                  <div className="text-2xl font-cyber font-bold text-secondary">7.52</div>
                  <div className="text-sm text-muted-foreground">Current CGPA</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};