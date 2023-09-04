import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions';
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';



function Login() {
		const[Email,setEmail]=useState("")
		const[Password,setPassword]=useState("")

		const dispatch = useDispatch();
		const user=useSelector((state)=>(state.user))
const navigate=useNavigate()
	  	const loginn=(event)=>{
			event.preventDefault()
		dispatch(loginUser({Email,Password}))
		user && user.Role === 'user'? navigate("/dashboard") : navigate("/dashboardAdmin")
		
	  }
	 
  return (
	<>
	<Navbar/>
	<div id='Log-form'>
	<div className="background">
	<div className="shape"></div>
	<div className="shape"></div>
</div>

<form>
	<h3>Login Here</h3>

	<label htmlFor="username">Email</label>
	<input type="text" placeholder="Email" id="username" onChange={(e)=>(setEmail(e.target.value))}/>

	<label htmlFor="password">Password</label>
	<input type="password" placeholder="Password" id="password"  onChange={(e)=>(setPassword(e.target.value))}/>

	<button onClick={loginn} id='btn-log'>Log In</button>
	<p> Don't have an account ? <Link to="/sign-in">Sign In Here</Link></p>

</form>

</div>
</>
  )
}


export default Login
