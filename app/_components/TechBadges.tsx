export default function TechBadges() {
  return (
    <>
      {/* Floating tech badges in cascade with enhanced glassmorphism */}
      <div className="absolute left-8 top-[30%] px-4 py-2 rounded-xl bg-gradient-to-br from-white/10 to-purple-500/20 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(139,92,246,0.37)] z-20 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.5)] transition-all duration-300">
        <span className="text-[#E9D5FF] text-xs font-bold tracking-wide">.NET</span>
      </div>
      <div className="absolute left-5 top-[47%] px-4 py-2 rounded-xl bg-gradient-to-br from-white/10 to-purple-500/20 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(139,92,246,0.37)] z-20 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.5)] transition-all duration-300">
        <span className="text-[#E9D5FF] text-xs font-bold tracking-wide">JS</span>
      </div>
      <div className="absolute left-2 top-[64%] px-4 py-2 rounded-xl bg-gradient-to-br from-white/10 to-purple-500/20 border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(139,92,246,0.37)] z-20 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.5)] transition-all duration-300">
        <span className="text-[#E9D5FF] text-xs font-bold tracking-wide">JAVA</span>
      </div>
    </>
  );
}
