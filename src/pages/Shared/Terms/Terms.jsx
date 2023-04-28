import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere officiis aut ipsam, temporibus doloribus at recusandae consectetur laboriosam sed nulla!</p>
            <p>Go Back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;