import { cn } from "@/lib/utils";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

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
          <img src={photo} alt={name} className="w-full h-full object-cover object-top" />
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
              <GithubIcon />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-[10px] bg-[rgba(255,255,255,0.04)] border border-border flex items-center justify-center text-muted transition-all hover:bg-[rgba(255,255,255,0.08)] hover:border-border-hover hover:text-foreground hover:-translate-y-0.5">
              <LinkedinIcon />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`}
              className="w-10 h-10 rounded-[10px] bg-[rgba(255,255,255,0.04)] border border-border flex items-center justify-center text-muted transition-all hover:bg-[rgba(255,255,255,0.08)] hover:border-border-hover hover:text-foreground hover:-translate-y-0.5">
              <MailIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
