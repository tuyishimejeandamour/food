import React from 'react';

import classes from './register.module.css';
import Button from '../../UI/Button/Button';
import Form from '../../UI/form/Form';
import Input from '../../UI/Input/input';
import useInput from '../../../hooks/useInput';
import { confirmpass, validateEmail, validatename, validatePassword } from '../../../utils/validations';
const RegisterComponent = (props) => {
    const { value: name,
        hasError: nameHasError,
        reset: nameReset,
        valueChangedHandler: nameChangeHandler,
        burHandler: onNameBurHandler
    } = useInput(validatename)
    const { value: email,
        hasError: emailHasError,
        reset: emailReset,
        valueChangedHandler: emailChangeHandler,
        burHandler: onEmailBurHandler
    } = useInput(validateEmail)
    const { value: password,
        hasError: passwordHasError,
        reset: passwordReset,
        valueChangedHandler: passwordChangeHandler,
        burHandler: onPasswordBurHandler
    } = useInput(validatePassword)
   

    const { value: confirmPassword,
        hasError: confirmPasswordHasError,
        reset: confirmPasswordReset,
        valueChangedHandler: confirmPasswordChangeHandler,
        burHandler: onConfirmPasswordBurHandler
    } = useInput(confirmpass.bind(null,password))

    let formIsValid = false;

    if (!nameHasError && !emailHasError && !passwordHasError && !confirmPasswordHasError) {
        formIsValid = true
    }

  
    const submitHandler = (event) => {
        event.preventDefault();
        nameReset()
        emailReset()
        passwordReset()
        confirmPasswordReset()
        props.onRegister(name, email, password, confirmPassword);
    };

    return (
        <Form padding="40px" onSubmit={submitHandler} className={classes.register}>
            <div className={classes.registerheader}>
                register
            </div>
            <Input isValid={nameHasError} errorMessage="name is invalid" id='names' label='names' type='text' value={name} onChange={nameChangeHandler} onBlur={onNameBurHandler} />
            <Input isValid={emailHasError} id='email' errorMessage="email must have @ and ." label='Email' type='email' value={email} onChange={emailChangeHandler} onBlur={onEmailBurHandler} />
            <Input isValid={passwordHasError} id='password' label='password' type='password' value={password} onChange={passwordChangeHandler} onBlur={onPasswordBurHandler} />
            <Input isValid={confirmPasswordHasError} errorMessage="passwords don't match" id='confirmpassword' label='confirm password' type='password' value={confirmPassword} onChange={confirmPasswordChangeHandler} onBlur={onConfirmPasswordBurHandler} />

            <div className={classes.actions}>
                <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                    register
                </Button>
            </div>
        </Form>
    )

}


export default RegisterComponent