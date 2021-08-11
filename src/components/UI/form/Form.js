import React from 'react';

import classes from './Form.module.css';

const Form = (props) => {
    const submit = (event)=>{
         props.onSubmit(event)
    }
  return (
    <form  onSubmit ={submit} className={`${classes.form} ${props.className}`} >
        <div className={classes.borderline} style={{padding:props.padding?props.padding:'30px'}}>
        {props.children}
    </div>
    </form>
  );
};

export default Form;