import { Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface DevCardProps {
  name: string;
  role: string;
  photo: string;
  badges: { label: string; type: "lead" | "core" | "ui" | "backend" }[];
  bio: string;
  stats: { value: string; label: string }[];
  skills: string[];
  github?: string;
  linkedin?: string;
  email?: string;
  variant: "dev1" | "dev2" | "dev3";
  delay?: string;
}

const badgeStyles = {
  lead: "bg-rose/10 text-rose border-rose/20",
  core: "bg-[hsl(var(--blue)/0.12)] text-s-blue border-[hsl(var(--blue)/0.2)]",
  ui: "bg-[hsl(var(--purple)/0.12)] text-s-purple border-[hsl(var(--purple)/0.2)]",
  backend: "bg-[hsl(var(--safe)/0.12)] text-safe border-[hsl(var(--safe)/0.2)]",
};

const headerGlow = {
  dev1: "from-rose/15 to-transparent",
  dev2: "from-[hsl(var(--blue)/0.12)] to-transparent",
  dev3: "from-[hsl(var(--safe)/0.12)] to-transparent",
};

const topBar = {
  dev1: "from-crimson via-rose to-blush",
  dev2: "from-s-blue to-s-purple",
  dev3: "from-safe to-s-blue",
};

const DeveloperCard = ({
  name, role, photo, badges, bio, stats, skills,
  github, linkedin, email, variant, delay = ""
}: DevCardProps) => {
  return (
    <div className={cn(
      "animate-fade-up group relative bg-card border border-border rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-border-hover hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]",
      delay
    )}>
      {/* Top accent bar */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r",
        topBar[variant]
      )} />

      {/* Header */}
      <div className="relative pt-9 pb-5 px-7 flex flex-col items-center text-center overflow-hidden">
        <div className={cn(
          "absolute inset-0 bg-gradient-radial pointer-events-none bg-[radial-gradient(circle_at_50%_0%,var(--tw-gradient-from),var(--tw-gradient-to))]",
          headerGlow[variant]
        )} />
        <div className="w-[120px] h-[120px] rounded-full border-[3px] border-border-hover bg-gradient-to-br from-secondary to-background flex items-center justify-center text-[52px] relative z-10 overflow-hidden">
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 mt-4">
          <div className="font-heading text-[22px] font-extrabold tracking-tight text-foreground">{name}</div>
          <div className="text-[13px] text-muted font-medium tracking-wide">{role}</div>
        </div>
      </div>

      {/* Badges */}
      <div className="px-7 flex gap-1.5 justify-center flex-wrap mb-5">
        {badges.map((b) => (
          <span key={b.label} className={cn("px-2.5 py-1 rounded-md text-[10px] font-semibold tracking-wide border", badgeStyles[b.type])}>
            {b.label}
          </span>
        ))}
      </div>

      {/* Body */}
      <div className="px-7 pb-7">
        <p className="text-sm leading-[1.7] text-muted mb-5">{bio}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-3 bg-[rgba(255,255,255,0.02)] border border-border rounded-[10px]">
              <div className="font-heading text-xl font-bold text-foreground mb-1">{s.value}</div>
              <div className="text-[10px] text-muted uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {skills.map((s) => (
            <span key={s} className="px-2.5 py-[5px] bg-[rgba(255,255,255,0.04)] border border-border rounded-md text-[11px] text-muted transition-all hover:bg-[rgba(255,255,255,0.08)] hover:text-foreground hover:border-border-hover">
              {s}
            </span>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-2 justify-center">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-[10px] bg-[rgba(255,255,255,0.04)] border border-border flex items-center justify-center text-muted transition-all hover:bg-[rgba(255,255,255,0.08)] hover:border-border-hover hover:text-foreground hover:-translate-y-0.5">
              <Github size={18} />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-[10px] bg-[rgba(255,255,255,0.04)] border border-border flex items-center justify-center text-muted transition-all hover:bg-[rgba(255,255,255,0.08)] hover:border-border-hover hover:text-foreground hover:-translate-y-0.5">
              <Linkedin size={18} />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`}
              className="w-10 h-10 rounded-[10px] bg-[rgba(255,255,255,0.04)] border border-border flex items-center justify-center text-muted transition-all hover:bg-[rgba(255,255,255,0.08)] hover:border-border-hover hover:text-foreground hover:-translate-y-0.5">
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
