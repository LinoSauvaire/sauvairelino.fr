export default function Resume() {
  return (
    <div className="flex flex-col gap-6 pt-12">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Résumé</h2>
        <p className="text-[#9CA3AF] text-sm leading-relaxed">
          Développeur fullstack passionné avec une expertise en Java, Next.js et bases de données.
          Spécialisé dans la création d'applications web modernes et performantes.
        </p>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold text-white mb-3">Formations</h3>
        <div className="space-y-3">
          <div className="border-l-2 border-[#8B5CF6] pl-4">
            <p className="text-white font-medium">Bachelor Développeur d'applications web</p>
            <p className="text-[#9CA3AF] text-sm">CESI - 2024-2027</p>
          </div>
        </div>
      </div>
    </div>
  );
}
