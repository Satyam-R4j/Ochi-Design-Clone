import React from "react";
import logoCard1 from "../assets/logoCard1.svg";
import logoCard2 from "../assets/logoCard2.svg";
import logoCard3 from "../assets/logoCard3.png";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="card-container  h-[50vh] w-1/2">
        <div className="card relative w-full flex items-center justify-center rounded-xl h-full  bg-[#004D3D]">
          <img className="w-28" src={logoCard1} alt="" />
          <button className="absolute px-5 py-1 rounded-full border-2  left-10 bottom-10">&copy; 2025-2041</button>
        </div>
      </div>
      <div className="card-container  h-[50vh]   w-1/2 flex gap-5">
        <div className="card relative w-full flex items-center justify-center rounded-xl h-full  bg-[#37524c]">
          {" "}
          <img className="w-28" src={logoCard2} alt="" />
          <button className="absolute px-5 py-1 rounded-full border-2  left-10 bottom-10">Watching the way </button>

        </div>
        <div className="card relative w-full flex items-center justify-center rounded-xl h-full  bg-[#212121]">
          {" "}
          <img className="w-28" src={logoCard3} alt="" />
          <button className="absolute px-5 py-1 rounded-full border-2  left-10 bottom-10">K41.ai</button>

        </div>
      </div>
    </div>
  );
}

export default Cards;
