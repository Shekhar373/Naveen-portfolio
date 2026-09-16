import React from "react";
import Canvas from "./ThreeCanvas";

const Hero = () => {
  return (
    <div className="h-screen w-full relative flex justify-center items-end">
      <div className="absolute top-0 h-screen w-full">
        <Canvas />
      </div>
      <div className="h-screen w-full flex p-5 ">
        <div className="h-full w-1/2 flex flex-col justify-end gap-10">
          <h1 className="border border-white/30 rounded-full text-sm px-4 py-2 w-fit text-white mix-blend-difference"> YOUR PERSONAL PRODUCTIVITY BUDDY</h1>
          <h1 className="text-white mix-blend-difference text-[5vw] leading-[5vw]">I DESIGN DIGITAL EXPERIENCES THAT PEOPLE REMEMBER.</h1>
        </div>
        <div className="h-full w-1/2 flex flex-col justify-end gap-10  pl-[20vw]">
        <h1 className="text-lg leading-tight text-zinc-600">I’m a multidisciplinary designer focused on creating bold visual identities, and digital experiences for brands and businesses.</h1>
        <button className="bg-white text-black border rounded-full w-fit px-4 py-2 font-semibold">VIEW MY WORK</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
