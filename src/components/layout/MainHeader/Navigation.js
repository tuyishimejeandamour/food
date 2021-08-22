import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
      {props.isLoggedIn && (
        <li>
          <div className={classes.addcart}>
            <div className={classes.addCartMessage}>
              {/* <img src={} alt="cart" /> */}
              <span>your cart</span>
            </div>
            <div className={classes.addCartButton}>
              <button>12</button>
            </div>
            </div>
        </li>
      )}
        {props.isLoggedIn && (
          <li>
            <button className={classes.userHeader} onClick={props.onLogout}>J</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
