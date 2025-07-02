import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import Navbar from "./components/Navbar";
import React from "react";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
    </main>
  );
};

export default App;
