import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal, Shield, Download, Github, Linkedin, Youtube, BookOpen } from "lucide-react";

const typewriterPhrases = [
  "CTF Challenge Developer",
  "Web Security",
  "Wi-Fi Security Research",
  "Vulnerability Assessment",
  "Technical Write-ups",
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/gupta09-oop" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/kshitijgupta1806" },
  { icon: BookOpen, label: "Medium", href: "https://medium.com/@guptakshitij4723" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@Exploiter404" },
];

export const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = typewriterPhrases[currentPhrase];
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % typewriterPhrases.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentPhrase, displayText, isDeleting]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-24 pb-20">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary via-accent to-secondary opacity-40 blur-md group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/30">
              <img
                src="/lovable-uploads/6d8fbab6-df0e-4104-8cff-c8c1ff08a385.png"
                alt="Kshitij Gupta - Cybersecurity and CTF Challenge Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <Terminal className="text-primary mr-3 h-5 w-5" />
          <span className="font-mono text-primary text-sm opacity-80">kshitij@cyberspace:~$</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="font-cyber text-4xl sm:text-6xl md:text-7xl font-bold mb-6 glow-text tracking-tight"
        >
          KSHITIJ GUPTA
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground font-mono mb-4"
        >
          Cybersecurity | CTF Challenge Developer
        </motion.p>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-base md:text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Building security challenges, researching vulnerabilities, and creating hands-on
          cybersecurity experiences.
        </motion.p>

        {/* Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="h-16 flex items-center justify-center mb-10"
        >
          <div className="flex items-center glass-card px-5 py-3">
            <Shield className="text-secondary mr-3 h-5 w-5 flex-shrink-0" />
            <span className="font-mono text-base md:text-xl text-secondary glow-text-secondary">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            className="cyber-button w-full sm:w-auto px-8 py-4 text-base font-mono"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            className="cyber-button w-full sm:w-auto px-8 py-4 text-base font-mono border-secondary text-secondary hover:text-secondary"
            asChild
          >
            <a href="/lovable-uploads/fc68869f-79ce-4984-a28e-28b7145095da.png" download="Kshitij_Gupta_Resume.png">
              <Download className="mr-2 h-5 w-5" /> Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex justify-center gap-3 mt-8"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="glass-card p-3 rounded-xl text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ArrowDown className="text-primary/60 h-6 w-6" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
