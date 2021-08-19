import React from 'react';

import classes from './login.module.css';
import Button from '../../UI/Button/Button';
import Form from '../../UI/form/Form';
import Input from '../../UI/Input/input';
import { validateEmail, validatePassword } from '../../../utils/validations';
import useInput from '../../../hooks/useInput';
const LoginComponent = (props) => {
    let formIsValid = false;
    const { value: email,
        isValid:emailIsValid,
        hasError: emailHasError,
        reset: emailReset,
        valueChangedHandler: emailChangeHandler,
        burHandler: onEmailBurHandler
    } = useInput(validateEmail)

    const { value: password,
        hasError: passwordHasError,
        isValid:passwordIsValid,
        reset: passwordReset,
        valueChangedHandler: passwordChangeHandler,
        burHandler: onPasswordBurHandler
    } = useInput(validatePassword)
   
    if(emailIsValid && passwordIsValid ){
        formIsValid = true
    }
   

    const submitHandler = (event) => {
        event.preventDefault();
        emailReset()
        passwordReset()
        props.onLogin(email, password);
    };

    return (
        <Form padding="40px" onSubmit={submitHandler} className={classes.login}>
             <div className={classes.loginheader}>
               login
             </div>
            <Input isValid={emailHasError} errorMessage="email is invalid" id='email' label='Email' type='email' value={email} onChange={emailChangeHandler} onBlur={onEmailBurHandler} />
            <Input isValid={passwordHasError} errorMessage="password is invalid" id='password' label='password' type='password' value={password} onChange={passwordChangeHandler} onBlur={onPasswordBurHandler} />

            <div className={classes.actions}>
                <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                    Login
                </Button>
            </div>
        </Form>
    )

}


export default LoginComponent