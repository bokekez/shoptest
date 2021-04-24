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
        console.log(tempEmail)
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
        fetch('http://localhost:3000/register', {
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
				history.push('/');
                setLoggedIn(true);
                setUser(user);
                setTempEmail('');
                setTempPassword('');
                setTempUser('');
			}
		})
    }

    console.log(' mm',user)

    return(
        <div className='login'>
            <form className='loginForm' onSubmit={handleSubmit}>
                <table>Set username</table>
                <input onChange={changeUser} value={tempUser}></input>
                <table>Register an email</table>
                <input type='email' onChange={changeEmail} value={tempEmail}></input>
                <table>Set a password</table>
                <input type='password' onChange={changePassword} value={tempPassword}></input>
                <button className='buttonRegister' onClick={handleSubmit}>Create</button> 
            </form>
        </div>
    )

}

export default Register;