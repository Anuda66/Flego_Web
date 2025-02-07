import React from 'react'
import Hero from '../Component/Hero'
import HeroContact from '../Component/HeroContact'
import ServiceHeroSection from '../Component/ServiceHeroSection'
import About from '../Component/About'

function Home() {
  return (
    <div>
      <HeroContact/>
      <Hero/>
      <ServiceHeroSection/>
      <About/>
    </div>
  )
}

export default Home