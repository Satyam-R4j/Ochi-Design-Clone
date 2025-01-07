import React from "react";

function Landingpage() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1 px-20 ">
      <div className="textStructure mt-32">
        <div className="masker"></div>

        {["WE CREATE","EYE OPENING","PRESENTATION"].map((item, index)=>{
            return <h1 key={index} className='uppercase text-9xl leading-none tracking-tighter font-medium font-["Test_Founders_Grotesk_X-Condensed"] '>
          {item}
        </h1>
        })}
        
      </div>
    </div>
  );
}

export default Landingpage;
