import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
    const [error, setError] = useState(null);
    const {logIn}= useContext(AuthContext)
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =  form.password.value;
        console.log(email, password);
        setError('')

        logIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset();
        })
        .catch(error=>{
            console.log(error)
            setError(error.message)
        })
    }
  return (
    <Container className=" w-50 mx-auto border p-5 shadow">
      <h2 className="mb-4">Login your account</h2>
      <Form onSubmit={handleLogin}>
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
        <Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form.Group>
        <br />
        <Form.Text className="text-secondary">
          Dont’t Have An Account ? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
