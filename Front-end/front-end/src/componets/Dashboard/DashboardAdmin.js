import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import UserCount from "./UserCount";
import AddTaskForm from './Tasks/AddTaskForm';


function DashboardAdmin() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Logout = (event) => {
    event.preventDefault();
    dispatch(logout());
    navigate("/");
  };



  return (
    <div>
      <UserCount />
      <AddTaskForm/>
      <button className="styled-button" onClick={Logout}>Log-Out</button>
    </div>
  );
}

export default DashboardAdmin;
