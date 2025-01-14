import React from "react";

function Featured() {
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>
          Featured projects
        </h1>
      </div>
      {/* <div className="cards">
            <div className="text">
            {["Cardboard Spaceship","AH2 & Matt Horn"].map((item,index)=>{ return (
                <div className="w-2 h-2 bg-zinc-900"></div><div className="text-black">{item}

                </div>
            )})}</div>
        </div> */}
      {/* <div className="card-text w-full py-10 ">
        <div className="text pl-14  flex items-center justify-around    ">
          {["Cardboard Spaceship", "AH2 & Matt Horn"].map((item, index) => {
            return (
              <>
              <div className="both flex gap-2 items-center">
                <div className="w-2 rounded-full h-2 bg-white"></div>
                <p className="text-white uppercase font-['Neue_Montreal'] ">{item}</p></div>
              </>
            );
          })} */}
      {/* </div> */} {/* </div> */}
      <div className="card-text w-full py-10 ">
        <div className="text ">
          <div className="boths  flex  items-center">
            <div className="first px-10 flex items-center  gap-2 w-1/2 ">
              <div className="w-2 rounded-full h-2 bg-white"></div>
              <p className="text-white uppercase font-['Neue_Montreal'] ">
                Cardboard Spaceship
              </p>
            </div>
            <div className="second px-10 flex  items-center  gap-2 w-1/2 ">
              <div className="w-2 rounded-full h-2 bg-white"></div>
              <p className="text-white uppercase font-['Neue_Montreal'] ">
                AH2 & Matt Horn
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card w-1/2"></div>
    </div>
  );
}

export default Featured;
