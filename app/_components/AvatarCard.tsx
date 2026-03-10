import Image from "next/image";
import TechBadges from "./TechBadges";

export default function AvatarCard() {
  return (
    <div className="relative h-full rounded-[22px] overflow-hidden group">
      {/* Background image with grayscale and darkening */}
      <Image
        src="/avatar.jpg"
        alt="Lino Sauvaire"
        fill
        className="object-cover grayscale brightness-75 group-hover:brightness-90 transition-all duration-500"
        priority
      />
      
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#6D28D9]/50 via-[#7C3AED]/20 to-transparent" />
      
      {/* Glassmorphism overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-purple-500/10 backdrop-blur-[1px]" />
      
      {/* Subtle border glow */}
      <div className="absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/10" />
      
      {/* Tech badges floating */}
      <TechBadges />
    </div>
  );
}
