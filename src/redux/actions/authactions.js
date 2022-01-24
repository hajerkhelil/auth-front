
import axios from "axios" 
import { REGISTER, FAIL, LOGIN, GET_CURRENT, LOGOUT, CLEARERRORS } from './../types.js/authtypes';


export  const  register= (newuser, Navigate) => async (dispatch) => {
    
    try {
        // 7kit maa lback
        const  res= await  axios.post('/auth/signup', newuser)
        dispatch( {type: REGISTER,  payload: res.data })  // user   msg   token 
        Navigate("/Profile") 
    } catch (error) {
        dispatch({type:FAIL,  payload: error.response.data })
    }
}


export const login= (user, Navigate) => async (dispatch) =>{
    try {
        const res=await axios.post('/auth/signIn', user)  // msg  user  token
        dispatch({type: LOGIN, payload: res.data})
        Navigate("/Profile") 
    } catch (error) {
        dispatch({type:FAIL,  payload: error.response.data }) // errors mel back 

    }
   
}


export const getcurrent =() => async (dispatch) => {
    const token= localStorage.getItem("token");
    const config={
        headers: {
            authorization : token ,
        },
    };
    try {
        const res= await  axios.get("/auth/current", config );
        dispatch ({ type: GET_CURRENT, payload: res.data })
    } catch (error) {
        console.log(error);
        
    }
}

export const logout=() => {
    return {type: LOGOUT};
}

export const clearerrors=()=>{
    return {type: CLEARERRORS}
}