import React, { useState } from 'react';
import Header from './DashComponent/header';
import Add from './DashComponent/Add';
import { employeesData } from './DashComponent/Data';
import Table from './DashComponent/Table';
import Edit from './DashComponent/Edit';
import Swal from 'sweetalert2';

function DashUI({ setIsAuthenticated  }) {
  const [isAdding, setIsAdding] = useState(false);
  const [isEding ,setIsEditing] = useState(false)
  const [employees, setEmployees] = useState(employeesData);
  const [ selectedEmp , setSelectedEmp] = useState(null);



  const handleEdit = (id) => {
    const [employee] = employees.filter(employee => employee.id === id)
    setSelectedEmp(employee)
    setIsEditing(true)
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(res=>{
      if(res.value){
        const [employee]= employees.filter(employee => employee.id !== id)
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });
        const empcopy = employees.filter(emp => emp.id !== id)
        setEmployees (empcopy);
      }
    })
  };

  return (
    <>
      {!isAdding && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />

<Table
  employees={employees}
  handleEdit={handleEdit}
  handleDelete={handleDelete}
/>
        </>
      )}

      {isAdding && <Add 
      setIsAdding={setIsAdding}
      setEmployees={setEmployees}
      employess={employees}
       />}

       {isEding && (
        <Edit
        employees={employees}
        selectedEmp = {selectedEmp}
        setEmployees ={setEmployees}
        setIsEditing ={setIsEditing}
        />
       )}
    </>
  );
}

export default DashUI;
