import { getByDisplayValue } from '@testing-library/dom';
import React, {useState, useEffect, useContext} from 'react';
import { ItemContext } from './Context'

const Profile = () => {
    const {itemId, setItemId, items, setItems, item, setItem, generateId, setGenerateId, user, setUser, loggedIn, loaded, setLoaded} = useContext(ItemContext);
    const [tempItem, setTempItem] = useState('');
    const [tempPrice, setTempPrice] = useState();
    const [info, setInfo] = useState('');
    const [decErr, setDecErr] = useState(false);
    const [file, setFile] = useState();
    const [fileString, setFileString] = useState("");
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
    
    console.log(decErr)

    const fileSelect = (e) =>{
        setFile(e.target.files[0]);
    }

    console.log('2', file)

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

    console.log('4', fileString)
    console.log('3', file)

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
        // validate();

        encode(file);
        const tempName = user.username;
        // const tempString = fileString;
        if(tempItem !== ''){
            fetch('https://shoptest-42.herokuapp.com/profile', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                item: tempItem,
                price: tempPrice,
                username: tempName,
                sales: 0, 
                picture: fileString
                })
            })
            .then(resopnse => resopnse.json())
            .then(article =>{
            if (article){
                    setTempItem('');
                    setTempPrice('');
                    setItems([]);
                    setLoaded(false);
                    setInfo(tempItem);
                }
            })
        // }
        }    
    }

    // const validate = () => {
    //     if (!validEmail.test(email)) {
    //        setEmailErr(true);
    //     }
    // };

    return(
        <div className='login'>
            { loggedIn === true ?
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>List an item</label>
                <input onChange={changeItem} value={tempItem}></input>
                <label>Set a price</label>
                <input onChange={changePrice} value={tempPrice} placeholder="0.00"></input>
                <input type="file" onChange={fileSelect}></input>
                <button className='buttonRegister' onClick={handleSubmit}>Create</button>
                { info !== '' ?
                <p>{info} has been created</p>
                :
                <></>
                } 
            </form>
            
            :
            <h2>Log in to create listings</h2>
            }          
        </div>
    )

}

export default Profile;