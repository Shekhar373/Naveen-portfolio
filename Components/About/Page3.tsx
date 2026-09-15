"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

const Page3 = () => {

    const textRef = useRef(null);
//   gsap.registerPlugin(SplitText, ScrollTrigger);

//   useGSAP(() => {
//     const split = new SplitText(".text-reveal h1", {
//       type: "chars, words",
//       mask: "lines",
//     });

//     gsap.from(split.chars, {
//       //   y: 80,
//       opacity: 0,
//       filter: "blur(15px)",
//       //   duration: 1.2,
//       stagger: 0.006,
//       ease: "power4.out",  
//       scrollTrigger: {
//         trigger: textRef.current,
//         start: "left 50%",
//         end: "left -40%",
//         markers: true,
//         scrub: true,
   
//       },
//     });

//     return () => split.revert();
//   });

  return (
    <div ref={textRef} className="h-[130vh] w-full relative mt-[10vh] p-5">
      <div className=" lg:absolute top-0 z-10 flex flex-col max-md:gap-10">
        <div className="text-reveal text-2xl lg:text-[5.5vw] lg:leading-[6vw] tracking-tight">
          <h1>
            I believe that the path to a genuinely successful project always
            goes through
          </h1>
          <div className="flex justify-end">
            <h1 className="w-[65%]">
              open communication and a properly organized design process.
            </h1>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:absolute lg:top-[50vh] lg:right-0 lg:pt-[20vh] flex flex-col gap-5">
          <h1 className="text-lg lg:pr-[15vw] max-md:leading-tight">
            My name is Artiom. I’m a passionate creative who works closely with
            companies to help them unlock their full potential and solve
            specific business problems with effective and memorable design
            solutions.
          </h1>
          <h1 className="underline">About me</h1>
        </div>
      </div>
      <div className="h-full flex flex-col lg:flex-row items-center">
        <div className="h-[40vh] w-[90vw] lg:h-[90vh] lg:w-[40vw] overflow-hidden">
          <img
            className="h-[120%] object-cover"
            src="https://cdn.prod.website-files.com/680370eb38ccbea9790c27e5/684203348fe77e01eceb8e96_a9698d98c32c8029dd068726c0bd9387_proces-photo.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Page3;
