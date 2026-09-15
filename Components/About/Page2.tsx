import React from "react";

const Page2 = () => {
  return (
    <div className="bg-black h-screen w-full flex p-5">
      <div className="h-full w-[80vw] flex justify-center items-center px-[10vw]">
        <h1 className="text-3xl">
          <span className="pr-20 text-xl">(Value)</span>Today, design plays one of the most important roles in a company’s
          growth. It’s a powerful tool that will help highlight a company’s
          strengths, enhance connections with its audience, increase brand
          loyalty, and set it apart from competitors. <br /><span className="pr-20 text-xl">(Value)</span> I
          believe that quality is always valued more than quantity. Every detail
          counts. I work closely with my clients, diving deep into each task to
          focus on what really matters and turn the best ideas into real
          solutions that will bring maximum benefit.
        </h1>
      </div>
      <div className="h-full w-[20vw] flex flex-col items-center justify-center gap-30">
        <video autoPlay muted loop src="https://cdn.prod.website-files.com/680370eb38ccbea9790c27e5%2F684f14964803603a917b5b98_about_video2-transcode.mp4"></video>
        <h1>My goal is to help companies and brands reach their full potential and leave their mark in a fast-moving world.</h1>
      </div>
    </div>
  );
};

export default Page2;
