import React from "react";
import Navbar from "./components/navbar";
import Landingpage from "./components/Landingpage";
import Marquee from "./components/Marquee";


function App() {
  return (
    <div className="w-full h-screen bg-zinc-900    text-white  ">
      <Navbar />
      <Landingpage/>
      <Marquee/>
    </div>
  );
}

export default App;
