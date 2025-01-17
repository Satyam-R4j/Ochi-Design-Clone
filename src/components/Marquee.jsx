import { animate, motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section   data-scroll-speed=".2" className="w-full  py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-2 border-b-2  border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          inherit={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[17vw] leading-none font-["Founders_Grotesk_Condensed"] font-semibold uppercase -mb-[3vw] pr-20  pt-10'
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          inherit={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[17vw] leading-none font-["Founders_Grotesk_Condensed"] font-semibold uppercase -mb-[3vw]  pr-20 pt-10'
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          inherit={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[17vw] leading-none font-["Founders_Grotesk_Condensed"] font-semibold uppercase -mb-[3vw] pt-10'
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
