import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { ItemContext } from './Context';
import './Header.css'
import arrow from './Arrow.svg'
import cart from './cart.png'

const Header = () => {
    const {total, setTotal, user, setUser, loggedIn, setLoggedIn} = useContext(ItemContext);
    const [listOn, setListOn] = useState(false);
    let history = useHistory();

    const lista = () => {
        setListOn(true);
        if(listOn === true){
            setListOn(false);
        }
    }

    const listaCreate = () => {
        setListOn(false);
        history.push(`/profile`);
    }

    const listaListing = () => {
        setListOn(false);
        history.push(`/listings`);
    }

    const listaSettings = () => {
        setListOn(false);
        history.push(`/settings`);
    }

    const logOut = () => {
        setUser('')
        setLoggedIn(false)
        history.push(`/`);
    }

    return(
        <h1 className='navbar'>
            <Link to={`/`} className='buttonLink1' >
                <button className='button1'>Home</button>
            </Link>
            { loggedIn === false?
            <Link to={`/login`} className='buttonLink2' >
                <button className='button2'>Login</button>
            </Link>
            : listOn === false ?
            <Link className='profilLink' onClick={lista} >
                <button className='profilBotun'>
                    {user.username}
                    <img src={arrow} className='arrow'></img>
                </button> 
            </Link>
            :
            <Link className='profilLink' onClick={lista}>
                <button className='profilBotun'>
                    {user.username}
                    <img src={arrow} className='arrow'></img>
                </button>
                <button  className='profilList' onClick={listaCreate}>Create listing</button>
                <button  className='profilList1' onClick={listaListing}>My listings</button>
                <button  className='profilList1' onClick={listaSettings}>Settings</button>
                <button  className='profilList1' onClick={logOut}>Logout</button>
            </Link>
            }      
            <Link to={`/checkout`} className='buttonLink3' >
                <button className='button3'>
                    <img src={cart} className='cart'></img>
                    {Number(total).toFixed(2)}
                </button>
            </Link>
        </h1>
    )

}

export default Header;