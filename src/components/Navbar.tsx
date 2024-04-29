import React from 'react';
import {Container, Navbar as NavbarBs, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <NavbarBs className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        Стартовая страница
                    </Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    );
};

export default Navbar;
