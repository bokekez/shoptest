import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'

const Listing = () => {
    const {itemId, setItemId, items, setItems} = useContext(ItemContext);
    const selectedItem = items.filter(item => (item.id === itemId))
    return(
        <div className='item'>
            <h3>
               {selectedItem.item}
            </h3>
            <h3>
               {selectedItem.price}
            </h3>
        </div>
    )
}

export default Listing;