import React from "react";

function Landingpage() {
  return (
    <>
      <div className="w-full  bg-zinc-900 pt-1 px-20 ">
        <div className="textStructure mt-52 px-20">
          <div className="masker"></div>

          {["WE CREATE", "EYE OPENING", "PRESENTATION"].map((item, index) => {
            return (
              <h1
                key={index}
                className='uppercase text-[7.5vw] leading-[5.5vw] tracking-tighter font-medium font-["Founders_Grotesk"] '
              >
                {item}
              </h1>
            );
          })}
        </div>
      </div>{" "}
      <div className=" border-t-[1px] mt-32 border-zinc-700 flex justify-between items-center  ">
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
      </div>
    </>
  );
}

export default Landingpage;
