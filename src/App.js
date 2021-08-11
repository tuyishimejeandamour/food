import React, { useState, useEffect} from 'react';

import Login from './components/pages/Login/Login';
import Home from './components/pages/Home/Home';
import MainHeader from './components/layout/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const can = localStorage.getItem('LOGIN')
   if (can === '1') {
     setIsLoggedIn(true)
   }
    
  }, [])
  const loginHandler = (email, password) => {
    localStorage.setItem('LOGIN','1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('LOGIN')
    setIsLoggedIn(false);
  };

  return (
    <div className ="app">
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </div>
  );
}

export default App;
