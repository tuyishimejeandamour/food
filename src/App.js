import React, { useState, useEffect} from 'react';

import Home from './components/pages/Home/Home';
import MainHeader from './components/layout/MainHeader/MainHeader';
import LoginPage from './components/pages/Login/Login';
import RegisterPage from './components/pages/register/Register';
import {Route,Redirect,Switch} from 'react-router-dom'
import ProductView from './components/pages/productView/productView';
import Cart from './components/pages/cart/cart';
import { useHistory } from 'react-router-dom'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory()
  useEffect(() => {
    const can = localStorage.getItem('LOGIN')
   if (can === '1') {
     setIsLoggedIn(true)
   }
    
  }, [])
  const loginHandler = (email, password) => {
    localStorage.setItem('LOGIN','1');
    setIsLoggedIn(true);
    history.push('/home')
  };

  const logoutHandler = () => {
    localStorage.removeItem('LOGIN')
    setIsLoggedIn(false);
    history.push('/login')
  };

  return (
    <div className ="app">
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
      <Switch>
      <Route path="/" exact >
      <Redirect to="/home" />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path="/login">
      <LoginPage onLogin={loginHandler} />
      </Route>
      <Route path="/register">
      <RegisterPage />
      </Route>
      <Route path="/product/:productId">
      <ProductView />
      </Route>
      <Route path="/cart">
      <Cart />
      </Route>
      </Switch>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
