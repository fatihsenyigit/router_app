import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const LoginForm = () => {
  const [user, setUser] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser(true)
  }

  console.log(user)
  return (
    <div>
      <Container>
        <Navbar className="bg-success">
          <h4 className=" ms-3 text-white">Router_APP</h4>
        </Navbar>
        <Form className='w-50 my-3' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default LoginForm