
import { CURRENT, FAIL, GETALLCONTACTS, LOGOUT, SIGNIN, SIGNUP } from "../ActionTypes/AuthActionTypes"

const initialState ={
    user : {} , 
    errors : [],
    users : []
}

const AuthReducer =(state = initialState, action ) => {
    switch (action.type) {
       
    case SIGNUP : 
    localStorage.setItem('token', action.payload.token)
    return {...state ,user : action.payload.newUser, errors : []}
        default: return state

            case FAIL : return {...state, errors : action.payload, user : {}}
            case SIGNIN : 
            localStorage.setItem('token', action.payload.token)
            return {...state, user : action.payload.found, errors : []}
            case CURRENT : return {...state, user : action.payload}
            case LOGOUT : 
            localStorage.removeItem('token')
            return {...state, user : {}, errors : []}
              case GETALLCONTACTS : return {...state, users : action.payload}
          

    }
}

export default AuthReducer