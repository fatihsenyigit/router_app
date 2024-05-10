
import React from 'react'
import  Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar';

const Logout = ({setUser}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setUser(false);
    navigate("/");
  };
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <h4>Please confirm to log out </h4>
        <Button onClick={handleClick}>Confirm</Button>
      </div>
    </div>
  );
};

export default Logout