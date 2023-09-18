import React, { useState } from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import EmployeeTable from './components/employeeTable/EmployeeTable';

import './App.css';
import Navbar from './components/topNavBar/Navbar';
import Calander from './components/calander/calander';

const App = () => {
  // Dados fictícios para os funcionários
  const initialEmployees = [
    {
      id: 1,
      name: 'John Doe',
      number:926665650,
      email: 'john.doe@example.com',
    },
    {
      id: 2,
      name: 'Jane Smith',
      number:926445650,
      email: 'jane.smith@example.com',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      number:926664550,
      email: 'bob.johnson@example.com',
    },
  ];

  const [employees, setEmployees] = useState(initialEmployees);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const deleteEmployee = (employeeId) => {
    setEmployees(employees.filter((employee) => employee.id !== employeeId));
  };

  const editEmployee = (editedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === editedEmployee.id ? editedEmployee : employee
      )
    );
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Navbar/>
        <Routes>
          <Route path="/" element={<EmployeeTable employees={employees} onDelete={deleteEmployee} onEdit={editEmployee} />} />
          <Route path="/calander" element={<Calander />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
