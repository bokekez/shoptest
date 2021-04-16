import React, { useState, useEffect } from 'react';

const Card = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=1000`)
        .then(response => response.json())
        .then(json => {
            const tempItems = json.results.map(user => ({
                'picture': user.picture,
                'title': user.name.title,
                'first': user.name.first,
                'last': user.name.last, 
                'age': user.dob.age,
                'birthday': user.dob.date,
                'city': user.location.city,
                'timezone': user.location.timezone.offset,    
                'email': user.email,
                'number': user.cell,
                      
            }))
            tempItems.forEach((temp, i) => {
                temp.id = i + 1;
                temp.date = (new Date(temp.birthday).toLocaleDateString())
              })

            const filteredItems = tempItems.filter((member) => 
                    (member.timezone == '-1:00' || member.timezone == '0:00' || member.timezone == '+1:00' && member.age >= '18') 
                                
                )

            filteredItems.length = 15;

            setItems([...items,...filteredItems]);
            
        })
    }, [])

    const componentRender = items.map(comp => {
        return(
        <div>
            <img src={comp.picture.large}/>
            <h3 >{comp.title}</h3>
            <h2 >{comp.first}</h2>
            <h2 >{comp.last}</h2>
        </div>
        )
    })
    return(
        <div>
            {componentRender}
        </div>
    )

}

export default Card;