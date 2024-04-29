import React from 'react';
import {Container, Navbar as NavbarBs, Nav, Button, Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Shop from '../assets/Shop.svg'

const Navbar = () => {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav>
                    <Nav.Link to="/" as={NavLink}>
                        Компания
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                        Магазин
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        О нас
                    </Nav.Link>
                </Nav>
                <Button
                    style={{width: "3rem", height: "3rem", position: 'relative'}}
                    variant="outline-primary"
                    className="rounded-circle"
                >
                    <Image src={Shop} alt="Корзина покупок"/>
                    <div
                        className="rounded-circle bg-danger d-flex
                        justify-content-center align-items-center"
                        style={{
                            color: 'white',
                            width: "1.5rem",
                            height: "1.5rem",
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)"
                        }}>
                        3
                    </div>
                </Button>
            </Container>
        </NavbarBs>
    );
};

export default Navbar;
