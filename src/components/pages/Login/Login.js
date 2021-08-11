import React, { useState, useEffect,useReducer} from 'react';

import Card from '../../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../../UI/Button/Button';
import {initialState,reducer,password} from '../../../utils/reducer';

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [stateemail, dispatchem] = useReducer(reducer, initialState)
  const [passwordState,dispatchpass] = useReducer(password,initialState)

  useEffect(() => {
    const handle = setTimeout(() => {
      setFormIsValid(
        stateemail.isValid && passwordState.isValid
      );
    }, 500);
    
    
    return()=>{
     clearTimeout(handle)
    }
   
  }, [stateemail,passwordState])

  const emailChangeHandler = (event) => {
    dispatchem({type:'email',value:event.target.value})
  };

  const passwordChangeHandler = (event) => {
    dispatchpass({type:'password',value:event.target.value});
  };

  const validateEmailHandler = () => {
    dispatchem({type:'emailvalid'})
  };

  const validatePasswordHandler = () => {
    dispatchpass({type:'passwordvalid'});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(stateemail.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            stateemail.isvalid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={stateemail.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.val}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
