
import classes from './input.module.css'
const Input = (props)=>{
    const changeHandler = (event) => {
        props.onChange(event)
      };

    
      const burHandler = (event) => {
        props.onBlur(event)
      };
     return(
        <div
        className={`${classes.control} ${
          props.isValid === true ? classes.invalid : ''
        }`}
      >
        <label htmlFor={props.label}>{props.label}</label>
        <input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          value={props.value}
          onChange={changeHandler}
          onBlur={burHandler}

        />
        {props.isValid && (
        <div className={classes.error} style={{bottom:props.errorMessage?props.errorMessage.length>30?'-21px':'2px':'2px'}}>
          <span>{props.errorMessage?props.errorMessage:'value is invalid'}</span>
        </div>
        )}
      </div>
     )   


}

export default Input