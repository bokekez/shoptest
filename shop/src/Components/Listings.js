import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'
import edit from './edit.png'

const Listing = () => {
    const {itemId, setItemId, items, setItems, user, setUser} = useContext(ItemContext);
    const selectedItem = items.filter(item => (item.username == user.username));

    const editItem = () =>{

    }

    const componentRender = selectedItem.map(comp => {
        return(
        <div className='karticeChild'>
            <p className='karta'>{comp.item}</p>
            <p className='karta'>{comp.price}</p>
            <img src={edit} className='trash' onClick={() => editItem(comp.cartId)}></img>
            <p className='kartUser'>{comp.username}</p>
        </div>
        )
    })
    return(
        <div className='item'>
            {componentRender}
        </div>
    )
}

export default Listing;