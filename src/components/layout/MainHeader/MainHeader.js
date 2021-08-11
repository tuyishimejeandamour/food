import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import logo from '../../../assets/logo.png'

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <div className={classes.logodiv}>
        <div className={classes.logoimg}>
         <img src={logo} alt="logo" />
        </div>
      <span>Marriot</span>
      </div>
      <div className={classes.navigation}>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
      </div>
    </header>
  );
};

export default MainHeader;
