import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Megaphone } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      color: "text-primary",
      title: "6th Position – Quick Heal Hack & Defend X CTF",
      description:
        "Achieved 6th rank in a 24-hour cybersecurity challenge conducted by LPU in collaboration with Quick Heal & CompTIA.",
    },
    {
      icon: Medal,
      color: "text-secondary",
      title: "5th Place – ENCRYPTED CTF (CYPHER x Thunder Cipher)",
      description:
        "Ranked 5th globally as part of Sh4d0w_br0k3rs, scoring 1150 points across OSINT, Forensics, Crypto, Web Exploitation & Steganography.",
    },
    {
      icon: Medal,
      color: "text-accent",
      title: "5th Place – Digital CyberHunt CTF (IILM University, Noida)",
      description:
        "Achieved 2250 points, tied with 1st–8th ranked teams, across OSINT, Forensics, Cryptography, Web Exploitation, and Steganography.",
    },
    {
      icon: Megaphone,
      color: "text-primary",
      title: "Campus Ambassador – ThunderCipher (2026–Present)",
      description:
        "Promoting Cybersecurity Awareness and CTF Participation on Campus. Connected students with ThunderCipher challenges and learning resources. Organized TRIVARNA CTF, coordinating participation and outreach.",
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">
            Achievements
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="space-y-6">
          {achievements.map((item, index) => (
            <Card key={index} className="project-card">
              <CardContent className="p-6 flex items-start gap-4">
                <item.icon className={`${item.color} h-8 w-8 flex-shrink-0 mt-1`} />
                <div>
                  <h3 className={`font-cyber text-lg font-bold ${item.color} mb-2`}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
