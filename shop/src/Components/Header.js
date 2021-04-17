import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {

    return(
        <h1 className='navbar'>
            <Link to={`/`} className='buttonLink' >
                <button className='button1'>Home</button>
            </Link>
            <Link to={`/`} className='buttonLink' >
                <button className='button2'>Login</button>
            </Link>
            <Link to={`/`} className='buttonLink' >
                <button className='button3'>Checkout</button>
            </Link>
        </h1>
    )

}

export default Header;