import ProfileTitle from "../ProfileTitle";
import ContactInfo from "../ContactInfo";

export default function Accueil() {
  return (
    <div className="flex flex-col gap-[18px] pt-12">
      <ProfileTitle />
      <ContactInfo />
    </div>
  );
}
