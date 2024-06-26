import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import {Container} from "react-bootstrap";
import Home from "./pages/Home";
import Store from "./pages/Store";

import About from "./pages/About";
import Navbar from "./components/Navbar";
import {ShoppingCartProvider} from "./context/ShoppingCartContext";

const App = () => {
    return (
        <ShoppingCartProvider>
            <Navbar/>
            <Container className="mb-12">
                <Routes>
                    <Route path="/" element={<Store/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Container>
        </ShoppingCartProvider>
    )
}

export default App
