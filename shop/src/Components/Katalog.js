import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'
import './Katalog.css'

const Katalog = () => {
    
    const {itemId, setItemId, items, setItems, item, setItem, user, setUser, loaded, setLoaded} = useContext(ItemContext);

    useEffect(() => {
        if(loaded === false){
        fetch('https://shoptest-42.herokuapp.com/', {
            method: 'get',
            headers: {'Content-Type': 'application/json, charset=UTF-8',
                     'Accept': 'application/json, text/html',
                     },
            // body: JSON.stringify()
        })
          .then(response => response.json())
          .then(response => {   
            const tempItems = response.map(member => ({
                'id': member.id,
                'item': member.item,
                'price': member.price,
                'username': member.username,
                'sales': member.sales,
                'picture': Buffer.from(member.picture, 'base64').toString('utf8')
            }));
            setItems([...items, ...tempItems]);
            setLoaded(true);
            })
        }
    }, [loaded])

    console.log(items)

    const idPass = (id) =>{
        setItemId(id);
    }    
    const componentRender = items.map(comp => {
        return(
        <Link key={comp.id} className='karticeChild' to={`/item/${comp.id}`} >
        <div onClick={() => idPass(comp.id)} >
            <img className='kartImg'src={comp.picture}></img>
            <p className='karta'>{comp.item}</p>
            <p className='karta'>{comp.price}</p>
            <p className='kartUser'>{comp.username}</p>
        </div>
        </Link>
        )
    })
    return(
        <div>
        {loaded === true ?
        <div className='kartice'>
            {componentRender}
        </div>
        :
        <div className='kartice'>
        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
        } 
        </div>    
        )  
}
export default Katalog;
