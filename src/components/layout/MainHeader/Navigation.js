import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <div className={classes.addcart}>cart</div>
        </li>
        {props.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>J</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
