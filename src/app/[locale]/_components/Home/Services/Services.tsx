"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export default function Services() {
  const services = [
    {
      title: "EVENT ORGANIZATION",
      description:
        "The field of event planning is vast, and we offer you a wide range of services from conception to organization and execution of your event. This includes sports events, cultural events, Fantasia, trade shows, corporate events, gala evenings, open house days, weddings, summer camp activities, and more.",
      image: "/services/organisation-des-evenements.png",
    },
    {
      title: "MEDIA COVERAGE",
      description:
        "All your events and celebrations within the scope of event planning will be covered in terms of advertising posters, photos, and video production. Additionally, media outlets like radio, television, and social networks will create media buzz around the event in progress, maximizing communication to better reach the target audiences and make the moment unforgettable.",
      image: "/services/couvertures-mediatique.png",
    },
    {
      title: "VISUAL COMMUNICATION",
      description:
        "URBA EVENTS INTERNATIONAL offers the development of graphic charters and the creation of your various communication supports: Stand (Roll-Up, Totem), Banner, Advertising poster, Flyer, Leaflet, Brochure, Logo, Business card, Badges... We also ensure the printing of your documents with our in-house printing service. Our team of designers is always available to carry out all your projects according to your desires and needs.",
      image: "/services/communication-visuelle.png",
    },
    {
      title: "ARRANGEMENTS AND DECOR",
      description:
        "We design the layout of your spaces in continuity with the work of architects and project managers. We design your workspaces in 3D, fully manufacture our creations, and ensure the implementation of your project from A to Z. Our technical teams are highly qualified and work alongside us on all our projects. We offer furniture lines produced in our workshop by our own team.",
      image: "/services/amenagements-decor.png",
    },
    {
      title: "EQUIPMENT RENTAL",
      description:
        "Sound and audio equipment, Lighting, Giant LED screens, Stages, Tents and tarpaulins, Structures and flooring, Bleachers, Furniture, etc...",
      image: "/services/location-materiel.png",
    },
  ];

  const [currentService, setCurrentService] = useState(0);

  const handleTabClick = (index: number) => {
    setCurrentService(index);
  };

  return (
    <section className="mb-20">
      <div className="lg:container flex flex-col justify-center items-center gap-20">
        <div className="max-lg:container space-y-2 self-start">
          <p className="uppercase text-muted-foreground italic text-sm">
            What we do
          </p>
          <SectionTitle
            title="ELEVATE YOUR VISION WITH OUR TOUCH."
            id="services"
            className="text-start"
          />
        </div>
        <div className="flex flex-col lg:flex-row max-lg:gap-5 size-full lg:h-[450px]">
          <div className="w-screen lg:w-1/3 ">
            <div className="size-full w-screen lg:max-w-xs overflow-x-scroll">
              <ul className="flex lg:flex-col items-start justify-start size-full max-lg:px-5">
                {services.map((item, index) => (
                  <li
                    className={cn(
                      "flex items-center w-full h-[60px] py-4 px-3 hover:text-secondary/80 cursor-pointer uppercase max-lg:text-xs",
                      index === currentService
                        ? "bg-secondary/80 text-secondary-foreground hover:text-secondary-foreground/90"
                        : null,
                    )}
                    onClick={() => handleTabClick(index)}
                    key={index}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex-1 max-lg:max-w-screen container">
            {services.map((service, index) =>
              index === currentService ? (
                <div
                  className="relative flex flex-col md:flex-row justify-end items-center gap-5"
                  key={index}
                >
                  <div className="self-start z-20 max-w-xl lg:mt-10 bg-background/20 backdrop-blur-3xl rounded-lg lg:absolute lg:left-0">
                    <p className="text-muted-foregroun py-5 px-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={400}
                    className="z-10 rounded-sm max-sm:w-screen size-[300px] lg:size-[400px] lg:mr-10"
                  />
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
