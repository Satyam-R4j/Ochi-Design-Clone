import React, { useEffect, useState } from "react";
import eyeImg from "../assets/eye-bg.jpg";

function Eyes() {
  const [Rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div className="w-full relative  h-screen   ">
        <img
          className="items-center justify-center w-full h-screen object-cover"
          src={eyeImg}
          alt=""
        />
        <div className="absolute top-1/2 flex left-1/2 gap-10  -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] justify-center items-center flex h-[15vw] rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative  rounded-full bg-zinc-900">
            <div className="text-white  translate-x-[35%] translate-y-[230%]  z-10"><p className="text-xl">PLAY</p> </div>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${Rotate}deg)`,
                }}
                className="line  w-full absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] h-10"
              >
                <div className=" w-10  h-10 rounded-full bg-zinc-100"></div>
                
              </div>
            </div>
          </div>
          <div className="w-[15vw] justify-center items-center flex h-[15vw] rounded-full bg-zinc-100">
            <div className="w-2/3 h-2/3 relative  rounded-full bg-zinc-900">
            <div className="text-white  translate-x-[35%] translate-y-[230%]  z-10"><p className="text-xl">PLAY</p> </div>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${Rotate}deg)`,
                }}
                className="line  w-full absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] h-10"
              >
                <div className=" w-10  h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
