"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Intro() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title-span-1", "#title-span-2", "#title-span-3"], {
        opacity: 0,
        y: "+=30",
        delay: 0.5,
        stagger: 0.8,
      })
        .to(["#title-span-1", "#title-span-2", "#title-span-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.8,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          yPercent: "-100",
          duration: 1.5,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-mono z-10 w-full flex flex-col items-center justify-center gap-10 text-black"
      >
        <h1 id="main-title" className="text-8xl flex flex-col gap-5">
          <span id="title-span-1">Urba</span>
          <span id="title-span-2">Events</span>
          <span id="title-span-3">International</span>
        </h1>
      </div>
    </div>
  );
}
