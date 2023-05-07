import React from 'react';
import './header.scss'
import Logo from "../Icons/logo";
import SearchLoop from "../Icons/search-loop";
import {Link} from "react-router-dom";
import BasketIcon from "../Icons/basket";


const Header = () => {
    return (
        <header>
            <Link to={'/'}><Logo/></Link>
            <nav>
                <ul>
                    <Link to={'/'}><li>Home page</li></Link>
                    <Link to={'/ProductPage'}><li>Products</li></Link>
                    <Link to={'/ContactPage'}><li>Contact Us</li></Link>
                </ul>
            </nav>
            <div>
                <button><SearchLoop/></button>
                <Link to={'/BasketPage'}><button><BasketIcon/></button></Link>
                <button>human</button>
            </div>
        </header>
    );
};

export default Header;