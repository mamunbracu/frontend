import React, { Fragment } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Item className="mr-3">Home</Nav.Item>
            <Nav.Item className="mr-3">
              {" "}
              <Link to="/property">Property</Link>{" "}
            </Nav.Item>
            <Nav.Item className="mr-3"><Link to="/issue">Issue</Link> </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
