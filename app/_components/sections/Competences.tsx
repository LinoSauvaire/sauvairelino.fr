export default function Competences() {
  const skills = {
    "Frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML", "CSS", "WinUI"],
    "Backend": ["Java", "Node.js", "Spring Boot", "Express", "Prisma", "Laravel", ".NET"],
    "Database": ["PostgreSQL", "MongoDB", "MariaDB", "MySQL"],
    "DevOps": ["Docker", "Git", "CI/CD"]
  };

  return (
    <div className="flex flex-col gap-4 pt-12">
      <h2 className="text-2xl font-bold text-white mb-2">Compétences</h2>
      <div className="grid grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-[#8B5CF6] font-semibold mb-3 text-sm">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white/5 border border-[#8B5CF6]/30 rounded-full text-xs text-[#C4B5FD]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
