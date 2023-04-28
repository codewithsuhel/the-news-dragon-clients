import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);


  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(email, password, confirm);
    setError("");

    if (password !== confirm) {
      setError("Your password did not match");
      return;
    } else if (password.length < 6) {
      setError("Please provide must be 6 characters or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
      });
  };

  const handleAccepted = event =>{
      setAccepted(event.target.checked);

  }

  return (
    <Container className=" w-50 mx-auto border p-5 shadow">
      <h2 className="mb-4">Register your account</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Your name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="Your photo url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirm"
            placeholder="Enter your confirm password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handleAccepted} 
          type="checkbox" 
          label={<>Accept <Link to="/terms">Terms and Conditions</Link></>}/>
        </Form.Group>
        <Form.Group>
          <Button variant="primary" disabled={!accepted} type="submit">
            Register
          </Button>
        </Form.Group>
        <br />
        <Form.Text className="text-secondary">
          Already Have An Account ? <Link to="/login">Login</Link>
        </Form.Text>
        <br />
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
