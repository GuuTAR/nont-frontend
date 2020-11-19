import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Background from '../rectangle1486.jpg'

function Navbar_logout() {
    return (
        <Navbar className="Navbar justify-content-end" bg="light" variant="dark">
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