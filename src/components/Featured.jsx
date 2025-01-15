import React from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      <div className="card-text w-full py-10 ">
        <div className="text ">
          <div className="boths  flex  items-center">
            <div className="first ml-20  px-10 flex items-center  gap-2 w-1/2 ">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <p className="text-white text-xl  uppercase font-['Neue_Montreal'] ">
                Cardboard Spaceship
              </p>
            </div>
            <div className="second  ml-20 flex  items-center  gap-2 w-1/2 ">
              <div className="w-3 h-3 rounded-full bg-white"></div>
              <p className="text-white text-xl  uppercase font-['Neue_Montreal'] ">
                AH2 & Matt Horn
              </p>
            </div>
          </div>
        </div>
        <div className="cards mt-6 w-full flex items-center justify-center  gap-10">
          <div className="card-container relative w-[42vw]   h-[80vh]">
            <h1 className="absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className=" card w-full h-full rounded-xl    overflow-hidden">
              <img src={card1} alt="" className="w-full h-full bg-cover " />
            </div>
          </div>
          <div className="card-container relative w-[42vw]   h-[80vh]">
            <h1 className="absolute text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>

            <div className=" card w-full h-full rounded-xl   overflow-hidden ">
              <img src={card2} alt="" className="w-full h-full bg-cover " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
