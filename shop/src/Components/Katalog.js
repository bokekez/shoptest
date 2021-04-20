import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'
import './Katalog.css'

const Katalog = () => {
    
    const {itemId, setItemId, items, setItems, item, setItem} = useContext(ItemContext);

    useEffect(() => {

    
    })
    const idPass = (id) =>{
        setItemId(id);
    }    
    const componentRender = items.map(comp => {
        return(
        <Link to={`/item/${comp.id}`} >
        <div className='karticeChild' onClick={() => idPass(comp.id)} >
            <h3 >{comp.item}</h3>
            <h2 >{comp.price}</h2>
        </div>
        </Link>
        )
    })
    return(
        <div className='kartice'>
            {componentRender}
        </div>
        )
    
    
}
export default Katalog;