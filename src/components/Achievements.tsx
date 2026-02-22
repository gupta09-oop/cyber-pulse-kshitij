import { Trophy, Medal, Megaphone } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Achievements = () => {
  const achievements = [
    { icon: Trophy, color: "text-primary", glowColor: "shadow-primary/20", title: "6th Position – Quick Heal Hack & Defend X CTF", description: "Achieved 6th rank in a 24-hour cybersecurity challenge conducted by LPU in collaboration with Quick Heal & CompTIA." },
    { icon: Medal, color: "text-secondary", glowColor: "shadow-secondary/20", title: "5th Place – ENCRYPTED CTF (CYPHER x Thunder Cipher)", description: "Ranked 5th globally as part of Sh4d0w_br0k3rs, scoring 1150 points across OSINT, Forensics, Crypto, Web Exploitation & Steganography." },
    { icon: Medal, color: "text-accent", glowColor: "shadow-accent/20", title: "5th Place – Digital CyberHunt CTF (IILM University, Noida)", description: "Achieved 2250 points, tied with 1st–8th ranked teams, across OSINT, Forensics, Cryptography, Web Exploitation, and Steganography." },
    { icon: Megaphone, color: "text-primary", glowColor: "shadow-primary/20", title: "Campus Ambassador – ThunderCipher (2026–Present)", description: "Promoting Cybersecurity Awareness and CTF Participation on Campus. Connected students with ThunderCipher challenges and learning resources. Organized TRIVARNA CTF, coordinating participation and outreach." },
  ];

  return (
    <section id="achievements" className="py-24 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">Achievements</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className={`glass-card p-6 h-full flex items-start gap-4 hover:${item.glowColor}`}>
                <div className={`p-3 rounded-xl bg-background/50 border border-current/10 ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className={`font-cyber text-base font-bold ${item.color} mb-2`}>{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
