import { Trophy, Medal, Award } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const achievements = [
  {
    icon: Trophy,
    color: "text-primary",
    title: "4th Place — LPU National Cyber War 2026 CTF",
    description:
      "Ranked 4th at a national-level CTF organized in collaboration with Quick Heal & CompTIA, competing in a team-based cybersecurity challenge.",
  },
  {
    icon: Medal,
    color: "text-secondary",
    title: "6th Place (Solo) — Quick Heal Hack & Defend X CTF",
    description:
      "Scored 3,846 points across Cryptography, Forensics, Steganography, Networking & Linux challenges.",
  },
  {
    icon: Award,
    color: "text-accent",
    title: "5th Place — Digital CyberHunt CTF",
    description:
      "Achieved 2,250 points, tied with 1st–8th ranked teams, across OSINT, Forensics, Cryptography, Web Exploitation, and Steganography.",
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 gradient-mesh">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">Achievements</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.1}>
              <div className="glass-card p-6 h-full">
                <div className={`inline-flex p-3 rounded-xl bg-background/50 mb-4 ${item.color}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className={`font-cyber text-base font-bold ${item.color} mb-2 leading-tight`}>{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
