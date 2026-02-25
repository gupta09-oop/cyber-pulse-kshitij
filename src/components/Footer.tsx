import { useState, useEffect } from "react";
import { Terminal, Activity } from "lucide-react";

export const Footer = () => {
  const [uptime, setUptime] = useState("00:00:00");

  useEffect(() => {
    const startTime = Date.now();
    const update = () => {
      const diff = Date.now() - startTime;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setUptime(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`);
    };
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-8 px-4 border-t border-primary/10 bg-background/80">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="text-primary h-4 w-4" />
            <span className="font-mono text-xs text-primary">root@kshitij</span>
            <span className="text-muted-foreground font-mono text-[10px]">// portfolio v3.0</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Activity className="text-primary h-3 w-3" />
              <span className="font-mono text-[10px] text-primary">{uptime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="status-online" />
              <span className="font-mono text-[10px] text-primary">OPERATIONAL</span>
            </div>
          </div>

          <div className="font-mono text-[10px] text-muted-foreground">
            © 2025 kshitij.gupta — all_rights_reserved
          </div>
        </div>

        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 h-px w-16 bg-primary animate-scan opacity-40"></div>
        </div>
      </div>
    </footer>
  );
};