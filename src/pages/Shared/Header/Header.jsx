import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex bg-primary ">
        <Button variant="danger">Latest</Button>{" "}
        <Marquee className="text-white rounded" speed={50}>
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just some
          text.
        
        </Marquee>
      </div>
      <Navbar className="mt-2 mb-2" bg="white" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Career</Nav.Link>
            
          </Nav>
          <Nav>
            <img src="" alt="" />
            <Button variant="secondary">Login</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default Header;
