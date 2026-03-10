export default function Experiences() {
  const experiences = [
    {
      title: "Développeur Fullstack Senior",
      company: "Tech Corp",
      period: "2023 - Présent",
      description: "Développement d'applications web avec Next.js et PostgreSQL"
    },
    {
      title: "Développeur Backend",
      company: "StartUp Inc",
      period: "2021 - 2023",
      description: "Architecture et développement d'APIs REST avec Java et Spring Boot"
    }
  ];

  return (
    <div className="flex flex-col gap-4 pt-12">
      <h2 className="text-2xl font-bold text-white mb-2">Expériences</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-[#8B5CF6] pl-4 py-2">
            <h3 className="text-white font-semibold">{exp.title}</h3>
            <p className="text-[#8B5CF6] text-sm">{exp.company}</p>
            <p className="text-[#6B7280] text-xs mb-2">{exp.period}</p>
            <p className="text-[#9CA3AF] text-sm">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
