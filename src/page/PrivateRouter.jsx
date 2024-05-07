
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoginForm from "../components/LoginForm";


const PrivateRouter = ({user}) => {

      

   
  return <div>{user ? <Outlet /> : <Navigate to={'/login'}/>}
  </div>;
}

export default PrivateRouter