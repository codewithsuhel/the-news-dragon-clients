import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaInstagram} from "react-icons/fa";
import QZone from "../QZone/QZone";
import LearnMore from "../LearnMore/LearnMore";



const RightNav = () => {
  return (
    <div>
      <h4 className="mb-2">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>{" "}
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Login with Github
      </Button>{" "}
      <div>
        <h4 className="mt-3 mb-3">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item> <FaFacebook />  Facebook</ListGroup.Item>
          <ListGroup.Item> <FaLinkedin />  Linkedin</ListGroup.Item>
          <ListGroup.Item> <FaTwitter />  Twitter</ListGroup.Item>
          <ListGroup.Item> <FaInstagram />  Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <LearnMore></LearnMore>
      
    </div>
  );
};

export default RightNav;
