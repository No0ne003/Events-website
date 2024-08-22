import { siteConfig } from "@/config/site";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInformation() {
  return (
    <div className="flex flex-col justify-start p-8 space-y-4">
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <MapPin className="w-5 h-5 text-gray-700" />
          <p className="font-semibold">Adresse</p>
        </div>
        <div className="pl-7">
          {siteConfig.address.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <Phone className="w-5 h-5 text-gray-700" />
          <p className="font-semibold">Tél.</p>
        </div>
        <div className="pl-7">
          <p>{siteConfig.tel}</p>
        </div>
      </div>
      <div className="space-y-1">
        <div className="flex items-center space-x-2">
          <Mail className="w-5 h-5 text-gray-700" />
          <p className="font-semibold">EMAIL</p>
        </div>
        <div className="pl-7">
          <p>{siteConfig.email}</p>
        </div>
      </div>
    </div>
  );
}
