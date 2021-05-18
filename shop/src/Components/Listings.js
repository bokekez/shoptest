import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'
import edit from './edit.png'
import './Listings.css'
import trash from './trash.png'

const Listing = () => {
    const {itemId, setItemId, items, setItems, user, setUser, setLoaded} = useContext(ItemContext);
    const [edditon, setEdditon] = useState (false);
    const [tempItem, setTempItem] = useState('');
    const [tempPrice, setTempPrice] = useState();
    const [edditState, setEdditState] = useState({id: 0});
    const [message, setMessage] = useState('');
    const [file, setFile] = useState();
    const [fileString, setFileString] = useState("");

    let selectedItem = [];

    if(user.admin === true){
        selectedItem = items;
        console.log('eo', user)
    }else{
        selectedItem = items.filter(item => (item.username == user.username));
    }

    let countDecimals = function (value) {
        if(Math.floor(value) === value) return 0;
        return value.toString().split(".")[1].length || 0;
    }

    const changeItem = (e) => {
        e.preventDefault();
        setTempItem(e.target.value)
    }

    const changePrice = (e) => {
        e.preventDefault();
        const re = /^[0-9.\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            if(!e.target.value.toString().split("").includes("."))
            {
                setTempPrice(e.target.value)
            }
            if(e.target.value.toString().split("").includes(".") && countDecimals(e.target.value) < 3)
            {
                setTempPrice(e.target.value)
            }
        }
    }
    

    const editItem = (id) =>{
        const selectedEdit = selectedItem.filter(item => item.id === id)
        setEdditState(selectedEdit)
        //idPass = selectedEdit.id;
        setTempItem(selectedEdit[0].item)
        setTempPrice(selectedEdit[0].price)
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
                    id: tempId,
                    picture: fileString
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
                    setMessage('Item edited')
                }
            else{
                setMessage('Failed to edit item')
            }
            })
        }    
    }

    const handleCancle = () =>{
        setEdditon(false);
        setTempItem('');
        setTempPrice('');
    }

    const fileSelect = (e) =>{
        if(e.target.files[0].size >= 10000){
            setMessage("image too large")
        }
        if(e.target.files[0].size < 10000){
            setFile(e.target.files[0]);   
        }  
    }

    const encode = (file) => {
        let reader = new FileReader();
        if(file){
            reader.readAsDataURL(file);
            reader.onload = () =>{
                let Base64 = reader.result;
                setFileString(Base64)
                console.log('1', fileString)
            }
            reader.onerror = (error) =>{

            }
        }
    }

    const componentRender = selectedItem.map(comp => {
        return(
        <div key={comp.id} className='karticeChildList'>
            {edditon === true && comp.id === edditState[0].id ?
                <form onSubmit={handleSubmit} className='formaList'>
                    <label className='listLabel'>edit item</label>
                    <input className='listInput'onChange={changeItem} value={tempItem} placeholder={edditState[0].item}></input>
                    <label className='listLabel'>edit price</label>
                    <input className='listInput'onChange={changePrice} value={tempPrice} placeholder={edditState[0].price}></input>
                    <label htmlFor="upload" className='labelEnc'>edit image</label>
                    <input id="upload" type="file" className='listingsEnc' onChange={fileSelect}></input>
                    <div>
                    <button className='buttonListing' onClick={() => handleSubmit(), encode(file)}>Update</button>
                    <button className='buttonListing' onClick={handleCancle}>Cancle</button>
                    </div>
                </form> 
            :
           <div>
                <p className='kartaList'>{comp.item}</p>
                <p className='kartaList'>{comp.price}</p>
                <div>
                    <img src={edit} className='kartaIkone1' onClick={() => editItem(comp.id)}></img>
                    {/* <img src={trash} className='kartaIkone2' onClick={() => deleteItem(comp.id)}></img> */}
                    <img src={trash} className='kartaIkone2' onClick={() => deleteItem(comp.id)}></img>
                </div>
            </div>
            }
            <p className='listUser'>{comp.username}</p>
        </div>
        )
    })
    return(
        <div className='karticeList'>
            <p>{message}</p>
            {componentRender}
        </div>
    )
}

export default Listing;