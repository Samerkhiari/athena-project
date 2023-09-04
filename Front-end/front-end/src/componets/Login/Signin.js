import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import {registerUser} from "../../redux/actions"
import {useNavigate} from "react-router-dom"
import Navbar from '../Navbar';

function Signin() {

  const [Firstname,setFirstname]=useState("")
  const [LastName,setLastName]=useState("")
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")

  const navigate=useNavigate()

  const dispatch = useDispatch();
 
const registerr=()=>{
  const newUser={Firstname,LastName,Email,Password}
  dispatch(registerUser(newUser))
  navigate("/loging-in") 
}
  return (
    <>
    <Navbar/>
    <div id='Log-form'>
	<div class="background">
	<div class="shape"></div>
	<div class="shape"></div>
</div>

<form>
	<h3>Sign In Here</h3>

	<label for="Firstname">Firstname</label>
	<input type="text" placeholder="Firstname" id="Firstname" onChange={(e)=>(setFirstname(e.target.value))}/>

	<label for="LastName">LastName</label>
	<input type="text" placeholder="LastName" id="LastName"  onChange={(e)=>(setLastName(e.target.value))}/>

  <label for="Email">Email</label>
	<input type="email" placeholder="Email" id="Email"  onChange={(e)=>(setEmail(e.target.value))}/>

  <label for="LastName">Password</label>
	<input type="password" placeholder="Password" id="Password"  onChange={(e)=>(setPassword(e.target.value))}/>

	<button onClick={registerr} id='btn-log'>Sign In</button>
</form>
    </div>
    </>
  )
}

export default Signin;
