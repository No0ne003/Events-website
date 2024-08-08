"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Services() {
  const services = [
    {
      title: "EVENT ORGANIZATION",
      description:
        "The field of event planning is vast, and we offer you a wide range of services from conception to organization and execution of your event. This includes sports events, cultural events, Fantasia, trade shows, corporate events, gala evenings, open house days, weddings, summer camp activities, and more.",
      image: "/services/organisation-des-evenements.jpeg",
    },
    {
      title: "MEDIA COVERAGE",
      description:
        "All your events and celebrations within the scope of event planning will be covered in terms of advertising posters, photos, and video production. Additionally, media outlets like radio, television, and social networks will create media buzz around the event in progress, maximizing communication to better reach the target audiences and make the moment unforgettable.",
      image: "/services/couvertures-mediatique.jpg",
    },
    {
      title: "VISUAL COMMUNICATION",
      description:
        "URBA EVENTS INTERNATIONAL offers the development of graphic charters and the creation of your various communication supports: Stand (Roll-Up, Totem), Banner, Advertising poster, Flyer, Leaflet, Brochure, Logo, Business card, Badges... We also ensure the printing of your documents with our in-house printing service. Our team of designers is always available to carry out all your projects according to your desires and needs.",
      image: "/services/communication-visuelle.jpg",
    },
    {
      title: "ARRANGEMENTS AND DECOR",
      description:
        "We design the layout of your spaces in continuity with the work of architects and project managers. We design your workspaces in 3D, fully manufacture our creations, and ensure the implementation of your project from A to Z. Our technical teams are highly qualified and work alongside us on all our projects. We offer furniture lines produced in our workshop by our own team.",
      image: "/services/amenagements-decor.jpg",
    },
    {
      title: "EQUIPMENT RENTAL",
      description:
        "Sound and audio equipment, Lighting, Giant LED screens, Stages, Tents and tarpaulins, Structures and flooring, Bleachers, Furniture, etc...",
      image: "/services/location-materiel.jpg",
    },
  ];

  const [currentService, setCurrentService] = useState(0);

  const handleTabClick = (index: number) => {
    setCurrentService(index);
  };

  return (
    <section className="container flex flex-col justify-center items-center mb-20">
      <SectionTitle title="Our Services" id="services" />
      <div className="flex size-full">
        <div className="w-1/3">
          <div className="size-full max-w-xs">
            <ul className="flex flex-col items-start justify-center size-full ">
              {services.map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    "w-full py-4 px-3 hover:text-secondary/80 cursor-pointer",
                    index === currentService
                      ? "bg-secondary/80 text-secondary-foreground hover:text-secondary-foreground/90"
                      : null,
                  )}
                  onClick={() => handleTabClick(index)}
                >
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
