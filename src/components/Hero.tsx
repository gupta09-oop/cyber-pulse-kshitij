import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Shield } from "lucide-react";

const typewriterPhrases = [
  "Phishing Hunter",
  "CTF Solver",
  "AI Defender",
  "Exploit Developer",
  "Security Builder",
  "Threat Analyst",
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
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-16">
      <div className="max-w-4xl mx-auto w-full">
        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="terminal-card"
        >
          {/* Terminal title bar */}
          <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/10 bg-primary/5">
            <div className="w-2.5 h-2.5 rounded-full bg-secondary/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
            <span className="ml-3 font-mono text-[10px] text-muted-foreground">root@fsociety:~/portfolio — bash</span>
          </div>

          <div className="p-6 md:p-10">
            {/* Boot sequence */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-6 space-y-1"
            >
              <p className="font-mono text-[11px] text-muted-foreground">
                <span className="text-primary">$</span> cat /etc/motd
              </p>
              <p className="font-mono text-[10px] text-muted-foreground/60">
                Last login: {new Date().toLocaleDateString()} from 127.0.0.1
              </p>
            </motion.div>

            {/* Profile image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden border border-primary/30">
                  <img
                    src="/lovable-uploads/6d8fbab6-df0e-4104-8cff-c8c1ff08a385.png"
                    alt="Kshitij Gupta"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 status-online" />
              </div>

              <div>
                <h1
                  className="font-terminal text-4xl sm:text-5xl md:text-7xl text-primary text-glow-green glitch tracking-wider"
                  data-text="KSHITIJ GUPTA"
                >
                  KSHITIJ GUPTA
                </h1>
                <p className="font-mono text-xs text-muted-foreground mt-2">
                  <span className="text-secondary">uid=</span>1337
                  <span className="text-secondary ml-2">gid=</span>hackers
                  <span className="text-secondary ml-2">groups=</span>ctf,pentest,osint
                </p>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mb-6 border-l-2 border-secondary/30 pl-4"
            >
              <p className="font-mono text-sm text-foreground/70 leading-relaxed">
                <span className="text-secondary">// </span>
                Aspiring Security Analyst. Exploring how systems break —<br />
                <span className="text-secondary">// </span>
                and how to defend them better. Black hat mindset, white hat ethics.
              </p>
            </motion.div>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex items-center gap-2">
                <span className="text-secondary font-mono text-sm">root@kshitij:~$</span>
                <span className="font-mono text-sm text-primary text-glow-green">
                  {displayText}<span className="cursor-blink">█</span>
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <button
                className="hack-btn px-6 py-2.5 text-xs"
                onClick={() => scrollToSection("projects")}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Shield className="h-3.5 w-3.5" />
                  ./view_projects.sh
                </span>
              </button>
              <button
                className="hack-btn hack-btn-red px-6 py-2.5 text-xs"
                onClick={() => scrollToSection("contact")}
              >
                <span className="relative z-10">./init_contact.sh</span>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="flex justify-center mt-10"
        >
          <div className="animate-bounce">
            <ArrowDown className="text-primary/40 h-5 w-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};