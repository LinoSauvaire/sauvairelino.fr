"use client";

import { EnvelopeIcon } from '@heroicons/react/24/outline';

type Section = "accueil" | "resume" | "experiences" | "competences" | "projects";

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
  onContactClick: () => void;
}

export default function Navigation({ activeSection, onSectionChange, onContactClick }: NavigationProps) {
  const sections: { id: Section; label: string }[] = [
    { id: "accueil", label: "ACCUEIL" },
    { id: "resume", label: "RÉSUMÉ" },
    { id: "experiences", label: "EXPÉRIENCES" },
    { id: "competences", label: "COMPÉTENCES" },
    { id: "projects", label: "PROJECTS" },
  ];

  return (
    <div className="bg-[#0F0F14] rounded-full p-1.5 flex gap-1.5 overflow-x-auto scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-transparent">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`px-3 md:px-4 py-2 rounded-full text-[10px] md:text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 ${
            activeSection === section.id
              ? "bg-[#E5E7EB] text-[#111111] font-semibold"
              : "text-[#A1A1AA] hover:text-white"
          }`}
        >
          {section.label}
        </button>
      ))}
      
      <button
        onClick={onContactClick}
        className="px-3 md:px-4 py-2 rounded-full text-[10px] md:text-xs font-medium transition-all whitespace-nowrap flex-shrink-0 bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white hover:shadow-lg hover:shadow-purple-500/30 flex items-center gap-1.5"
      >
        <EnvelopeIcon className="w-3 h-3 md:w-3.5 md:h-3.5" />
        <span>CONTACT</span>
      </button>
    </div>
  );
}
