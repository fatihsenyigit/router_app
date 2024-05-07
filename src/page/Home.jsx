import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
      const [followers, setFollowers] = useState()
 

    const getFollowers = () => {
        fetch(
          "https://api.github.com/users/anthonyharold67/followers?per_page=100",
        )
          .then((res) => res.json())
          .then((data) => setFollowers(data))
          .catch((err) => console.log(err));
    }

     useEffect(() => {
       getFollowers();
     }, []);

  return (
    <div>
      <NavBar />
      <Outlet></Outlet>
      <Container className=" mt-4">
        <InputGroup className="mb-3 w-50 m-auto">
          <InputGroup.Text id="basic-addon1">search</InputGroup.Text>
          <Form.Control aria-label="search" aria-describedby="basic-addon1" />
        </InputGroup>
        <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="d-flex flex-wrap">
          {followers?.map((item, index) => (
            <Col key={item.id} className="d-flex justify-content-center mt-3">
              <Card
                className="d-flex justify-content-center align-items-center text-center pt-3"
                style={{ width: "12rem" }}
              >
                <Card.Img
                  variant="top"
                  src={item.avatar_url}
                  style={{ width: "150px" }}
                />
                <Card.Body>
                  <Card.Title>{item.login}</Card.Title>

                  <Button variant="primary">details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home