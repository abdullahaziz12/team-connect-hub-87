import { useState } from "react";
import Navbar from "@/components/Navbar";
import DeveloperSection from "@/components/DeveloperSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"developers" | "contact">("developers");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeTab={activeTab} onTabChange={(tab) => { setActiveTab(tab); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
      <div className="flex-1">
        {activeTab === "developers" ? <DeveloperSection /> : <ContactSection />}
      </div>
      <footer className="py-4 text-center text-xs text-muted border-t border-border">
        © {new Date().getFullYear()} All rights are reserved by the Izyl Developers Team
      </footer>
    </div>
  );
};

export default Index;
