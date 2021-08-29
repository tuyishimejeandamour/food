import React from 'react';

import classes from './Navigation.module.css';
import { useHistory } from 'react-router-dom';
import Table from '../../UI/table/table';

const Navigation = (props) => {
  const history = useHistory();
  return (
    <nav className={classes.nav}>
      <ul>
      {props.isLoggedIn && (
        <li>
          <div className={classes.addcart} onClick={()=>history.push('/cart')}>
            <div className={classes.addCartMessage}>
              {/* <img src={} alt="cart" /> */}
              <span>your cart</span>
            </div>
            <div className={classes.addCartButton}>
              <button>12</button>
            </div>
            </div>
            <div className={classes.cartMenu}>
              <Table />
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
