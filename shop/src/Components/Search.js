import React, { useState, useEffect, useContext } from 'react';
import { ItemContext } from './Context'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter } from "react-router-dom";

const Search = () => {
    const {itemId, setItemId, items, setItems} = useContext(ItemContext);
    // const selectedItem = items.filter(item => (item.name === itemId))
    const [searchField, setSearchField] = useState('')
    const [filteredItems, setFilteredItems] = useState({})
    const [found, setFound] = useState(false)
    const handleChange = (e) => {
        setSearchField(e.target.value);
        e.preventDefault();
        if(searchField.length >= 2){
            const temp = items.filter(item => {
                return item.first.toLowerCase().includes(searchField.toLowerCase())      
            })

            // const temp = items.filter(item => {
            //     return item.first.indexOf(searchField) !== -1;     
            //     }    
            // )

            console.log(temp)

            setFilteredItems([...temp])

            if(filteredItems !== ''){
                setFound(true)
            }
        } 
    }

    console.log(searchField)

    const searchItems = (e) =>{
        e.preventDefault();
        const temp = items.filter(item => {
            return item.first.toLowerCase().includes(searchField.toLowerCase())      
        })

        // const temp = items.filter(item => {
        //     return item.first.indexOf(searchField) !== -1;     
        //     }    
        // )

        console.log(temp)

        setFilteredItems([...temp])
        setSearchField('')      

        if(filteredItems !== ''){
            setFound(true)
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
            <ul className='searchList'>
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