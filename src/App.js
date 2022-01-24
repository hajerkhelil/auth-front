
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/login';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>

      <Routes>
        <Route  path='/signup'  element={<Register></Register>}></Route>
        <Route  path='/signin'  element={<Login/>}></Route>
        <Route  path='/Profile' 
         element={
         <PrivateRoute>
            <Profile/>  
        </PrivateRoute>}>

        </Route>


      </Routes>

    </div>
  );
}

export default App;
