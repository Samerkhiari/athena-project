import React from 'react'
import Logo from "../img/Athena-icon.png"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const user=useSelector((state)=>state.user)
  return (
    <div className='NAV'>
    <Link to="/"><img id='Athena-logo' src={Logo} alt="Athena-logo" /></Link>
    <div className='Nav-text'>
    <button><Link to="/">HOME</Link></button>
    <button><Link to="/About">ABOUT</Link></button>
    <button><Link to="/Partners">PARTNERS</Link></button>
    <button><Link to="/Features">FEATURES</Link></button>
    <button><Link to="/Contact">Contact</Link></button>
    {
      !user &&
      <>
   <button  className='home-btn'><Link to="/loging-in">LOG IN</Link></button>
   <button  className='home-btn'><Link to="/sign-in">SIGN IN</Link></button>
   </>
    }
 
    </div>
    <div>
      
    </div>

      
    </div>
  )
}

export default Navbar
