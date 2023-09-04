import React from 'react'
import Navbar from '../Navbar'
import Image from "../../img/morning-brew-marketing-about-us-page.png"

function About() {
  return (
    <div>
      <Navbar/>
      <img src={Image} alt='about us'/>
    </div>
  )
}

export default About
