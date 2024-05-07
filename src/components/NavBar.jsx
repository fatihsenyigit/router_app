import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Container>
        <Navbar className="bg-success d-flex justify-content-between">
          <div>
            <NavLink to={'/'} className=" ms-3 text-white text-decoration-none fs-3">
              Home
            </NavLink>
          </div>
          <div  className="d-flex me-3 text-decoration-none">
            <NavLink to={'/home/about'} className=" ms-3 text-white text-decoration-none fs-3">
              About
            </NavLink>
            <NavLink to={'/home/logout'} className=" ms-3 text-white text-decoration-none fs-3">
              Logout
            </NavLink>
          </div>
        </Navbar>
      </Container>
    </div>
  );
}

export default NavBar