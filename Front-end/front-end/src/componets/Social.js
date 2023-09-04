import React from 'react'
import F_logo from "../img/facebook.png"
import L_logo from "../img/linkedin.png"
import I_logo from "../img/instagram.png"

function Social() {
  return (
    <div>
      <p id='paragraph'>Athena is an efficient task manager web application designed <br/> to streamline your workflow. Organize your tasks effortlessly,<br/> stay on top of deadlines, and boost productivity with Athena's <br/> intuitive interface and powerful features</p>
      <div className='logo_png'>
    <img  src={F_logo} alt="Facebook-logo" />
    <img src={L_logo} alt="Linkedin-logo" />
    <img  src={I_logo} alt="Instagram-logo" />
    </div>
    </div>
  )
}

export default Social
