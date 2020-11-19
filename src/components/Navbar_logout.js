import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Background from '../bg/rectangle1486.jpg'

function Navbar_logout() {
    return (
        <Navbar className="Navbar justify-content-end" bg="primary" variant="dark">
            <Nav>
                <Nav.Link href="/login">
                <Button variant="light" style={
                    {backgroundImage: `url(${Background})`,
                    fontWeight: "bold",
                    color: "blue",
                    borderRadius: "10px"}}>
                    Logout
                </Button>
                </Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default Navbar_logout;