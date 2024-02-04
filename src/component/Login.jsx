import React, { useState } from 'react'
import Swal from 'sweetalert2';

import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "firebase/auth";


function Login({ setIsAuthenticated }) {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    if (document.activeElement.name === 'Login') {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setIsAuthenticated(true);
  
            Swal.fire({
              icon: 'success',
              title: 'Successfully logged in!',
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } catch (error) {
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'Incorrect email or password.',
              showConfirmButton: true,
            });
          },
        });
      }
    } else if (document.activeElement.name === 'Register') {
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        Swal.fire({
          timer: 1500,
          showConfirmButton: false,
          willOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            setIsAuthenticated(true);
  
            Swal.fire({
              icon: 'success',
              title: 'Successfully registered and logged in!',
              showConfirmButton: false,
              timer: 1500,
            });
          },
        });
      } catch (error) {
        console.log(error)
      }
    }

    
  };

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
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='off'
          />
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='off'
          />
          <button type='submit' value="Login" name="Login">Login</button>
          <button type='submit'value="Register" name="Register">Register</button>

        </form>
      </div>
    </>
  )
}

export default Login