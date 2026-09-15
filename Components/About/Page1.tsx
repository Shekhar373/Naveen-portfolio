import React from "react";

const Page1 = () => {
  return (
    <div className="h-screen w-full flex bg-black">
      <div className="h-full w-1/2 flex flex-col items-end">
        <h1 className="text-[20vw] w-full leading-[20vw] font-semibold tracking-tight">
          Info
        </h1>
        <div className="w-1/2 h-full flex flex-col justify-between pt-[20vh] pb-5">
          <h1 className="w-[70%] uppercase leading-tight">
            Artiom is a passionate digital designer based in Yerevan, Armenia.
          </h1>
          <div>
            <h1 className="uppercase text-zinc-500">For inquiries:</h1>
            <h1>NAVEENKR@GMAIL.COM</h1>
          </div>
        </div>
      </div>
      <div className="h-full w-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://cdn.prod.website-files.com/680370eb38ccbea9790c27e5/68457b2bec7e8fd8e39004af_90480f16badeb6b70a69ab2ea5637376_bez_shuma%201_donarosheno%20%281%29.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Page1;
