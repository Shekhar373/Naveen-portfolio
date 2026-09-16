
import React from "react";
import Canvas from "./ThreeCanvas";

const Hero = () => {
  return (
    <div className="h-screen w-full relative flex justify-center items-end">
      <div className="absolute top-0 h-screen w-full">
       <Canvas />
      </div>
      {/* <video autoPlay loop muted className='h-full w-full absolute top-0 object-cover' src="https://cdn.dribbble.com/userupload/48385941/file/8fff1995e69b1eb97216be0c6d91803a.mp4"></video> */}
      {/* <h1 className="text-[14vw] font-medium leading-tight text-white mix-blend-difference">
        Naveen Kumar
      </h1> */}
    </div>
  );
};

export default Hero;
