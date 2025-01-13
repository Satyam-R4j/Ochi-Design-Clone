import React from "react";
import Navbar from "./components/navbar";
import Landingpage from "./components/Landingpage";
import Marquee from "./components/Marquee";
import About from "./components/About";


function App() {
  
  return (
    <div className="w-full min-h-screen bg-zinc-900    text-white  ">
      <Navbar />
      <Landingpage/>
      <Marquee/>
      <About/>
    </div>
  );
}

export default App;
