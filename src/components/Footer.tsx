import { useState, useEffect } from "react";
import { Terminal, Clock, Activity } from "lucide-react";

export const Footer = () => {
  const [uptime, setUptime] = useState("00:00:00");
  const [lastScan, setLastScan] = useState("");

  useEffect(() => {
    const startTime = Date.now();
    setLastScan(new Date().toLocaleString());
    const updateUptime = () => {
      const diff = Date.now() - startTime;
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setUptime(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`);
    };
    const interval = setInterval(updateUptime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-10 px-4 border-t border-primary/10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <Terminal className="text-primary mr-3 h-5 w-5" />
            <div>
              <div className="font-cyber text-lg font-bold text-primary">Kshitij Gupta</div>
              <div className="font-mono text-xs text-muted-foreground">Cybersecurity Portfolio v2.0</div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="text-center">
              <div className="flex items-center mb-1 gap-1.5">
                <Activity className="text-secondary h-3.5 w-3.5" />
                <span className="font-mono text-xs text-secondary">Uptime</span>
              </div>
              <div className="font-cyber text-base font-bold text-secondary">{uptime}</div>
            </div>
            <div className="text-center">
              <div className="flex items-center mb-1 gap-1.5">
                <Clock className="text-accent h-3.5 w-3.5" />
                <span className="font-mono text-xs text-accent">Last Scan</span>
              </div>
              <div className="font-mono text-xs text-accent">{lastScan}</div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="font-mono text-xs text-muted-foreground">
              © 2025 Kshitij Gupta. All systems operational.
            </div>
          </div>
        </div>

        <div className="mt-6 relative overflow-hidden">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          <div className="absolute top-0 left-0 h-px w-20 bg-primary animate-scan opacity-50"></div>
        </div>
      </div>
    </footer>
  );
};
