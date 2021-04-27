import { getByDisplayValue } from '@testing-library/dom';
import React, {useState, useEffect, useContext} from 'react';
import { ItemContext } from './Context'

const Profile = () => {
    const {itemId, setItemId, items, setItems, item, setItem, generateId, setGenerateId, user, setUser} = useContext(ItemContext);
    const [tempItem, setTempItem] = useState('');
    const [tempPrice, setTempPrice] = useState();

    const changeItem = (e) => {
        e.preventDefault();
        setTempItem(e.target.value)
        console.log(tempItem)
    }

    const changePrice = (e) => {
        e.preventDefault();
        setTempPrice(e.target.value)
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // if(tempItem !== ''){
        //     setGenerateId(generateId + 1) 
        //     const temp = {
        //         id: generateId,
        //         item: tempItem,
        //         price: tempPrice
        //     }
            
        //     setItems([...items, temp])
        //     setTempItem('');
        //     setTempPrice('');
        // }
        const tempName = user.username;

        if(tempItem !== ''){
            fetch('https://shoptest-42.herokuapp.com/profile', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				item: tempItem,
                price: tempPrice,
                username: tempName
			})
		})
        .then(resopnse => resopnse.json())
		.then(article =>{
		if (article){
                 setTempItem('');
                 setTempPrice('')
			}
	    })
        
        }    
    }

    console.log('ad', user)
    console.log('add',items);
    return(
        <div className='login'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>List an item</label>
                <input onChange={changeItem} value={tempItem}></input>
                <label>Set a price</label>
                <input onChange={changePrice} value={tempPrice}></input>
                <button className='buttonRegister' onClick={handleSubmit}>Create</button> 
            </form>
        </div>
    )

}

export default Profile;