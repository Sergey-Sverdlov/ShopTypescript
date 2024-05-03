import React from 'react';
import {Offcanvas, Stack} from "react-bootstrap";
import {useShoppingCart} from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import formatCurrency from "../utilities/formatCurrency";
import useGetData from "../hooks/useGetProducts";

interface ShoppingCart {
    isOpen: boolean
}

interface RatingType {
    rate: number;
    count: number
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ratingType;
}

const ShoppingCart = ({isOpen}: ShoppingCart) => {
    const allItems = useGetData<Product[]>('https://fakestoreapi.com/products')
    const {closeCart, cartItems} = useShoppingCart()
    return (
        <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Корзина</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item =>
                        <CartItem key={item.id} {...item} />)}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((acc, item) => {
                            const price = allItems.find(product => product?.id === item?.id)?.price
                            acc += item.quantity * price
                            return acc
                    }, 0))}
                    </div>
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default ShoppingCart;
