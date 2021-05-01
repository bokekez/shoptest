import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter, useHistory, useParams } from "react-router-dom";
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
import Katalog from './Components/Katalog';
import Listings from './Components/Listings'

function App() {
  const [itemId, setItemId] = useState(0);
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [generateId, setGenerateId] = useState(0);
  const [total, setTotal] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loaded, setLoaded] = useState(false);
  return(
    <Router basename={process.env.PUBLIC_URL}>
    <div >
      <ItemContext.Provider value={{total, setTotal, cart, setCart, itemId, setItemId, items, setItems, user, setUser, loggedIn, setLoggedIn, item, setItem, generateId, setGenerateId, loaded, setLoaded}}>
        <Header/>
        <Search/>
        {/* <Route exact={true} path="/" render={() =>(
          <Card />
        )}/> */}
        <Route exact={true} path="/" render={() =>(
          <Katalog />
        )}/>
        <Route exact={true} path="/item/:id" render={() =>(
          <Item/>
        )}/>
        <Route exact={true} path="/item/:id" render={() =>(
          <Katalog />
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
        <Route exact={true} path="/listings" render={() =>(
          <Listings/>
        )}/>
        
      </ItemContext.Provider>
    </div>
    </Router>
  )
}

export default App;
