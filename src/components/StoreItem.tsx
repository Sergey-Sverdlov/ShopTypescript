import React from 'react';
import {Button, Card} from "react-bootstrap";
import formatCurrency from "../utilities/formatCurrency";
import {useShoppingCart} from "../context/ShoppingCartContext";

const StoreItem = ({id, price, title, image}) => {
    const { getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
    return (
        <Card className="h-200">
            <Card.Img variant="top" src={image} height="200px"
                      style={{objectFit: "contain"}}/>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between
                align-items-baseline mb-4">
                    <span className="fs-2">{title}</span>
                    <span className="fs-2 text-muted">{formatCurrency(price)}</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                            <Button className="w-100" onClick={()=>{
                                increaseCartQuantity(id)
                            }}>
                                Добавить в корзину
                            </Button>
                        ) :
                        <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                            <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
                                <Button onClick={()=>decreaseCartQuantity(id)}>-</Button>
                                <div>
                                    <span className="fs-2">{quantity}</span> в корзине
                                </div>
                                <Button onClick={()=>increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button variant="danger" size="sm" onClick={()=>removeFromCart(id)}>
                                Удалить
                            </Button>
                        </div>

                    }
                </div>
            </Card.Body>
        </Card>
    );
};

export default StoreItem;
