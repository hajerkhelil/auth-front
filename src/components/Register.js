
import React, { useEffect, useState}  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Register.css"
import { useDispatch, useSelector } from 'react-redux';
import { clearerrors } from './../redux/actions/authactions';


 function Register() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const Navigate = useNavigate();

   const dispatch = useDispatch();
const  errors= useSelector (state => state.authReducer.errors)

useEffect(() => {
  {errors && errors.map((el) => alert(el.msg))}

  return () => {
dispatch(clearerrors())  }
}, [errors])


    return (
        <div>

   <div className="wrapper">

  <div className="text-center mt-4 name"> Twitter </div>
  <form className="p-3 mt-3">
    <div className="form-field d-flex align-items-center">
      {" "}
      <span className="far fa-user" />{" "}
      <input   
      onChange={(e) => setEmail(e.target.value)}
      value={email}
       type="email" name="email" id="email" placeholder="email" />{" "}
    </div>
    <div className="form-field d-flex align-items-center">
      {" "}
      <span className="fas fa-key" />{" "}
      <input 
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      type="password" name="password" id="pwd" placeholder="Password" />{" "}
    </div>{" "}
    <button className="btn mt-3"  onClick={(e) => {e.preventDefault();  dispatch(Register({email,password}, Navigate))}}>sign up </button>
  </form>
  <div className="text-center fs-6">
    {" "}
    <Link to="/signin"><a href="#fg">Sign in</a>{" "}</Link>
  </div>
</div>


        </div>
    )
}

export default Register