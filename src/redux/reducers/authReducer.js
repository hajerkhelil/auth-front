
import { REGISTER, FAIL, LOGIN, GET_CURRENT, LOGOUT, CLEARERRORS } from './../types.js/authtypes';

const initialState = {
    user: null,
    errors: null,
    auth: false

}

export const authReducer =  (state = initialState, { type, payload }) => {
    
    switch (type) {

    case REGISTER:
        case  LOGIN:
        localStorage.setItem('token', payload.token)
        return { ...state, user: payload.user, auth: true};

    case GET_CURRENT:
        return { ...state, user: payload.user, auth: true}

    case FAIL:
        return {...state, errors:payload.errors, auth: false}

    case LOGOUT:
        localStorage.removeItem('token')
        return { ...state, auth: false, user:null}

   case CLEARERRORS:
    return { ...state, errors:null}


    default:
        return state
    }
}

export default authReducer
