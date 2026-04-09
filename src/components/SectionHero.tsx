interface SectionHeroProps {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
}

const SectionHero = ({ badge, title, subtitle }: SectionHeroProps) => {
  return (
    <div className="relative pt-[72px] px-5 md:px-8 pb-12 text-center overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,hsl(var(--rose-glow)),transparent_70%)] pointer-events-none" />
      <div className="animate-fade-up inline-flex items-center gap-[7px] px-3.5 py-[5px] bg-rose/[0.08] border border-rose/20 rounded-[20px] text-[11px] font-semibold tracking-[1.5px] uppercase text-rose mb-5">
        <div className="w-1.5 h-1.5 rounded-full bg-rose animate-[pulse-dot_2s_infinite]" />
        {badge}
      </div>
      <h1 className="animate-fade-up delay-100 font-heading text-[clamp(32px,5vw,52px)] font-extrabold tracking-tight leading-[1.1] mb-4">
        {title}
      </h1>
      <p className="animate-fade-up delay-200 text-[15px] text-muted leading-[1.7] max-w-[520px] mx-auto">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHero;
