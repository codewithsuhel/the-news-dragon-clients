import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const NavigationBar = () => {
    const {user} = useContext(AuthContext)
  return (
    <Container>
      <Navbar className="mt-2 mb-2 " bg="white" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto align-items-center ">
              <Link to="/category/0">Home</Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Career</Nav.Link>
            </Nav>
            <Nav >
              {user && (
                  <FaUserCircle
                    className="mt-2 me-2"
                    style={{ fontSize: "1.5rem" }}
                  ></FaUserCircle>
                
              )}
                {user ? (
                  <Button variant="secondary">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="secondary">Login</Button>
                  </Link>
                )}
            </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
