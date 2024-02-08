import React, { useState } from 'react';
import Swal from 'sweetalert2';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();

    if (document.activeElement.name === 'Login') {
      try {
        await signInWithEmailAndPassword(auth, email, password);
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
        await createUserWithEmailAndPassword(auth, email, password);
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
        console.log(error);
      }
    }
  };

  return (
    <>
      <div style={styles.container}>
        <form onSubmit={handleLogin} style={styles.form}>
          <h1 style={styles.title}>Admin Login</h1>
          <label htmlFor='email' style={styles.label}>
            Email
          </label>
          <input
            id='email'
            type='email'
            value={email}
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            autoComplete='off'
            style={styles.input}
          />
          <label htmlFor='password' style={styles.label}>
            Password
          </label>
          <input
            id='password'
            type='password'
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='off'
            style={styles.input}
          />
          <button type='submit' value='Login' name='Login' style={styles.button}>
            Login
          </button>
          <button
            type='submit'
            value='Register'
            name='Register'
            style={styles.button}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  form: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    background: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop:'10px'
  },
};

export default Login;
