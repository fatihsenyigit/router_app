
import React from 'react'
import  Button  from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Logout = ({setUser}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    setUser(false);
    navigate("/");
  };
  return (
    <div className="container mt-5">
      <h4>Please confirm to log out </h4>
      <Button onClick={handleClick}>Confirm</Button>
    </div>
  );
};

export default Logout