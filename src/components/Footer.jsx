import React from "react";
import logoCard1 from "../assets/logoCard1.svg";


function Footer() {
  return (
    <div className="w-full h-screen bg-zinc-900 p-20">
      <div className="w-1/2 h-full flex flex-col justify-between uppercase font-['Founders_Grotesk_Condensed'] ">
        <div className="heading">
          <h1 className="text-[7vw] font-semibold leading-none -mb-10 tracking-tighter">
            Eye-
          </h1>
          <h1 className="text-[7vw] font-semibold leading-none -mb-10 tracking-tighter">
            Opening
          </h1>
        </div>
        <img className="w-20"  src={logoCard1} alt="" />
      </div>
    </div>
  );
}

export default Footer;
