
import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Home from './Views/Home';
import ListVoiture from './Views/ListVoiture';
import NotFound from './Views/NotFound';
import Details from './Views/Details';
import Login from './Views/Login';

import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';

import { getToken, removeUserSession, setUserSession } from './utils/Common';


import './CSS/index.css'

function App() {

  const [authLoading, setAuthLoading] = useState(true);
 
  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }
 
    axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);
 
  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>
  }

  return (
    <>      
      <BrowserRouter> 
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <PublicRoute  path="/listVoiture" component={ListVoiture}/>
          <PrivateRoute  path="/details/:id" component={Details}/>
          <Route  path="/login" component={Login}/>
          <Route  component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
