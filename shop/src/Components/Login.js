import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'

const Login = () => {

    // const handleSubmit = (e) => {
    //     console.log(e)
    // }

    return(
        <div className='login'>
            <form className='loginForm'>
                <table>Email</table>
                <input type='email'></input>
                <table>Password</table>
                <input type='password'></input>
                <Link to={`/register`}>
                    <button className='buttonRegister'>Register</button>
                </Link>
            </form>
        </div>
    )
}

export default Login;