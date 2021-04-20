import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from './Context'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter, useHistory } from "react-router-dom";

const Search = () => {
    const {itemId, setItemId, items, setItems} = useContext(ItemContext);
    // const selectedItem = items.filter(item => (item.name === itemId))
    const [searchField, setSearchField] = useState('')
    const [filteredItems, setFilteredItems] = useState({
        first: ''
    })
    const [found, setFound] = useState(false)
    let history = useHistory();

    const handleChange = (e) => {
        setSearchField(e.target.value);
        e.preventDefault();
        
        if(e.target.value.length >= 2){
            const temp = items.filter(item => {
                return item.first.toLowerCase().includes(e.target.value.toLowerCase())      
            })
            console.log('2', temp)
            if(temp.length != 0){
                setFilteredItems([...temp])
                setFound(true)
            }

        } 
        if (e.target.value.length <= 2){
            setFound(false)
        }
    }

    console.log(searchField)

    const searchItems = (e) =>{
        e.preventDefault();

        const temp = items.filter(item => {
            return item.first.toLowerCase().includes(searchField.toLowerCase())      
        })
        setFilteredItems([...temp])
        setSearchField('')      

        if(filteredItems !== ''){
            setFound(true)
        }
        if(filteredItems.length === 1){
            setItemId(filteredItems[0].id);
            setSearchField('');
            setFound(false);
            history.push(`/item/${filteredItems[0].id}`);
        }
    }

    const idPass = (id) =>{
        setItemId(id);
        setSearchField('');
        setFound(false);
    }    


    return (
        <div >
            { found === false ?
            <div className='search'>
            <form onSubmit={searchItems}>
                <input className='inputSearch' type='text' placeholder='Search items' value={searchField} onChange={handleChange} ></input>
            </form>
            </div>
            : 
            <div className='search'>
            <form onSubmit={searchItems}>
                <input className='inputSearch' type='text' placeholder='Search items' value={searchField} onChange={handleChange} ></input>       
            </form>  
            <ul className='searchList '>
            {    
                filteredItems.map(item => 
                    <Link to={`/item/${item.id}`} onClick={() => idPass(item.id)}>
                        <li className='lista'>{item.first}</li>
                    </Link>
                )
            }
            </ul> 
            </div>
            }
        </div>
    )

}

export default Search;