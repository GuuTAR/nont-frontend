import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Background from '../rectangle1486.jpg'

function Navbar_back() {
    return (
        <Navbar className="justify-content-between" bg="primary" variant="dark">
            <Nav>
                <Button variant="outline-light" style={{border: "none", backgroundColor: "unset"}}>
                    ⇦ back
                </Button>
            </Nav>
            <Nav className="justify-content-end">
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

export default Navbar_back;