
import React, {useState}  from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/actions/authactions';



 function Login() {

const [email, setEmail] = useState()
const [password, setPassword] = useState()
const dispatch = useDispatch()

const Navigate= useNavigate();


    return (
        <div>
   <div className="wrapper">

  <div className="text-center mt-4 name"> sign in  </div>
  <form className="p-3 mt-3">
    <div className="form-field d-flex align-items-center">
      {" "}
      <span className="far fa-user" />{" "}
      <input         value={email}
     onChange={(e) => setEmail(e.target.value)}

       type="email" name="email" id="email" placeholder="email" />{" "}
    </div>
    <div className="form-field d-flex align-items-center">
      {" "}
      <span className="fas fa-key" />{" "}
      <input      value={password}
      onChange={(e) => setPassword(e.target.value)}
   
      type="password" name="password" id="pwd" placeholder="Password" />{" "}
    </div>{" "}
    <button className="btn mt-3" onClick={(e) => {e.preventDefault();  dispatch(login({email,password}, Navigate))}}> sign in   </button>
  </form>
  <div className="text-center fs-6">
    {" "}
    <Link to="/signup"><a href="fdf">Sign up</a>{" "}</Link>
  </div>
</div>


        </div>
    )
}

export default Login