"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useRef } from "react";

const Skills = () => {

    const textRef = useRef(null)
    gsap.registerPlugin(SplitText, ScrollTrigger);

  useGSAP(() => {
    const split = new SplitText(".skill-text h1", {
      type: "chars, words",
      mask: "lines",
    });

    gsap.from(split.chars, {
      //   y: 80,
      opacity: 0,
      filter: "blur(15px)",
      stagger: 0.006,
      ease: "power4.out",  
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 30%",
        end: "top -50%",
        // markers:true,
        scrub: true,
      },
    });

    return () => split.revert();
  });
  return (
    <div  className='h-[200vh] w-full bg-[#120303]
    bg-[radial-gradient(circle_at_100%_0%,#a8320d_0%,#6b1308_22%,#300506_48%,#120303_75%)]'>
        <div ref={textRef} className='skill-text h-screen w-full flex flex-col gap-10 justify-center items-center'>
            <h1>(My areas of focus) </h1>
            <h1 className='text-[10vw] leading-[9vw] font-semibold text-white mix-blend-difference text-center'>KEY SKILLS <br /> & INTERESTS</h1>

        </div>
        <div className="h-fit flex">
           <div className="w-1/2"></div>
           <div className="w-1/2 text-3xl text-white mix-blend-difference">
           <h1>Branding</h1>
           <h1>Illustration</h1>
           <h1>Compositing</h1>
           <h1>Animation</h1>
           <h1>UI Design</h1>
           <h1>Storytelling</h1>
           <h1>Web Development</h1>
           <h1>Motion Graphics</h1>
           <h1>Logo Design</h1>
           <h1>Typography</h1>
           <h1>Creative Direction</h1>
           <h1>Visual Identity</h1>
           <h1>Art Direction</h1>
           <h1>Interaction Design</h1>
           <h1>Prototyping</h1>
      
      
      
           </div>
        </div>
    </div>
  )
}

export default Skills