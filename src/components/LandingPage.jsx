import React from "react";
import arrow from "../assets/arrow.svg";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";

function Landingpage() {
  
  return (
    <>
      <div data-control data-scroll-section data-scroll-speed="-.8" className="w-full  bg-zinc-900 pt-1  ">
        <div className="textStructure mt-52  px-20 ">
          {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
            return (
              <div className="masker">
                <div className="w-fit flex items-end overflow-hidden">
                  {index === 1 && (
                    <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration:1}} className="w-[9vw] ml-3 rounded-md mr-2 h-[5.4vw] relative -top-[0.9vw]   bg-green-500"></motion.div>
                  )}
                  <h1
                   
                    className='uppercase pt-[2vw]  text-[6.4vw] scale-x-95 scale-y-125 leading-[.75] font-extrabold   font-["Founders_Grotesk_Condensed"] '
                  >
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>{" "}
      <div className="  border-t-[1px] mt-20 border-zinc-700 flex justify-between items-center py-5 px-20  ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none text-white"
          >
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5">
          <div className=" cursor-pointer px-5 py-2 border-[1px] border-zinc-400 font-light text-md  rounded-full bottom-2 ">
            START THE PROJECT
          </div>
          <div className=" cursor-pointer w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-400 ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
