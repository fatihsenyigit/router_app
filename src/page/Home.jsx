import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import loading from "../assets/loading.gif";
import Paginate from "../components/Paginate";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [followers, setFollowers] = useState();
  const [activePage, setActivePage] = useState(1);
  const [searchData, setSearchData] = useState("");
  const perPage = 10;
  const startIndex = (activePage - 1) * perPage;

  const totalPages =
    searchData.trim() === ""
      ? Math.ceil(followers?.length / perPage)
      : Math.ceil(
          (followers?.filter((e) =>
            e.login.toLowerCase().includes(searchData.trim().toLowerCase()),
          )).length / perPage,
        );

  console.log(totalPages);

  const showFollowers =
    searchData.trim() === ""
      ? followers?.slice(startIndex, startIndex + perPage)
      : followers
          ?.filter((e) =>
            e.login.toLowerCase().includes(searchData.trim().toLowerCase()),
          )
          .slice(startIndex, startIndex + perPage);

  function getFollowers() {
    setIsLoading(true);
    fetch("https://api.github.com/users/anthonyharold67/followers?per_page=100")
      .then((res) => res.json())
      .then((data) => {
        return setFollowers(data), setIsLoading(false);
      })
      .catch((err) => {
        return console.log(err), setIsLoading(true);
      });
  }

  useEffect(() => {
    getFollowers();
  }, []);

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  return (
    <div>
      <NavBar />
      {isLoading ? (
        <div>
          <img src={loading} alt="loading" style={{ width: "200px" }} />
        </div>
      ) : (
        <Container className=" mt-4">
          <InputGroup className="mb-3 w-50 m-auto ">
            <InputGroup.Text id="basic-addon1">search</InputGroup.Text>
            <Form.Control
              onChange={handleChange}
              aria-label="search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Row
            xs={1}
            sm={2}
            md={3}
            lg={4}
            xl={5}
            xxl={6}
            // className="d-flex  "
          >
            {showFollowers?.map((item, index) => (
              <Col key={item.id} className="mt-3">
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
          <div className="mt-4 d-flex justify-content-center">
            <Paginate
              activePage={activePage}
              setActivePage={setActivePage}
              totalPages={totalPages}
            />
          </div>
        </Container>
      )}
    </div>
  );
};

export default Home;
