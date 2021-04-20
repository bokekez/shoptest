import React, {useState, useEffect, useContext} from 'react';
import { ItemContext } from './Context'
import './Item.css'

const Item = () => {
    const {itemId, setItemId, items, setItems} = useContext(ItemContext);
    const selectedItem = items.filter(item => (item.id === itemId))
    return(
        <div className='item'>
            <h3>
               {selectedItem[0].item}
            </h3>
            <h3>
               {selectedItem[0].price}
            </h3>
        </div>
    )

}

export default Item;