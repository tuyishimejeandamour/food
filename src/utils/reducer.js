export const initialState ={
   value:'',
   isValid:false
}

export const  reducer = (state, { type, value }) => {

    switch (type) {
  
    case 'email':
      return { ...state, value }
    case 'emailvalid':
        return {...state,isValid:true}
    default:
      return state
    }
  }

export const  password =  (state, { type, value}) => {

    switch (type) {
  
    case 'password':
      return { ...state, value }
    case 'passwordvalid':
        return {...state,isValid:state.value.trim().length>6}
    default:
      return state
    }
  }