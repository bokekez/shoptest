import React, {useState, useEffect, useContext} from 'react';
import { ItemContext } from './Context'

const Item = () => {
    const {itemId, setItemId, items, setItems} = useContext(ItemContext);
    const selectedItem = items.filter(item => (item.id === itemId))
    return(
        <div className='item'>
            <h1>
               {selectedItem[0].first}
            </h1>
        </div>
    )

}

export default Item;