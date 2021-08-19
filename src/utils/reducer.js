export const initialState = {
  value: '',
  isValid: false
}

export const initialPassState ={
  value:'',
  passconfirm:'',
  isValid:false,
}
export const reducer = (state, { type, value }) => {

  switch (type) {

    case 'email':
      return { ...state, value }
    case 'emailvalid':
      return { ...state, isValid: true }
    default:
      return state
  }
}

export const password = (state, { type, confirm, value }) => {

  switch (type) {

    case 'password':
      return { ...state, value: value, isValid: state.value.trim().length > 6 }
    case 'confirm':
      return { ...state, passconfirm: confirm, isValid: confirm === state.value }
    case 'passwordvalid':
      return { ...state, isValid: state.value.trim().length > 6 && confirm === state.value }
    default:
      return state
  }
}

export const names = (state, { type, value }) => {
  switch (type) {

    case 'names':
      return { ...state, value: value, isValid: state.value.trim().length > 6 }
    case 'namesvalid':
      return { ...state, isValid: state.value.trim().length > 3 }
    default:
      return state
  }
}