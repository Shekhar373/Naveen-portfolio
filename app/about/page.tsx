"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Page1 from "@/Components/About/Page1";
import Page2 from "@/Components/About/Page2";
import Page3 from "@/Components/About/Page3";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const container = useRef<HTMLDivElement | null>(null);
  const track = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!track.current || !container.current) return;

      const distance =
        track.current.scrollWidth - window.innerWidth;

      gsap.to(track.current, {
        x: -distance,
        ease: "none",

        scrollTrigger: {
          trigger: container.current,
          pin: true,
          scrub: 1.5,

          // Controls speed
          end: () => `+=${distance * 2}`,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* HORIZONTAL SECTION */}
      <main
        ref={container}
        className="h-screen bg-black text-white"
      >
        <div
          ref={track}
          className="flex h-screen w-[300vw]"
        >
          {/* PANEL 1 */}
          <section className="flex h-screen w-screen shrink-0 items-center justify-center">
            <Page1 />
          </section>

          {/* PANEL 2 */}
          <section className="flex h-screen w-screen shrink-0 items-center justify-center">
            <Page2 />
          </section>

          {/* PANEL 3 */}
          <section className="w-screen shrink-0">
            <Page3 />
          </section>
        </div>
      </main>

      {/* VERTICAL CONTENT */}
      <section className="min-h-screen bg-black text-white">
        <div className="min-h-screen flex items-center justify-center">
         
        </div>

        <div className="min-h-screen flex items-center justify-center">
          <p className="max-w-xl text-2xl">
            More content goes here...
          </p>
        </div>
      </section>

    </>
  );
}