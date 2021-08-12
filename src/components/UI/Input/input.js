
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
          props.isValid === false ? classes.invalid : ''
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
      </div>
     )   


}

export default Input