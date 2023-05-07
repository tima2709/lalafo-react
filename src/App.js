import React, {useEffect} from 'react';
import Header from "./components/Header/header";
import HeroPage from "./components/Pages/Body/HeroPage";
import ProductPage from "./components/Pages/ProductsPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContactPage from "./components/Pages/ContactPage";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "./redux/action/productAction";
import BasketPage from "./components/Pages/BasketPage/BasketPage";


const App = () => {
    const tech = useSelector(state => state.product.product)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <div>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<HeroPage tech={tech}/>}  />
                    <Route path="/ProductPage" element={<ProductPage tech={tech}/>} />
                    <Route path="/ContactPage" element={<ContactPage tech={tech}/>} />
                    <Route path={"/BasketPage"} element={<BasketPage tech={tech}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;