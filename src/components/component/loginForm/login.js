import React, { useState, useEffect,useReducer} from 'react';

import classes from './login.module.css';
import Button from '../../UI/Button/Button';
import {initialState,reducer,password} from '../../../utils/reducer';
import Form from '../../UI/form/Form';
import Input from '../../UI/Input/input';

const LoginComponent = (props)=>{
    const [formIsValid, setFormIsValid] = useState(false);
    const [stateemail, dispatchem] = useReducer(reducer, initialState)
    const [passwordState,dispatchpass] = useReducer(password,initialState)
  
    useEffect(() => {
      const handle = setTimeout(() => {
        setFormIsValid(
          stateemail.isValid && passwordState.isValid
        );
      }, 100);
      
      
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

    return(
        <Form onSubmit={submitHandler} className={classes.login}>
      
      <Input isValid={stateemail.isvalid} id='email' type='email' value={stateemail.value} onChange={emailChangeHandler} onBlur={validateEmailHandler}  />
      <Input isValid={passwordState.isvalid} id='password' type='password'  value={passwordState.val} onChange={passwordChangeHandler} onBlur={validatePasswordHandler}  />
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
    </Form>
    )

}


export default LoginComponent