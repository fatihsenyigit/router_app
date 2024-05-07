
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoginForm from "../components/LoginForm";


const PrivateRouter = ({user}) => {

      

   
  return <div>{user ? <Navigate to={'/home'}/> : <Navigate to={'/login'}/>}
  </div>;
}

export default PrivateRouter