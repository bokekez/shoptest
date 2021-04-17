import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, HashRouter } from "react-router-dom";
import Header from './Components/Header'
import Search from './Components/Search'
import Card from './Components/Card'
import Item from './Components/Item'
import React, { useState, useEffect } from 'react';
import { ItemContext } from './Components/Context';

function App() {
  const [itemId, setItemId] = useState(0);
  return(
    <Router basename={process.env.PUBLIC_URL}>
    <div>
      <ItemContext.Provider value={{itemId, setItemId}}>
        <Header/>
        <Search/>
        <Route exact={true} path="/" render={() =>(
          <Card itemId={itemId} setItemId={setItemId}/>
        )}/>
        <Route exact={true} path="/item/:id" render={() =>(
          <Item/>
        )}/>
      </ItemContext.Provider>
    </div>
    </Router>
  )
}

export default App;
