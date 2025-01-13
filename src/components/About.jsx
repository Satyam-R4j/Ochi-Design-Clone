import React from "react";

function About() {
  return (
    <div className="w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10  mt-20  border-[#92a451]">
        <div className="w-1/2 ">
          <h1 className="text-7xl">Our approach :</h1>
          <button className="px-6 uppercase   flex justify-center gap-5 items-center py-4 bg-zinc-900 mt-10 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100  rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh]  rounded-3xl bg-[#a3be44]"></div>
      </div>
    </div>
  );
}

export default About;
