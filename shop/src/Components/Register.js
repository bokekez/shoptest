import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { ItemContext } from './Context'
import './Register.css'

const Register = () => {
    const {user, setUser, loggedIn, setLoggedIn} = useContext(ItemContext);
    const [tempEmail, setTempEmail] = useState('');
    const [tempPassword, setTempPassword] = useState('');
    const [tempUser, setTempUser] = useState('');
    const [userError, setuserError] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [pwErr, setPwErr] = useState(false);
    
    let history = useHistory();
    // let userError = false;
    const validEmail = RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validPassword = RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

    const changeEmail = (e) => {
        setTempEmail(e.target.value)
    }

    const changePassword = (e) => {
        setTempPassword(e.target.value)
    }

    const changeUser = (e) => {
        if(e.target.value.length == 10){
            setuserError(true)
            setTempUser(e.target.value)
        }
        else if(e.target.value.length <= 9){
            setuserError(false)
            setTempUser(e.target.value)
        }    
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
        validate();
        if(emailErr === false && pwErr === false){
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
    }

    const validate = () => {
        if (!validEmail.test(tempUser)) {
           setEmailErr(true);
        }
        if (!validPassword.test(tempPassword)) {
           setPwErr(true);
        }
    };

    // const userWarning = (error) =>{
    //     return true
    // }
    console.log(tempUser)
    console.log(' 12', userError)

    return(
        <div className='login'>
            <form className='loginForm' onSubmit={handleSubmit}>
                {userError === true ?
                <>
                {/* <label>Set username</label> */}
                <label className='warning'>Maximum 10 characters</label>
                </>
                : 
                <label>Set username</label>
                }
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