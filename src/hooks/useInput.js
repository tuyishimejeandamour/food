
import { useState } from "react";

const useInput = (validate)=>{
    const [value, setValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const isValueValid = validate(value);
    const hasError = !isValueValid && isTouched

    const valueChangedHandler = (value)=>{
         setValue(value.target.value)
    }
    const burHandler = (event)=>{
        setIsTouched(true)
    }
    const reset = ()=>{
        setValue('')
    }
    return {value,hasError,isValid:isValueValid,reset,valueChangedHandler,burHandler}
}


export default useInput;