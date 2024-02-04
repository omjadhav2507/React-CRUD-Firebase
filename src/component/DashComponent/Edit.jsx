import React, { useState } from 'react'
import Swal from 'sweetalert2';

import {db} from '../../config/firestore'
import { doc ,setDoc } from "firebase/firestore"; 

function Edit({ employess,selectedEmp ,setEmployees , setIsEditing ,getEmployees}) {

  const id = selectedEmp.id;

  const [firstName, setFirstName] = useState(selectedEmp.firstName)
    const [lastName, setLastName] = useState(selectedEmp.lastName)
    const [email, setEmail] = useState(selectedEmp.email)
    const [salary, setSalary] = useState(selectedEmp.salary)
    const [date, setDate] = useState(selectedEmp.date)

   const handleUpdatet = async (e)=>{
    e.preventDefault();

    if(!firstName || !lastName || !email || !salary || !date){
        return Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'All fields are required.',
            showConfirmButton: true,
          });
    }

    const employee = {
        
        firstName,
        lastName,
        email,
        salary,
        date,
      };
    

      await setDoc(doc(db, "employees", id), {
        ...employee
      });

    setEmployees(prevEmployees => prevEmployees.map(emp => (emp.id === id ? employee : emp)));
    getEmployees()

    setIsEditing(true)

    Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: `${employee.firstName} ${employee.lastName}'s data has been Added.`,
        showConfirmButton: false,
        timer: 1500,
      });

      setIsEditing(false)
      
}

   

  return (
    <>
    <div>
      <form onSubmit={handleUpdatet}>
      <h1>Add Employee</h1>
                    <label htmlFor='firstname'>First Name</label>
                    <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label htmlFor="salary">Salary ($)</label>
                    <input
                        id="salary"
                        type="number"
                        name="salary"
                        value={salary}
                        onChange={e => setSalary(e.target.value)}
                    />
                    <label htmlFor="date">Date</label>
                    <input
                        id="date"
                        type="date"
                        name="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />  
                   <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                      style={{ marginLeft: '12px' }}
                      className="muted-button"
                      type="button"
                      value="Cancel"
                      onClick={() => setIsEditing(true)}
                    />
                    </div>
      

      </form>
    </div>
    </>
  )
}

export default Edit