import Image from "next/image";
import TechBadges from "./TechBadges";

export default function AvatarCard() {
  return (
    <div className="relative flex w-full h-full rounded-[16px] md:rounded-[22px] lg:rounded-l-none lg:rounded-r-[28px] overflow-hidden group">
      <Image
        src="/avatar.jpg"
        alt="Lino Sauvaire"
        fill
        className="object-cover grayscale brightness-50 group-hover:brightness-75 transition-all duration-500"
        priority
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#6D28D9]/70 via-[#7C3AED]/40 to-[#5B21B6]/20" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-500/15 backdrop-blur-[1px]" />
      
      <div className="absolute inset-0 rounded-[16px] md:rounded-[22px] lg:rounded-l-none lg:rounded-r-[28px] ring-1 ring-inset ring-white/10" />
       
      <TechBadges />
    </div>
  );
}
