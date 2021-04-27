import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { ItemContext } from './Context'

const Register = () => {
    const {user, setUser, loggedIn, setLoggedIn} = useContext(ItemContext);
    const [tempEmail, setTempEmail] = useState('');
    const [tempPassword, setTempPassword] = useState('');
    const [tempUser, setTempUser] = useState('');
    let history = useHistory();

    const changeEmail = (e) => {
        setTempEmail(e.target.value)
    }

    const changePassword = (e) => {
        setTempPassword(e.target.value)
    }

    const changeUser = (e) => {
        setTempUser(e.target.value)
    }    

    const handleSubmit = (e) =>{
        e.preventDefault();
        // const currentUser = {
        //     name: tempUser,
        //     email: tempEmail,
        //     password: tempPassword
        // }
        // setUser(currentUser);
        // setTempEmail('');
        // setTempPassword('');
        // setTempUser('');
        // console.log('1');
        // history.push('/');
        // setLoggedIn(true)
        fetch('https://shoptest-42.herokuapp.com/register', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: tempEmail,
				password: tempPassword,
				username: tempUser
			})
		}).then(resopnse => resopnse.json())
		.then(user =>{
			if (user.username !== ''){		
                setLoggedIn(true);
                setUser({
                    username: user
                });
                setTempEmail('');
                setTempPassword('');
                setTempUser('');
                history.push('/');
			}
		})
    }

    console.log(' mm',user)

    return(
        <div className='login'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>Set username</label>
                <input onChange={changeUser} value={tempUser}></input>
                <label>Register an email</label>
                <input type='email' onChange={changeEmail} value={tempEmail}></input>
                <label>Set a password</label>
                <input type='password' onChange={changePassword} value={tempPassword}></input>
                <button className='buttonRegister' onClick={handleSubmit}>Create</button> 
            </form>
        </div>
    )

}

export default Register;