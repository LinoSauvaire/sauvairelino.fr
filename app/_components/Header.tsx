export default function Header() {
  return (
    <>
      <div className="hidden md:inline-flex absolute top-4 md:top-8 lg:top-12 left-4 md:left-8 lg:left-12 items-center gap-2 bg-white/5 rounded-full px-2.5 md:px-3 py-1 md:py-1.5 z-10">
        <span className="w-2 h-2 bg-[#22C55E] rounded-full" />
        <span className="text-[#D1D5DB] text-[10px] md:text-xs font-medium">Open to work</span>
      </div>

      <a 
        href="/cv/CV%20Lino%20Sauvaire.pdf" 
        download="CV_Lino_Sauvaire.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 md:top-6 lg:top-6 right-4 md:right-8 lg:right-8 px-3 md:px-[18px] py-2 md:py-2.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#9333EA] text-white text-[11px] md:text-[13px] font-semibold shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] transition-all z-[20] inline-block"
      >
        Télécharger CV
      </a>
    </>
  );
}
