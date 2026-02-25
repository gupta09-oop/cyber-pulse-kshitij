import { Trophy, Medal, Megaphone } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export const Achievements = () => {
  const achievements = [
    { icon: Trophy, color: "text-primary", title: "6th Position — Quick Heal Hack & Defend X CTF", description: "24-hour cybersecurity challenge by LPU x Quick Heal x CompTIA." },
    { icon: Medal, color: "text-secondary", title: "5th Place — ENCRYPTED CTF (CYPHER x Thunder Cipher)", description: "1150 pts as Sh4d0w_br0k3rs across OSINT, Forensics, Crypto, Web Exploitation & Stego." },
    { icon: Medal, color: "text-accent", title: "5th Place — Digital CyberHunt CTF (IILM University)", description: "2250 pts, tied with top 8 teams. OSINT, Forensics, Cryptography, Web Exploitation, Stego." },
    { icon: Megaphone, color: "text-primary", title: "Campus Ambassador — ThunderCipher (2026–Present)", description: "Promoting CTF participation. Organized TRIVARNA CTF, coordinated outreach & participation." },
  ];

  return (
    <section id="achievements" className="py-24 px-4 matrix-gradient">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="mb-16">
            <p className="font-mono text-[10px] text-muted-foreground mb-2">
              <span className="text-secondary">$</span> cat /var/log/achievements.log
            </p>
            <h2 className="section-header text-3xl md:text-4xl font-terminal mb-4">ACHIEVEMENTS</h2>
            <div className="w-24 h-px bg-primary/30"></div>
          </div>
        </AnimatedSection>

        <div className="space-y-3">
          {achievements.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="terminal-card p-5 flex items-start gap-4">
                <div className={`${item.color} mt-0.5 flex-shrink-0`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className={`font-terminal text-base ${item.color} mb-1`}>{item.title}</h3>
                  <p className="text-muted-foreground font-mono text-[11px] leading-relaxed">{item.description}</p>
                </div>
                <span className="text-muted-foreground/30 font-mono text-[10px] flex-shrink-0 mt-1">#{String(index + 1).padStart(2, '0')}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};