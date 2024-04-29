import React, {useEffect, useState} from 'react';
import storeItems from "../data/items.json"
import {Col, Row} from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import {Suspense} from 'react';
import axios from "axios";
import {Circles} from "react-loader-spinner";

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

const Store = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetch = async (): Promise<Product[]> => {
            let {data} = await axios.get<Product[]>('https://fakestoreapi.com/products')

            setProducts(data)
        }
        fetch()
    }, [])

    return (
        <Suspense fallback={
            <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}/>}
        >
            <div>
                <h1>Магазин</h1>
                <Row md={2} xs={1} lg={3} className="g-3">
                    {products.map(product => (
                        <Col key={product.id}>
                            <StoreItem  {...product} />
                        </Col>
                    ))}
                </Row>
            </div>
        </Suspense>
    );
};

export default Store;
