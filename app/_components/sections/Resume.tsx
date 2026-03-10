export default function Resume() {
  return (
    <div className="flex flex-col gap-4 md:gap-6 pt-6 md:pt-8 lg:pt-12">
      <div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Résumé</h2>
        <p className="text-[#9CA3AF] text-xs md:text-sm leading-relaxed">
          Développeur fullstack passionné avec une expertise en Java, Next.js et bases de données.
          Spécialisé dans la création d'applications web modernes et performantes.
        </p>
      </div>
      
      <div>
        <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3">Formations</h3>
        <div className="space-y-3">
          <div className="border-l-2 border-[#8B5CF6] pl-3 md:pl-4">
            <p className="text-white font-medium text-sm md:text-base">Bachelor Développeur d'applications web</p>
            <p className="text-[#9CA3AF] text-xs md:text-sm">CESI - 2024-2027</p>
          </div>
        </div>
      </div>
    </div>
  );
}
