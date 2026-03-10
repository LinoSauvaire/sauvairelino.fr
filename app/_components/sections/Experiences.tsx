export default function Experiences() {
  const experiences = [
    {
      title: "Alternant Développeur Fullstack",
      company: "Tremplin",
      period: "2024 - Présent",
      description: "Développement d'applications web avec Next.js et PostgreSQL et Laravel"
    },
    {
      title: "Stage développeur Java",
      company: "SmartTrade Technologies",
      period: "2021",
      description: "Architecture et développement d'APIs REST avec Java et Spring Boot"
    }
  ];

  return (
    <div className="flex flex-col gap-3 md:gap-4 pt-6 md:pt-8 lg:pt-12">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Expériences</h2>
      <div className="space-y-3 md:space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-[#8B5CF6] pl-3 md:pl-4 py-2">
            <h3 className="text-white font-semibold text-sm md:text-base">{exp.title}</h3>
            <p className="text-[#8B5CF6] text-xs md:text-sm">{exp.company}</p>
            <p className="text-[#6B7280] text-[10px] md:text-xs mb-1.5 md:mb-2">{exp.period}</p>
            <p className="text-[#9CA3AF] text-xs md:text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
