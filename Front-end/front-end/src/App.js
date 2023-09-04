import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuthUser } from './redux/actions';
import {Routes ,Route} from "react-router-dom"
import './App.css';
import Body from "./componets/Body"
import Dashboard from "./componets/Dashboard/Dashboard"
import Signin from"./componets/Login/Signin"
import Login from "./componets/Login/Login"
import About from "./componets/NavBar/About"
import Contact from "./componets/NavBar/Contact"
import Features from "./componets/NavBar/Features"
import Partners from "./componets/NavBar/Partners"
import PrivateRoute from "./componets/PrivateRoute"
import DashboardAdmin from "./componets/Dashboard/DashboardAdmin"
import TaskList from './componets/Dashboard/Tasks/TaskList';



function App() {

  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAuthUser())
  },[])
  return (
    <div className="App">
      <div className="Nav">
     </div>
     <Routes>
     <Route path="/" element={<Body />} />
     <Route path="/About" element={<About />} />
     <Route path="/Contact" element={<Contact />} />
     <Route path="/Features" element={<Features/>} />
     <Route path="/Partners" element={<Partners/>} />
     <Route path="/loging-in" element={<Login />} />
   <Route path="/sign-in" element={<Signin />} />
   <Route path="/dashboard" element={<Dashboard />} />
   <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
   <Route path="/listTask" element={<TaskList />} />
</Routes>
    </div>
  );
}

export default App;
