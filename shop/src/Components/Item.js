import React, {useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter, useHistory, useParams } from "react-router-dom";
import { ItemContext } from './Context'
import './Item.css'

const Item = () => {
    const {total, setTotal, cart, setCart, itemId, setItemId, items, setItems} = useContext(ItemContext);
    let history = useHistory();

    //let { id } = useParams();

    let selectedItem = [];

    if(itemId !== 0){
        selectedItem = items.filter(item => (item.id === itemId))
    }

    if(itemId == 0){
        history.push(`/`);
    }
    // if(itemId === null){
    //     fetch('https://shoptest-42.herokuapp.com/', {
    //         method: 'get',
    //         headers: {'Content-Type': 'application/json'},
    //     }).then(response => response.json())
    //       .then(response => {
    //         console.log(response);    
    //         const tempItems = response.map(member => ({
    //             'id': member.id,
    //             'item': member.item,
    //             'price': member.price,
    //             'sales': member.sales,
    //             'username': member.username
    //         }));
    //         setItems([...items, ...tempItems]);
    //     })
    //     .then(selectedItem = items.filter(item => (item.id == idComp)))
    // }
    // console.log(items)
    // console.log(selectedItem)
    // console.log('1', idComp)

    const add = () =>{
        setCart([...cart, ...selectedItem])
        let tempPrice = total + selectedItem[0].price;
        setTotal(tempPrice)
    }

    console.log(selectedItem[0].price)
    console.log(total);

    return(
        <div>
            {itemId !== 0 ?
            <div className='item'>
                <h3>
                {selectedItem[0].item}
                </h3>
                <h3>
                {selectedItem[0].price}
                </h3>
                <h3>
                {selectedItem[0].username}
                </h3>
                <button className='buttonAdd' onClick={add}>Add</button>
            </div>
            :
            <h3>loading</h3>
            }
        </div>
    )

}

export default Item;