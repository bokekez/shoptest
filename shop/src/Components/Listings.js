import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'
import edit from './edit.png'
import './Listings.css'
import trash from './trash.png'

const Listing = () => {
    const {itemId, setItemId, items, setItems, user, setUser, setLoaded} = useContext(ItemContext);
    const selectedItem = items.filter(item => (item.username == user.username));
    const [edditon, setEdditon] = useState (false);
    const [tempItem, setTempItem] = useState('');
    const [tempPrice, setTempPrice] = useState();
    const [edditState, setEdditState] = useState({id: 0});

    const changeItem = (e) => {
        e.preventDefault();
        setTempItem(e.target.value)
    }

    const changePrice = (e) => {
        e.preventDefault();
        setTempPrice(e.target.value)
    }
    

    const editItem = (id) =>{
        const selectedEdit = selectedItem.filter(item => item.id === id)
        setEdditState(selectedEdit)
        //idPass = selectedEdit.id;
        if(edditon === false){
            setEdditon(true);
        }
        if(edditon === true){
            setEdditon(false);
        }
    }

    const deleteItem = (id) =>{
        const selectedDelete = selectedItem.filter(item => item.id === id)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const tempName = user.username;
            if(tempItem !== ''){
                fetch('https://shoptest-42.herokuapp.com/listings', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    item: tempItem,
                    price: tempPrice,
                    username: tempName,
                    sales: 0
                })
            })
            .then(resopnse => resopnse.json())
            .then(article =>{
            if (article){
                    setTempItem('');
                    setTempPrice('');
                    setItems([]);
                    setLoaded(false);
                }
            })
        }    
    }

    const componentRender = selectedItem.map(comp => {
        return(
        <div key={comp.id} className='karticeChild'>
            {edditon === true && comp.id === edditState[0].id ?
                <form onSubmit={handleSubmit}>
                    <label>Edit item</label>
                    <input onChange={changeItem} value={tempItem}></input>
                    <label>Edit price</label>
                    <input onChange={changePrice} value={tempPrice} placeholder="0.00"></input>
                </form> 
            :
            <div>
                <p className='karta'>{comp.item}</p>
                <p className='karta'>{comp.price}</p>
            </div>
            }
            <div>
                <img src={edit} className='trash' onClick={() => editItem(comp.id)}></img>
                <img src={trash} className='trash' onClick={() => deleteItem(comp.id)}></img>
            </div>
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