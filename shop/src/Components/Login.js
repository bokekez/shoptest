import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { ItemContext } from './Context'

const Login = () => {
    const {user, setUser, loggedIn, setLoggedIn} = useContext(ItemContext);
    const [tempEmail, setTempEmail] = useState('');
    const [tempPassword, setTempPassword] = useState('');
    const [message, setMessage] = useState('');
    let history = useHistory();

    const changeEmail = (e) => {
        setTempEmail(e.target.value)
    }

    const changePassword = (e) => {
        setTempPassword(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch('https://shoptest-42.herokuapp.com/login', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: tempEmail,
				password: tempPassword,
			})
		}).then(resopnse => resopnse.json())
		.then(user =>{
			if (user.id){
				history.push('/');
                setLoggedIn(true);
                setUser(user);
                setTempEmail('');
                setTempPassword('');
			}
		})
        .catch(setMessage('Incorect username or password'))
    }
    
    const register = () => {
        history.push('/register');
    }

    return(
        <div className='login'>
            <form className='loginForm' onSubmit={handleSubmit}>
                {message}
                <label>email</label>
                <input type='email' onChange={changeEmail} value={tempEmail}></input>
                <label>password</label>
                <input type='password' onChange={changePassword} value={tempPassword}></input>
                <button className='buttonRegister' onClick={handleSubmit}>Login</button>
                <button className='buttonRegister' onClick={register}>Register</button>
            </form>
        </div>
    )
}

export default Login;