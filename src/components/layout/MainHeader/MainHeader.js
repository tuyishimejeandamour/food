import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import logo from '../../../assets/logo.png'
import { useHistory } from 'react-router-dom';

const MainHeader = (props) => {
  const history = useHistory()
  return (
    <header className={classes['main-header']}>
      <div className={classes.logodiv}>
        <div className={classes.logoimg} onClick={()=>history.push('/welcome')}>
         <img src={logo} alt="logo" />
        </div>
      <span onClick={()=>history.push('/welcome')} >Marriot</span>
      </div>
      <div className={classes.navigation}>
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
      </div>
    </header>
  );
};

export default MainHeader;
