export default function ContactInfo() {
  return (
    <div className="mt-[18px] grid grid-cols-2 gap-x-8 gap-y-4">
      <div className="flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-[#8B5CF6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="text-[13px] text-[#9CA3AF]">contact@sauvairelino.fr</span>
      </div>
      
      <div className="flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-[#8B5CF6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        <a href="https://www.linkedin.com/in/lino-sauvaire-6616b3360/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-[#9CA3AF]">
          Lino Sauvaire - LinkedIn
        </a>
      </div>
      
      <div className="flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-[#8B5CF6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="text-[13px] text-[#9CA3AF]">+330630307975</span>
      </div>
      
      <div className="flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-[#8B5CF6] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-[13px] text-[#9CA3AF]">Marseille, France</span>
      </div>
    </div>
  );
}
