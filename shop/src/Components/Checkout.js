import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'
import './Checkout.css'

const Checkout = () => {
    const {total, setTotal, cart, setCart, itemId, setItemId, items, setItems} = useContext(ItemContext);

    const componentRender = cart.map(comp => {
        return(
        <div className='karticeChild'>
            <p className='karta'>{comp.item}</p>
            <p className='karta'>{comp.price}</p>
            <p className='kartUser'>{comp.username}</p>
        </div>
        )
    })


    // const total = () => {
    //     const totalArray = cart.map(comp =>
    //         comp.price
    //     )
    //     console.log('1', totalArray)
    //     const reducer = (accumulator, currentValue) => accumulator + currentValue;
    //     return (
    //         totalArray.reduce(reducer)
    //     )    
    // }

    return(
        <div className='checkout'>
            <div>
            <h2>Total:</h2>
            <h3>{total}</h3>
            {componentRender}
            </div>
        </div>
    )
}

export default Checkout;