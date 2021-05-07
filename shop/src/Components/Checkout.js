import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'
import './Checkout.css'
import trash from './trash.png'

const Checkout = () => {
    const {total, setTotal, cart, setCart, itemId, setItemId, items, setItems} = useContext(ItemContext);

    // let tempId = 0;
    // cart.forEach((temp, i) => {
    //     temp.cartId = i + 1;
    // })

    const tempCart = cart.map((member, i )=> ({
        'id': member.id,
        'item': member.item,
        'price': member.price,
        'username': member.username,
        'sales': member.sales,
        'cartId': i
    }))

    const deleteItem = (cartId) =>{
        const listDelete = tempCart.filter(item => item.cartId !== cartId)
        setCart(listDelete)
        const deduce = tempCart.filter(item => item.cartId === cartId)
        setTotal(total - deduce[0].price)
    }

    const componentRender = tempCart.map(comp => {
        return(
        <div key={tempCart.cartId} className='karticaCheckout'>
            <p className='kartaChk1'>{comp.item}</p>
            <p className='kartaChk'>{comp.price}</p>
            <img src={trash} className='trash' onClick={() => deleteItem(comp.cartId)}></img>
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
            <h3>{Number(total).toFixed(2)}</h3>
            {componentRender}
            </div>
        </div>
    )
}

export default Checkout;