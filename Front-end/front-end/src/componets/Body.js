import React from 'react'
import Social from './Social'
import Card from "./Card"
import Navbar from './Navbar'

function Body() {
  return (
    <div>
      <Navbar/>
      <div className='home-txt'>
      <p class="element">Organize Your
      <br/>Tasks  Easily 
      <br/>With Us</p>
      </div>
    <Social/>
    <Card/>
    </div>
  )
}

export default Body
