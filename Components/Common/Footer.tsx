import React from "react";

const Footer = () => {
  return (
    <div className="h-[80vh] w-full flex">
      <div className="h-full w-1/2 text-[20vw] leading-[20vw] font-bold">
        <h1>NK</h1>
        <h1>_26</h1>
      </div>
      <div className="h-full w-1/2 p-10 flex flex-col gap-20 text-3xl">
        <div>
          <div className="flex gap-10">
            <h1>Email</h1>
            <h1>xyz@gmail.com</h1>
          </div>
          <div className="flex gap-10 pl-8">
            <h1>PH</h1>
            <h1>91+ 8888899999</h1>
          </div>
        </div>
        <div className="flex gap-10">
          <h1>Social</h1>
          <div>
            <h1>Instagram</h1>
            <h1>Linkedin</h1>
            <h1>Tweeter</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
