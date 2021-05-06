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
    const [message, setMessage] = useState('');
 
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

        const tempId = selectedDelete[0].id;
        fetch('https://shoptest-42.herokuapp.com/listings', {
                method: 'delete',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    id: tempId
                })
            })
            .then(resopnse => resopnse.json())
            .then(article =>{
            if (article){
                    setLoaded(false);
                    setEdditon(false);
                    setItems([]);
                    setMessage('Item deleted')
                }
            })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const tempName = user.username;
        const tempId = edditState[0].id;
            if(tempItem !== ''){
                fetch('https://shoptest-42.herokuapp.com/listings', {
                method: 'put',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    item: tempItem,
                    price: tempPrice,
                    username: tempName,
                    sales: 0,
                    id: tempId
                })
            })
            .then(resopnse => resopnse.json())
            .then(article =>{
            if (article){
                    setTempItem('');
                    setTempPrice('');
                    setLoaded(false);
                    setEdditon(false);
                    setItems([]);
                    setMessage('Item eddited')
                }
            else{
                setMessage('Failed to edit item')
            }
            })
        }    
    }

    const handleCancle = () =>{
        setEdditon(false);
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
                    <div>
                    <button className='buttonRegister' onClick={handleSubmit}>Update</button>
                    <button className='buttonRegister' onClick={handleCancle}>Cancle</button>
                    </div>
                </form> 
            :
           <div>
                <p className='karta'>{comp.item}</p>
                <p className='karta'>{comp.price}</p>
                <div>
                    <img src={edit} className='trash' onClick={() => editItem(comp.id)}></img>
                    <img src={trash} className='trash' onClick={() => deleteItem(comp.id)}></img>
                </div>
            </div>
            }
            <p className='kartUser'>{comp.username}</p>
        </div>
        )
    })
    return(
        <div className='item'>
            {message}
            {componentRender}
        </div>
    )
}

export default Listing;