import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter, useHistory } from "react-router-dom";
import Header from './Components/Header'
import Search from './Components/Search'
import Card from './Components/Card'
import Item from './Components/Item'
import Login from './Components/Login'
import Register from './Components/Register'
import Checkout from './Components/Checkout'
import Profile from './Components/Profile'
import React, { useState, useEffect } from 'react';
import { ItemContext } from './Components/Context';

function App() {
  const [itemId, setItemId] = useState(0);
  const [items, setItems] = useState([]);
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false)
  return(
    <Router basename={process.env.PUBLIC_URL}>
    <div >
      <ItemContext.Provider value={{itemId, setItemId, items, setItems, user, setUser, loggedIn, setLoggedIn}}>
        <Header/>
        <Search/>
        <Route exact={true} path="/" render={() =>(
          <Card />
        )}/>
        <Route exact={true} path="/item/:id" render={() =>(
          <Item/>
        )}/>
        <Route exact={true} path="/login" render={() =>(
          <Login/>
        )}/>
        <Route exact={true} path="/register" render={() =>(
          <Register/>
        )}/>
        <Route exact={true} path="/checkout" render={() =>(
          <Checkout/>
        )}/>
        <Route exact={true} path="/profile" render={() =>(
          <Profile/>
        )}/>
      </ItemContext.Provider>
    </div>
    </Router>
  )
}

export default App;
