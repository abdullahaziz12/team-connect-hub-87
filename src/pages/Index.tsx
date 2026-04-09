import { useState } from "react";
import Navbar from "@/components/Navbar";
import DeveloperSection from "@/components/DeveloperSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"developers" | "contact">("developers");

  return (
    <div className="min-h-screen">
      <Navbar activeTab={activeTab} onTabChange={(tab) => { setActiveTab(tab); window.scrollTo({ top: 0, behavior: "smooth" }); }} />
      {activeTab === "developers" ? <DeveloperSection /> : <ContactSection />}
    </div>
  );
};

export default Index;
