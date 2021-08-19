
export const validatename = (value) => {
    if (value.length >= 3) {
        return true
    }
    return false
}

export const validateEmail = (value)=>{
     value = value.trim()

    if (value.includes('@') && value.includes('.')) {
        return true
    }

    return false
}

export const validatePassword = (value)=>{
   if (value.trim().length >6 && /[A-Z]$/i.test(value)) {
       return true
   }
   return false
}

export const confirmpass = (password,value)=>{
    console.log(password)
    if (password === value) {
        return true
    }
    return false
}