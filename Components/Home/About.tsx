"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

const About = () => {
  const textRef = useRef(null);
  gsap.registerPlugin(SplitText, ScrollTrigger);

  useGSAP(() => {
    const split = new SplitText(".text-reveal h1", {
      type: "chars, words",
      mask: "lines",
    });

    gsap.from(split.chars, {
      //   y: 80,
      opacity: 0,
      filter: "blur(12px)",
      //   duration: 1.2,
      stagger: 0.006,
      ease: "power4.out",  
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 50%",
        end: "top -40%",
        // markers:true,
        scrub: true,
      },
    });

    return () => split.revert();
  });

  return (
    <div ref={textRef} className="h-[130vh] w-full relative mt-[20vh]">
      <div className=" lg:absolute top-0 z-10 flex flex-col max-md:gap-10 p-5">
        <div className="text-reveal text-2xl lg:text-[5.5vw] lg:leading-[6vw] tracking-tight">
          <h1>
            As a digital designer, I help brands and companies connect with
            their audience,
          </h1>
          <div className="flex justify-end">
            <h1 className="w-[65%]">
              achieve their business goals, and leave a mark in a fast-moving
              world.
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:absolute lg:top-[50vh] lg:right-0 lg:pt-[20vh] flex flex-col gap-5">
          <h1 className="text-lg lg:pr-[15vw] max-md:leading-tight">
            My name is Naveen. I’m a passionate creative who works closely with
            companies to help them unlock their full potential and solve
            specific business problems with effective and memorable design
            solutions.
          </h1>
          <h1 className="underline">About me</h1>
        </div>
      </div>
      <div className="h-full flex flex-col lg:flex-row items-center">
        <div data-speed="0.85" className="h-[40vh] w-[90vw] lg:h-[90vh] lg:w-[40vw] overflow-hidden">
          <img
            data-speed="0.8"
            className="h-[120%] object-cover"
            src="https://cdn.prod.website-files.com/680370eb38ccbea9790c27e5/681cae988e873716c61bda9a_0707ba72243953a3e74fad0bd268a2f5_Group%202085662595%20%281%29%20%281%29-p-2000.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
