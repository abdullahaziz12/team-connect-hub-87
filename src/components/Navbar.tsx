import { cn } from "@/lib/utils";

interface NavbarProps {
  activeTab: "developers" | "contact";
  onTabChange: (tab: "developers" | "contact") => void;
}

const Navbar = ({ activeTab, onTabChange }: NavbarProps) => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-5 md:px-8 h-[60px] bg-background/85 backdrop-blur-xl border-b border-border">
      <a href="#" className="flex items-center gap-2.5 no-underline">
        <div className="w-9 h-9 bg-gradient-to-br from-crimson to-rose rounded-[10px] flex items-center justify-center text-lg shadow-[0_0_18px_hsl(var(--rose-glow))]">
          🛡️
        </div>
        <span className="font-heading text-[19px] font-extrabold text-foreground">
          Surak<span className="text-rose">sha</span>
        </span>
      </a>
      <div className="flex gap-1">
        <button
          onClick={() => onTabChange("developers")}
          className={cn(
            "px-3 md:px-[18px] py-[7px] rounded-lg text-xs md:text-[13px] font-medium cursor-pointer border border-transparent bg-transparent transition-all",
            activeTab === "developers"
              ? "text-foreground bg-rose/10 border-rose/20"
              : "text-muted hover:text-foreground hover:bg-card"
          )}
        >
          Developers
        </button>
        <button
          onClick={() => onTabChange("contact")}
          className={cn(
            "px-3 md:px-[18px] py-[7px] rounded-lg text-xs md:text-[13px] font-medium cursor-pointer border border-transparent bg-transparent transition-all",
            activeTab === "contact"
              ? "text-foreground bg-rose/10 border-rose/20"
              : "text-muted hover:text-foreground hover:bg-card"
          )}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
