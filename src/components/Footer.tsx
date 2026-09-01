import { Terminal, Github, Linkedin, BookOpen, Youtube } from "lucide-react";

const links = [
  { icon: Github, label: "GitHub", href: "https://github.com/gupta09-oop" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/kshitijgupta1806" },
  { icon: BookOpen, label: "Medium", href: "https://medium.com/@guptakshitij4723" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@Exploiter404" },
];

export const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-primary/10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <Terminal className="text-primary mr-3 h-5 w-5" />
            <div>
              <div className="font-cyber text-lg font-bold text-primary">Kshitij Gupta</div>
              <div className="font-mono text-xs text-muted-foreground">Cybersecurity | CTF Challenge Developer</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={l.label}
                className="p-2.5 rounded-lg glass-card text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <l.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="font-mono text-xs text-muted-foreground text-center md:text-right">
            © 2026 Kshitij Gupta. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
