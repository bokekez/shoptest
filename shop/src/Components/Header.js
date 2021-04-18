import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context';

const Header = () => {
    const {user, setUser, loggedIn, setLoggedIn} = useContext(ItemContext);

    return(
        <h1 className='navbar'>
            <Link to={`/`} className='buttonLink1' >
                <button className='button1'>Home</button>
            </Link>
            { loggedIn === false?
            <Link to={`/login`} className='buttonLink2' >
                <button className='button2'>Login</button>
            </Link>
            :
            <Link to={`/profile`} className='buttonLink2' >
                <button className='button2'>{user.name}</button>
            </Link>
            }      
            <Link to={`/checkout`} className='buttonLink3' >
                <button className='button3'>Checkout</button>
            </Link>
        </h1>
    )

}

export default Header;