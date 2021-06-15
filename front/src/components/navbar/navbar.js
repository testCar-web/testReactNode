import React from 'react'
import { Button,Navbar,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUser, removeUserSession } from '../../utils/Common';

export default function navbar(props) {
    const user = getUser();

    const handleLogout = () => {   
        removeUserSession(); 
        props.history.push('/login');
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/listVoiture">List car</Nav.Link>
                </Nav>
                <Link to="/login">
                    <Button variant="outline-success">Login</Button>
                </Link>
                <input type="button" onClick={handleLogout} value="Logout" />
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
