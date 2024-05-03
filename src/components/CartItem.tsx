import React, {FC, useEffect, useState} from 'react';
import {useShoppingCart} from "../context/ShoppingCartContext";
import axios from "axios";
import {Button, Stack} from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";

interface CartItemProps {
    id: number,
    quantity: number
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

const CartItem = ({id, quantity}: CartItemProps) => {
    const {removeFromCart} = useShoppingCart()
    const [item, setItem] = useState<Product>()
    useEffect(() => {
        const fetch = async (): Promise<Product> => {
            let {data} = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`)
            console.log(data)
            setItem(data)
        }
        fetch()
    }, [])

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item?.image} style={{width: '125px', height: '75px', objectFit: "contain"}}/>
            <div className="me-auto">
                <div>
                    {item?.title} {quantity > 1 &&
                <span className="text-muted" style={{fontSize: ".65rem"}}>x{quantity}</span>}
                </div>
                <div className="text-muted" style={{fontSize: ".75rem"}}>
                    {formatCurrency(item?.price)}
                </div>
            </div>
            <div> {formatCurrency(item?.price * quantity)}</div>
            <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item?.id)}>
                &times;
            </Button>
        </Stack>
    );
};

export default CartItem;
