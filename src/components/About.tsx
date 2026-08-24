import { Button } from "@/components/ui/button";
import { Download, GraduationCap, User } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const education = [
  {
    degree: "BCA (Hons.) in Cybersecurity",
    school: "Lovely Professional University",
    period: "August 2024 – 2027",
    score: "Current CGPA: 7.92",
  },
  {
    degree: "Intermediate",
    school: "Adarsh Vidya Mandir, Unnao, Uttar Pradesh",
    period: "April 2023 – March 2024",
    score: "78%",
  },
  {
    degree: "Matriculation",
    school: "St. Lawrence School, Unnao, Uttar Pradesh",
    period: "April 2021 – March 2022",
    score: "72%",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">Who am I</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8">
          <AnimatedSection delay={0.1}>
            <div className="glass-card p-6 md:p-8 h-full">
              <div className="flex items-center mb-6">
                <User className="text-primary mr-3 h-6 w-6" />
                <h3 className="font-cyber text-2xl font-bold text-primary">About Me</h3>
              </div>
              <div className="space-y-5">
                <p className="text-base leading-relaxed text-muted-foreground">
                  I'm a <span className="text-primary font-semibold">BCA (Hons.) Cybersecurity</span> student
                  at Lovely Professional University focused on CTF challenge development, ethical hacking,
                  and practical security research.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  I develop and test cybersecurity challenges across areas such as Web Security, Forensics,
                  Cryptography, OSINT, and Networking, while participating in competitive CTFs and
                  documenting my learning through technical write-ups and videos.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  I've worked on hands-on security projects including a Phishing Email &amp; URL Detection
                  System and an ESP32-based Wi-Fi Security Lab, and have contributed to organizing and
                  supporting CTF events at LPU.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  My current goal is to build realistic, technically challenging cybersecurity experiences
                  while continuing to grow across offensive security, CTF development, and security
                  engineering.
                </p>
                <div className="pt-2">
                  <Button asChild className="cyber-button w-full sm:w-auto px-8 py-3 font-mono">
                    <a href="/lovable-uploads/fc68869f-79ce-4984-a28e-28b7145095da.png" download="Kshitij_Gupta_Resume.png">
                      <Download className="mr-2 h-5 w-5" /> Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="glass-card p-6 md:p-8 h-full">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-secondary mr-3 h-6 w-6" />
                <h3 className="font-cyber text-2xl font-bold text-secondary">Education</h3>
              </div>
              <div className="space-y-5">
                {education.map((e) => (
                  <div key={e.degree} className="terminal-border p-5 rounded-lg bg-background/30">
                    <h4 className="font-cyber text-base md:text-lg font-bold text-primary mb-1.5">{e.degree}</h4>
                    <p className="text-accent font-mono text-sm mb-1">{e.school}</p>
                    <p className="text-muted-foreground text-sm mb-2">{e.period}</p>
                    <span className="font-mono text-sm text-secondary font-bold">{e.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
