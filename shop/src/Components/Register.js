import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ItemContext } from './Context'

const Register = () => {

    return(
        <div className='login'>
            <form className='loginForm'>
                <table>Register an email</table>
                <input type='email'></input>
                <table>Set a password</table>
                <input type='password'></input>
            </form>
        </div>
    )

}

export default Register;