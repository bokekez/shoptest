import React, {useState, useEffect, useContext} from 'react';
import { ItemContext } from './Context'

const Profile = () => {
    const {itemId, setItemId, items, setItems} = useContext(ItemContext);
    return(
        <div className='item'>
            
        </div>
    )

}

export default Profile;