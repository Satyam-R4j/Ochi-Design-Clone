import React from "react";
import logo from "../assets/logo-white.svg";
const navbar = () => {
  return (
    <div className='w-full fixed z-[999]  px-20 py-9 text-white font-["Neue Montreal"] flex justify-between items-center'>
      <div className="logo ">
        <img className="" src={logo} alt="z" />
      </div>
      <div className="links flex gap-10">
        {["Services", "Our Works", "About Us", "Insights", "Contact"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-lg capitalize font-light ${
                index === 4 && "ml-32"
              }`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default navbar;
