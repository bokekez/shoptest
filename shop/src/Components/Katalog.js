import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'
import './Katalog.css'

const Katalog = () => {
    
    const {itemId, setItemId, items, setItems, item, setItem} = useContext(ItemContext);

    useEffect(() => {
        fetch('https://shoptest-42.herokuapp.com/', {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
        }).then(response => response.json())
          .then(response => {
            console.log(response);    
            const tempItems = response.map(member => ({
                'id': member.id,
                'item': member.item,
                'price': member.price,
                'sales': member.sales
            }));
            if(items.length === 0){
                setItems([...items, ...tempItems]);
            }
            })
        
    }, [])
    
    const idPass = (id) =>{
        setItemId(id);
    }    
    const componentRender = items.map(comp => {
        return(
        <Link className='karticeChild' to={`/item/${comp.id}`} >
        <div onClick={() => idPass(comp.id)} >
            <p className='karta'>{comp.item}</p>
            <p className='karta'>{comp.price}</p>
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
