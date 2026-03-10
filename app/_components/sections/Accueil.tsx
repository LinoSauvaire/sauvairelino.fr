import ProfileTitle from "../ProfileTitle";
import ContactInfo from "../ContactInfo";

export default function Accueil() {
  return (
    <div className="flex flex-col gap-[14px] md:gap-[18px] pt-6 md:pt-8 lg:pt-12">
      <ProfileTitle />
      <ContactInfo />
    </div>
  );
}
