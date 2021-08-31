import React, { useState } from 'react';
import classes from './Navigation.module.css';
import { useHistory } from 'react-router-dom';
import Table from '../../UI/table/table';

const Navigation = (props) => {
  const history = useHistory();
  console.log(history.location.pathname)
  const [showMenu,hidemenu] = useState(false);
  const onmodleover = false
  const hidemenuHandle = ()=>{
    hidemenu(false)
  }
  const showmenuHandle = ()=>{
    if (!history.location.pathname.includes('/cart')) {
      hidemenu(true)
    }
  }
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
            <div className={classes.addCartButton} onMouseOver={showmenuHandle}>
              <button>12</button>
            </div>
            </div>
            {showMenu && 
            <div className={classes.cartMenu} onMouseOver={showmenuHandle} onMouseLeave={hidemenuHandle}>
              <Table />
            </div>
            }
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
