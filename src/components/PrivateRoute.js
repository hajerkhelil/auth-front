

import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

function PrivateRoute({children}) {

    const auth= useSelector(state => state.authReducer.auth)
    const token = localStorage.getItem("token")

    return   token  ||  auth  ? children :  <Navigate to='/signup' ></Navigate> ;
   
}
export default PrivateRoute
