import React from 'react'
import Navbar from '../Navbar'
import Image from "../../img/Anthos_Partners-01.max-1700x1700.png"

function Partners() {
  return (
    <div>
      <Navbar/>
      <img id='Partners' src={Image} alt='partners'/>
    </div>
  )
}

export default Partners
