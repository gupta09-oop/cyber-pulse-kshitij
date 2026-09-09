import { Flag, CheckCircle, FileText, Headphones, Lightbulb } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const workflow = [
  {
    icon: Lightbulb,
    title: "Challenge Design",
    desc: "Designing original cybersecurity challenges across Web Security, Forensics, Cryptography, OSINT, and Networking.",
  },
  {
    icon: CheckCircle,
    title: "Challenge Validation",
    desc: "Testing intended solve paths, validating challenge environments, and ensuring challenges are technically solvable.",
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    desc: "Creating challenge documentation, solution paths, hints, and write-ups.",
  },
  {
    icon: Headphones,
    title: "Event Support",
    desc: "Supporting CTF platforms, troubleshooting participant issues, and guiding participants during events.",
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
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">Designing, validating, documenting, and supporting hands-on cybersecurity challenges.</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {workflow.map((w, i) => (
            <AnimatedSection key={w.title} delay={0.2 + i * 0.1}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <w.icon className="h-5 w-5 text-primary" />
                  <div className="font-mono text-xs text-secondary">{String(i + 1).padStart(2, "0")}</div>
                </div>
                <h3 className="font-cyber text-base font-bold text-foreground mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
};
