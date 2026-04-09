import SectionHero from "./SectionHero";
import DeveloperCard from "./DeveloperCard";
import abdullahImg from "@/assets/abdullah.png";
import shahriyarImg from "@/assets/shahriyar.jpg";
import usmanImg from "@/assets/usman.jpg";

const developers = [
  {
    name: "Abdullah Aziz",
    role: "Lead Developer & Project Architect",
    photo: abdullahImg,
    badges: [
      { label: "Team Lead", type: "lead" as const },
      { label: "Full Stack", type: "core" as const },
    ],
    bio: "Passionate about creating impactful technology for social good. Led the development of Suraksha's core architecture, real-time alert system, and location tracking features.",
    stats: [
      { value: "15", label: "Features" },
      { value: "98%", label: "Uptime" },
    ],
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "AWS", "WebSockets"],
    github: "https://github.com/abdullahaziz12",
    linkedin: "https://www.linkedin.com/in/abdullah-aziz-24bba9387",
    email: "abdullahazizgujjar009@gmail.com",
    variant: "dev1" as const,
  },
  {
    name: "Shahriyar Shafiq",
    role: "UI/UX Designer & Frontend Developer",
    photo: shahriyarImg,
    badges: [
      { label: "UI/UX Lead", type: "ui" as const },
      { label: "Frontend", type: "core" as const },
    ],
    bio: "Designer and developer focused on creating intuitive, accessible interfaces. Designed Suraksha's visual identity, user experience flows, and responsive layouts.",
    stats: [
      { value: "8", label: "Screens" },
      { value: "4.9", label: "Rating" },
    ],
    skills: ["Figma", "React", "CSS", "Tailwind", "SVG", "Animation"],
    github: "https://github.com/sharyarshafiq79",
    linkedin: "https://www.linkedin.com/in/sharyar-shafiq-862645243",
    email: "sharyarshafiq7860@gmail.com",
    variant: "dev2" as const,
    delay: "delay-100",
  },
  {
    name: "Muhammad Usman",
    role: "Backend Engineer & Security Specialist",
    photo: usmanImg,
    badges: [
      { label: "Backend", type: "backend" as const },
      { label: "Security", type: "core" as const },
    ],
    bio: "Backend specialist ensuring Suraksha runs fast and secure. Built the notification system, database architecture, and encryption layers for maximum user privacy.",
    stats: [
      { value: "12", label: "APIs" },
      { value: "99%", label: "Security" },
    ],
    skills: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Encryption"],
    github: "https://github.com/usmanjaved11",
    linkedin: "https://www.linkedin.com/in/muhammad-usman-javed-5610b5388",
    email: "muhammadusman34w@gmail.com",
    variant: "dev3" as const,
    delay: "delay-200",
  },
];

const DeveloperSection = () => {
  return (
    <section>
      <SectionHero
        badge="Meet the Team"
        title={<>Built by <span className="text-rose">Passionate</span> Developers</>}
        subtitle="Three dedicated students on a mission to make the world safer for women through innovative technology."
      />
      <div className="max-w-[1100px] mx-auto px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((dev) => (
            <DeveloperCard key={dev.name} {...dev} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
