import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firestore';

function Add({ setIsAdding, setEmployees, employess, getEmployees }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [salary, setSalary] = useState('');
  const [date, setDate] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const newEmployee = {
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    try {
      await addDoc(collection(db, 'employees'), {
        ...newEmployee,
      });
    } catch (error) {
      console.log(error);
    }

    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    setIsAdding(true);
    getEmployees();

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
    setIsAdding(false);
  };

  return (
    <>
      <div style={styles.container}>
        <form onSubmit={handleAdd} style={styles.form}>
          <h2 style={styles.title}>Add Employee</h2>
          <label htmlFor='firstname' style={styles.label}>
            First Name
          </label>
          <input
            id='firstName'
            type='text'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.input}
          />
          <label htmlFor='lastName' style={styles.label}>
            Last Name
          </label>
          <input
            id='lastName'
            type='text'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={styles.input}
          />
          <label htmlFor='email' style={styles.label}>
            Email
          </label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <label htmlFor='salary' style={styles.label}>
            Salary ($)
          </label>
          <input
            id='salary'
            type='number'
            name='salary'
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            style={styles.input}
          />
          <label htmlFor='date' style={styles.label}>
            Date
          </label>
          <input
            id='date'
            type='date'
            name='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            style={styles.input}
          />
          <div style={{ marginTop: '30px' }}>
            <input type='submit' value='Add' style={styles.button} />
            <input
              className='muted-button'
              type='button'
              value='Cancel'
              onClick={() => setIsAdding(false)}
              style={{ ...styles.button, background: '#ccc', color: '#000' }}
            />

          </div>
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
  },
  cancelButton: {
    width: '100%',
    padding: '10px',
    background: '#ccc',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop:'10px',
  },
};

export default Add;
