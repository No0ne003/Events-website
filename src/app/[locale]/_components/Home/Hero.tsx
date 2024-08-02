"use client";
import TitleAnimation from "./TitleAnimation";
import ImageAnimation from "./ImageAnimation";
import HeroButton from "./HeroButtons";

const IMAGES = [
  "/festival-agicole.jpg",
  "/festival-national.jpg",
  "/festival-printemps.jpeg",
  "/marathon.jpg",
  "/mariage.jpg",
  "/semi-marathon-2.jpg",
  "/semi-marathon.jpg",
];

export default function Hero({
  locale,
  title,
  titleSplit,
  contactUs,
  discoverNow,
}: {
  locale: string;
  title: string[];
  titleSplit: string[];
  contactUs: string;
  discoverNow: string;
}) {
  const words = title.map((word, index) => ({
    word,
  }));

  return (
    <div className="container flex flex-col gap-36 justify-start items-center relative w-screen h-[calc(100vh-88px)]">
      <div className="flex flex-col gap-10 mt-24 lg:mb-0 justify-center items-center max-w-4xl max-h-[500px]">
        <div className="size-full flex flex-col justify-center items-center gap-10">
          <TitleAnimation
            locale={locale}
            title={words}
            flipWords={titleSplit}
          />
          <p className="text-muted-foreground text-center text-base font-medium max-w-2xl">
            Urba events international turns your vision into reality with
            tailored solutions that elevate your brand, captivate your audience,
            and create unforgettable experiences.
          </p>
        </div>
        <HeroButton
          locale={locale}
          contactUs={contactUs}
          discoverNow={discoverNow}
        />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <ImageAnimation images={IMAGES} />
      </div>
    </div>
  );
}
