"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Intro() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-mono z-10 w-full flex flex-col gap-10 text-black"
      >
        <h1 id="title-1" className="text-9xl">
          Test The Test
        </h1>
        <h1 id="title-2" className="text-9xl">
          Apps From Appel
        </h1>
        <h1 id="title-3" className="text-9xl">
          Bug Test
        </h1>
      </div>
    </div>
  );
}
