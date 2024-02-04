import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Login({setIsAuthenticated}) {

const adminEmail = 'om@25.com'
const adminPassword = '411019'

const [email , setEmail] = useState('om@25.com');
const [password , setPassword] = useState('411019');

const handleLogin =(e)=>{
    e.preventDefault();
    if (email === adminEmail && password === adminPassword){
        localStorage.setItem('is_auth',true);
        setIsAuthenticated(true);
        Swal.fire({
            icon: 'success',
            title: 'Successfully Logged In!',
            showConfirmButton: false,
            timer: 1500,
          });
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Incorrect email or password',
            text: 'Please try again',
          });
    }


}

  return (
    <>
    <div>
        <form onSubmit={handleLogin}>
            <h1>Admin Login</h1>
            <label htmlFor='email'>Email</label>
            <input 
            id='email'
            type='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            autoComplete='off'
            />
            <label htmlFor='password'>Password</label>
            <input 
            id='password'
            type='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            autoComplete='off'
            />
            <button type='submit'>Login</button>

        </form>
    </div>
    </>
  )
}

export default Login