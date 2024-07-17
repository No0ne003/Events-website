"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Icons } from "./icons";

export default function Intro() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    // Define media query for large screens
    mm.add("(min-width: 1024px)", () => {
      let ctx = gsap.context(() => {
        const t1 = gsap.timeline();
        t1.to(["#title-span-1", "#title-span-2", "#title-span-3"], {
          opacity: 1,
          y: "+=30",
          delay: 0.5,
          stagger: 0.8,
        })
          .to("#intro-slider", {
            background: "#B31E8E",
          })
          .to("#title-span-2", {
            x: "-=100",
          })
          .to("#title-span-3", {
            x: "+=500",
          })
          .to("#intro-logo", {
            yPercent: "100",
            delay: 0.5,
            duration: 1.5,
          })
          .to("#intro-slider", {
            yPercent: "-100",
            delay: 2,
            duration: 1.5,
          });
      }, comp);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="absolute h-screen w-full p-10 bg-gray-200 text-background top-0 left-0 font-mono z-10 flex flex-col items-center justify-center gap-10 overflow-hidden"
      >
        <h1
          id="main-title"
          className="text-5xl md:text-8xl flex flex-col gap-5 font-bold"
        >
          <span id="title-span-1" className="opacity-0">
            Urba
          </span>
          <span id="title-span-2" className="opacity-0">
            Events
          </span>
          <span id="title-span-3" className="opacity-0">
            International
          </span>
        </h1>
        <Icons.tei
          id="intro-logo"
          className="fill-background h-screen absolute top-[-100%] scale-[1.5]"
        />
      </div>
    </div>
  );
}
