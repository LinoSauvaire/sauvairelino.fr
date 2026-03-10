export default function Header() {
  return (
    <>
      {/* Open to work badge - top left */}
      <div className="absolute top-12 left-12 inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5">
        <span className="w-2 h-2 bg-[#22C55E] rounded-full" />
        <span className="text-[#D1D5DB] text-xs font-medium">Open to work</span>
      </div>

      {/* Télécharger CV button - top right */}
      <button className="absolute top-12 right-12 px-[18px] py-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white text-[13px] font-semibold shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] transition-all">
        Télécharger CV
      </button>
    </>
  );
}
