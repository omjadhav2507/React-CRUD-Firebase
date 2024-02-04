import React from "react"

function Table({ employees, handleEdit, handleDelete  }) {
  console.log('Received employees:', employees);
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees?.map((emp, i) => (
            <tr key={emp.i}>
              <th scope="row">{emp.id}</th>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.email}</td>
              <td>{emp.salary}</td>
              <td>{emp.date}</td>
              <td>
                <button onClick={() => handleEdit(emp.id)}>
                  Edit
                </button>
              </td>
              <td>
                <button onClick={() => handleDelete(emp.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table