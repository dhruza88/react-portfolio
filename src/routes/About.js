import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'


const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="ABOUT" text="I am a 33 year old with a background in logistics and management for over a decade. Switching back to my original major in computer science, I am now an aspiring Full Stack Developer, learning how to integrate all different packages." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About