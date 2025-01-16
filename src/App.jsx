import React from "react";
import Navbar from "./components/navbar";
import Landingpage from "./components/Landingpage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";


function App() {
  
  return (
    <div className="w-full min-h-screen bg-zinc-900    text-white  ">
      <Navbar />
      <Landingpage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
