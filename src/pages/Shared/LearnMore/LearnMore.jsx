import React from "react";
import bg from "../../../assets/bg.png";
import { Button } from "react-bootstrap";

const LearnMore = () => {
  return (
    <div className="d-flex mt-4 align-content-center mx-auto">
        <img
          className=" position-absolute align-items-center"
          src={bg}
          alt=""
        />
      <div
        className="position-relative text-center mt-5"
        style={{ color: "white" }}
      >
        <h3 className="mt-5 mb-5">Create an Amazing Newspaper</h3>
        <p className="p-2 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id,
          consequatur!
        </p>
        <Button variant="danger">Learn More</Button>
      </div>
    </div>
  );
};

export default LearnMore;
