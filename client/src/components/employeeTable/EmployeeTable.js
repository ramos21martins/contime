import React from 'react';
import './emplyeeTable.css'

const EmployeeTable = ({ employees, onDelete, onEdit }) => {
  return (
    <div className="employee-table">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.number}</td>
              <td>
                <button onClick={() => onEdit(employee)}>Edit</button>
                <button  className= 'danger' onClick={() => onDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
