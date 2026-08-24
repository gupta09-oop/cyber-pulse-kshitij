import { Flag, Globe, Search, KeyRound, Network, Fingerprint } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const categories = [
  { icon: Globe, label: "Web Security", color: "text-primary" },
  { icon: Fingerprint, label: "Forensics", color: "text-secondary" },
  { icon: KeyRound, label: "Cryptography", color: "text-accent" },
  { icon: Search, label: "OSINT", color: "text-primary" },
  { icon: Network, label: "Networking", color: "text-secondary" },
];

const workflow = [
  {
    title: "Challenge Design",
    desc: "Define the vulnerability, learning objective and intended solution path before writing a single line of code.",
  },
  {
    title: "Build & Deploy",
    desc: "Implement the challenge environment, embed the flag logic and package it for reliable deployment.",
  },
  {
    title: "Testing & Balancing",
    desc: "Validate solvability, remove unintended solutions and tune difficulty so the challenge stays fair.",
  },
  {
    title: "Documentation",
    desc: "Write clear descriptions, hints and structured solution write-ups for participants and organisers.",
  },
];

export const CTFDevelopment = () => {
  return (
    <section id="ctf-development" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="glass-card inline-block px-4 py-2 mb-6">
              <span className="font-mono text-secondary text-sm">root@ctf:~$ ./build_challenge</span>
            </div>
            <h2 className="section-header text-4xl md:text-5xl font-cyber font-bold mb-6">CTF Development</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
              I design, build and test Capture The Flag challenges — turning real vulnerability classes
              into hands-on learning experiences for competitive security events.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex items-center mb-6">
              <Flag className="text-primary mr-3 h-6 w-6" />
              <h3 className="font-cyber text-xl font-bold text-primary">Challenge Categories</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((c) => (
                <div key={c.label} className="glass-card p-5 text-center">
                  <c.icon className={`${c.color} h-6 w-6 mx-auto mb-3`} />
                  <div className="font-mono text-xs md:text-sm text-foreground/90">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {workflow.map((w, i) => (
            <AnimatedSection key={w.title} delay={0.2 + i * 0.1}>
              <div className="glass-card p-6 h-full">
                <div className="font-mono text-xs text-secondary mb-2">{String(i + 1).padStart(2, "0")}</div>
                <h4 className="font-cyber text-base font-bold text-foreground mb-2">{w.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.6}>
          <div className="glass-card p-6 md:p-8 mt-8">
            <h3 className="font-cyber text-xl font-bold text-secondary mb-4">Events I've Contributed To</h3>
            <ul className="space-y-3">
              {[
                "UNI6CTF — Challenge Developer (2026)",
                "LPU x Play 2 Unite CTF — Event Contributor (2026)",
                "TRIVARNA CTF — Outreach & Coordination",
              ].map((e) => (
                <li key={e} className="flex items-center text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                  <span className="font-mono text-sm">{e}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
