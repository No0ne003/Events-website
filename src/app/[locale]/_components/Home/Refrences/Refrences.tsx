import RefrencesItem from "./RefrencesItem";

export default function Refrences() {
  const IMAGES = [
    "/references/central-logo.png",
    "/references/go-sport-logo.png",
    "/references/logo-city-sport.png",
    "/references/logo-mercure-international.png",
    "/references/logo-omrane.png",
    "/references/Logo_Sultan.png",
    "/references/maroc-logo.png",
    "/references/pepsi-logo.png",
    "/references/Volkswagen-Logo.svg",
  ];

  return (
    <div className="py-8">
      <div className="absolute left-0 flex gap-[7.5rem]">
        {[...IMAGES, ...IMAGES].map((item, index) => (
          <RefrencesItem key={index} image={item} />
        ))}
      </div>
    </div>
  );
}
