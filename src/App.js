import React, { useState, useEffect} from 'react';

import Home from './components/pages/Home/Home';
import MainHeader from './components/layout/MainHeader/MainHeader';
import LoginPage from './components/pages/Login/Login';

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
        {!isLoggedIn && <LoginPage onLogin={loginHandler} />}
        {isLoggedIn && <Home  />}
      </main>
    </div>
  );
}

export default App;
