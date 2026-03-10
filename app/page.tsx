"use client";

import { useState } from "react";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";
import AvatarCard from "./_components/AvatarCard";
import TechStack from "./_components/TechStack";

// Import sections
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
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center relative overflow-hidden">
      {/* Background radial purple glow - bottom right */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#6B3BFF] rounded-full blur-[180px] opacity-40 pointer-events-none" />
      
      {/* Main portfolio card */}
      <div className="relative w-[1100px] h-[520px] bg-[#0B0B0F] rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/5">
        {/* Header with absolute positioned badges */}
        <Header />
        
        {/* Grid layout */}
        <div className="grid grid-cols-[1.2fr_0.8fr] h-full p-12">
          {/* Left section */}
          <div className="flex flex-col justify-between h-full pr-8">
            <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent">
              {renderSection()}
            </div>
            
            <Navigation 
              activeSection={activeSection} 
              onSectionChange={setActiveSection}
            />
          </div>

          {/* Right section - Avatar */}
          <AvatarCard />
        </div>
      </div>
      
      {/* Footer tech stack - outside card */}
      <TechStack />
    </div>
  );
}
