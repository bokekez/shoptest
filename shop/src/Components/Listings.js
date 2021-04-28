import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'

const Listing = () => {
    const {itemId, setItemId, items, setItems, user, setUser} = useContext(ItemContext);
    const selectedItem = items.filter(item => (item.username == user.username));
    console.log(user)
    console.log(items)
    console.log(selectedItem)
    const componentRender = selectedItem.map(comp => {
        return(
        <Link className='karticeChild' to={`/item/${comp.id}`} >
        <div >
            <p className='karta'>{comp.item}</p>
            <p className='karta'>{comp.price}</p>
            <p className='kartUser'>{comp.username}</p>
        </div>
        </Link>
        )
    })
    return(
        <div className='item'>
            {componentRender}
        </div>
    )
}

export default Listing;