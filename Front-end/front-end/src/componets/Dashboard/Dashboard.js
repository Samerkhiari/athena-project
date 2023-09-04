import React from 'react'
import { useDispatch} from 'react-redux';
import { logout } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const Logout=(event)=>{
    event.preventDefault()
  dispatch(logout())
  navigate("/")
  }

  return (
    <div>
      <button onClick={Logout}>Log-Out</button>
    </div>
  )
}

export default Dashboard
