import React from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shop/shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'

import Header from './components/header/header'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
