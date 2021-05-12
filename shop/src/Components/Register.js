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
    const [message, setMessage] = useState('');

    let history = useHistory();
    // let userError = false;
    const validEmail = RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    const validPassword = RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
    const reg = /^[0-9.\b]+$/;

    const changeEmail = (e) => {
        e.preventDefault();
         setTempEmail(e.target.value)
    }

    const changePassword = (e) => {
        e.preventDefault();
        setTempPassword(e.target.value)
    }

    const changeUser = (e) => {
        e.preventDefault();
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
        // validate();
        if(tempUser.length <4)
        {
            setMessage('username must contain at least 4 characters')
        }
        if (validEmail.test(tempEmail) && validPassword.test(tempPassword) && tempUser.length >= 4) {
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
                    setMessage('Register successful, redirecting')
                    setTimeout(function(){ history.push('/'); }, 3000);     
                }
            // else{
            //     setMessage('unable to register')
            // }
            })
            .catch(setMessage('unable to register'))
        } else if(!validEmail.test(tempEmail)){
            setEmailErr(true);
            setMessage('incorect email')
        }
        else if(!validPassword.test(tempPassword)){
            if(tempPassword.length < 6){
                setPwErr(true);
                setMessage('password must contain six characters')
            }
            if(!reg.test(tempPassword)){
                setPwErr(true);
                setMessage('password must contain a number')
            }
        }
    }

    return(
        <div className='register'>
            
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
                <p className='warning'>{message}</p>
            </form>
            
        </div>
    )

}

export default Register;