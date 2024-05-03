import React from 'react';
import {Offcanvas} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext";

interface ShoppingCart {
    isOpen: boolean
}

const ShoppingCart = ({isOpen} : ShoppingCart) => {
    console.log("here", isOpen)
    const {closeCart} = useShoppingCart()
    return (
        <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Корзина</Offcanvas.Title>
            </Offcanvas.Header>
        </Offcanvas>
    );
};

export default ShoppingCart;
