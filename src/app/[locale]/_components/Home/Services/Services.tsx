import SectionTitle from "@/components/ui/SectionTitle";

export default function Services() {
  const services = [
    {
      title: "ORGANISATION DES ÉVÉNEMENTS",
      description:
        "Le domaine de l’événementiel étant vaste, nous mettons à votre disposition de multiples services depuis la conception en passant par l’organisation jusqu’à la réalisation de votre événement. Ce serait entre événements sportifs, événements culturels, Fantasia, salons professionnels, événements d’entreprise, soirée gala, journée portes ouvertes, mariage, animation des centres d’estivage, ...",
      image: "/services/organisation-des-evenements.jpeg",
    },
    {
      title: "COUVERTURES MÉDIATIQUES",
      description:
        "Toutes vos manifestations et célébrations entrant dans le cadre événementiel, seront couvertes en terme d’affiches publicitaires, de réalisation photos et vidéos. Aussi les médias, radio télévision, réseaux sociaux, feront office de tapage médiatique, créant ainsi le buzz autour de l’événement en cours de réalisation, et ce, afin de maximiser la communication pour mieux atteindre les cibles concernées et rendre le moment inoubliable.",
      image: "/services/couvertures-mediatique.jpg",
    },
    {
      title: "COMMUNICATION VISUELLE",
      description:
        "URBA EVENTS INTERNATIONAL vous propose l’élaboration des chartes graphiques et la création de vos différents supports de communication : Stand (Roll-Up, Totem), Banderole, Affiche publicitaire, Flyer, Dépliant, Brochure, Logo, Carte de visite, Badges… Elle vous assure aussi l’impression de vos documents grâce à son interne imprimerie. Notre équipe de designers restera toujours à votre disposition afin de réaliser tous vos projets selon vos envies et vos besoins.",
      image: "/services/communication-visuelle.jpg",
    },
    {
      title: "AMÉNAGEMENTS ET DÉCOR",
      description:
        "Nous imaginons l’agencement de vos espaces en continuité avec le travail des architectes et maîtres d’œuvre. Nous concevons en 3D vos espaces de travail. Nous fabriquons intégralement nos créations et assurons l’implantation de votre projet de A à Z. Nos équipes techniques sont hautement qualifiées et travaillent à nos côtés sur l’ensemble de nos projets. Nous vous proposons des lignes de mobiliers produites dans notre atelier par nos soins.",
      image: "/services/amenagements-decor.jpg",
    },
    {
      title: "LOCATION MATÉRIEL",
      description:
        "Sonorisation et matériels audio, Éclairage, Écrans géants à LED, Scènes, Chapiteaux et dalots, Structures et planchers, Gradins, mobilier, etc...",
      image: "/services/location-materiel.jpg",
    },
  ];
  return (
    <section className="container flex flex-col justify-center items-center mb-20">
      <SectionTitle title="Our Services" id="services" />
      <div className="flex size-full">
        <div className="w-1/3">
          <div className="size-full max-w-xs">
            <ul className="flex flex-col items-start justify-center size-full ">
              {services.map((item, index) => (
                <li key={index} className="w-full py-4 hover:text-primary/60">
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-2/3"></div>
      </div>
    </section>
  );
}
