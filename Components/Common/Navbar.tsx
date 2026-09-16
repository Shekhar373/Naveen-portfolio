import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 h-[10vh] w-full flex items-center justify-between text-white mix-blend-difference z-50 p-5">
      <div>
        <h1 className="text-xl font-semibold">Naveen Kumaar</h1>
      </div>
      <div>
        <h1>12:00 AM</h1>
      </div>
      <div className="flex gap-5">
        <Link href='/' >HOME</Link>
        <Link href='/work' >WORK</Link>
        <Link href='/about' >ABOUT</Link>
   
      </div>
      <div>
        <button>BOOK A CALL</button>
      </div>
    </div>
  );
};

export default Navbar;
