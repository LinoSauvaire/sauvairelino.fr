"use client";

type Section = "accueil" | "resume" | "experiences" | "competences" | "projects";

interface NavigationProps {
  activeSection: Section;
  onSectionChange: (section: Section) => void;
}

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const sections: { id: Section; label: string }[] = [
    { id: "accueil", label: "ACCUEIL" },
    { id: "resume", label: "RÉSUMÉ" },
    { id: "experiences", label: "EXPÉRIENCES" },
    { id: "competences", label: "COMPÉTENCES" },
    { id: "projects", label: "PROJECTS" },
  ];

  return (
    <div className="bg-[#0F0F14] rounded-full p-1.5 flex gap-1.5">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
            activeSection === section.id
              ? "bg-[#E5E7EB] text-[#111111] font-semibold"
              : "text-[#A1A1AA] hover:text-white"
          }`}
        >
          {section.label}
        </button>
      ))}
    </div>
  );
}
