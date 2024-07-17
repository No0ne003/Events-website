"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Icons } from "./icons";

export default function Intro() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let mm = gsap.matchMedia();

    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.to("#intro-logo", {
        scale: 1,
      })
        .to("#intro-logo", {
          scale: 1.1,
          delay: 0.1,
          duration: 0.2,
        })
        .to("#intro-logo", {
          scale: 1,
        })
        .to("#intro-slider", {
          yPercent: "-100",
          delay: 0.5,
          duration: 1,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="absolute h-screen w-full p-10 bg-primary text-background top-0 left-0 font-mono z-10 flex flex-col items-center justify-center gap-10 overflow-hidden"
      >
        <Icons.tei
          id="intro-logo"
          className="fill-backgroundself-center size-72 scale-0"
        />
      </div>
    </div>
  );
}
