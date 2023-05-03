import React from 'react';
import './header.scss'
import Logo from "../Icons/logo";
import SearchLoop from "../Icons/search-loop";


const Header = () => {
    return (
        <header>
            <Logo/>
            <nav>
                <ul>
                    <li>Home page</li>
                    <li>Contact Us</li>
                </ul>
            </nav>
            <div>
                <button><SearchLoop/></button>
                <button>human</button>
            </div>
        </header>
    );
};

export default Header;