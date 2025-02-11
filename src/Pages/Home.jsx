import React from "react";
import Hero from "../Component/Hero";
import HeroContact from "../Component/HeroContact";
import ServiceHeroSection from "../Component/ServiceHeroSection";
import About from "../Component/About";
import Servicess from "../Component/Servicess";
import FuturePlans from "../Component/FuturePlans";

function Home() {
  return (
    <div>
      <HeroContact />
      <Hero />
      <ServiceHeroSection />
      <About />
      <Servicess />
      <FuturePlans />
    </div>
  );
}

export default Home;
