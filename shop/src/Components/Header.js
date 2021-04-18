import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {

    return(
        <h1 className='navbar'>
            <Link to={`/`} className='buttonLink1' >
                <button className='button1'>Home</button>
            </Link>
            <Link to={`/login`} className='buttonLink2' >
                <button className='button2'>Login</button>
            </Link>
            <Link to={`/checkout`} className='buttonLink3' >
                <button className='button3'>Checkout</button>
            </Link>
        </h1>
    )

}

export default Header;