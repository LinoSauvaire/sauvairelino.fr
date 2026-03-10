"use client";

import { useState } from "react";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";
import AvatarCard from "./_components/AvatarCard";
import TechStack from "./_components/TechStack";

import Accueil from "./_components/sections/Accueil";
import Resume from "./_components/sections/Resume";
import Experiences from "./_components/sections/Experiences";
import Competences from "./_components/sections/Competences";
import Projects from "./_components/sections/Projects";

type Section = "accueil" | "resume" | "experiences" | "competences" | "projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("accueil");

  const renderSection = () => {
    switch (activeSection) {
      case "accueil":
        return <Accueil />;
      case "resume":
        return <Resume />;
      case "experiences":
        return <Experiences />;
      case "competences":
        return <Competences />;
      case "projects":
        return <Projects />;
      default:
        return <Accueil />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center relative overflow-hidden px-4 py-6 md:py-8">
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#6B3BFF] rounded-full blur-[180px] opacity-40 pointer-events-none" />
      
      <div className="relative w-full max-w-[1100px] h-auto md:h-[520px] bg-[#0B0B0F] rounded-[20px] md:rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/5 overflow-hidden">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] h-full p-6 md:p-8 lg:p-12 gap-6">
          <div className="flex flex-col justify-between h-full lg:pr-8 order-2 lg:order-1">
            <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent mb-6">
              {renderSection()}
            </div>
            
            <Navigation 
              activeSection={activeSection} 
              onSectionChange={setActiveSection}
            />
          </div>

          <div className="order-1 lg:order-2 h-[300px] md:h-[400px] lg:h-full">
            <AvatarCard />
          </div>
        </div>
      </div>
      
      <TechStack />
    </div>
  );
}
