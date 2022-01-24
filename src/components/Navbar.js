
import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {logout} from '../redux/actions/authactions'

function Navbar() {
    const auth = useSelector(state => state.authReducer.auth)
    const dispatch= useDispatch();

    return (
        <div>
        {auth ?
            <nav>
            <ul>
                <li>home</li>
                <li  onClick={() => dispatch(logout())}>logout</li>
            </ul>
            </nav>   : 
            <nav>
            <ul>
                <li>home</li>
                <Link  to='/signin' ><li>sign in</li>  </Link>
                <Link  to='/signup' > <li>sign up</li> </Link>
            </ul>
        </nav>

            }
        
            
           
        </div>
    )
}

export default Navbar
