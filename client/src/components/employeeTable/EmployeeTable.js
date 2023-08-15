import React from 'react';
import { useState, useRef } from 'react';
import './emplyeeTable.css'
import { AiOutlineDownload, AiOutlineUserAdd, AiOutlineQuestionCircle } from 'react-icons/ai'
import { SlOptionsVertical } from 'react-icons/sl'
import DataTable from 'react-data-table-component';
import { BiSearchAlt } from 'react-icons/bi'
import { CSVLink } from 'react-csv';

const EmployeeTable = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const columns = [
    {
      name: 'First Name',
      selector: row => row.first_name,
      sortable: true,
    },
    {
      name: 'Last Name',
      selector: row => row.last_name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Phone Number',
      selector: row => row.phoneNumber,
      sortable: true,
    },

    {
      name: '',
      cell: row => (
        <div className="dropdown-container">
          <SlOptionsVertical className="action" />

        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },

  ];

  const data = [
    {
      id: 1,
      first_name: "Paulo",
      last_name: "Rodrigues",
      email: "paulo.rodrigues@example.com",
      phoneNumber: "444-555-6666"
    },
    {
      id: 2,
      first_name: "Mariana",
      last_name: "Costa",
      email: "mariana.costa@example.com",
      phoneNumber: "222-333-4444"
    },
    {
      id: 3,
      first_name: "Pedro",
      last_name: "Almeida",
      email: "pedro.almeida@example.com",
      phoneNumber: "111-222-3333"
    },
    {
      id: 4,
      first_name: "Lúcia",
      last_name: "Gomes",
      email: "lucia.gomes@example.com",
      phoneNumber: "999-888-7777"
    },
    {
      id: 5,
      first_name: "Ricardo",
      last_name: "Pereira",
      email: "ricardo.pereira@example.com",
      phoneNumber: "333-444-5555"
    },
    {
      id: 6,
      first_name: "Sofia",
      last_name: "Martins",
      email: "sofia.martins@example.com",
      phoneNumber: "666-777-8888"
    },
    {
      id: 7,
      first_name: "João",
      last_name: "Silva",
      email: "joao.silva@example.com",
      phoneNumber: "123-456-7890"
    },
    {
      id: 8,
      first_name: "Maria",
      last_name: "Santos",
      email: "maria.santos@example.com",
      phoneNumber: "987-654-3210"
    },
    {
      id: 9,
      first_name: "Carlos",
      last_name: "Ferreira",
      email: "carlos.ferreira@example.com",
      phoneNumber: "555-123-4567"
    },
    {
      id: 10,
      first_name: "Ana",
      last_name: "Oliveira",
      email: "ana.oliveira@example.com",
      phoneNumber: "777-888-9999"
    }

  ];

  const csvData = data.map(item => ({
    id: item.id,
    first_name: item.first_name,
    last_name: item.last_name,
    email: item.email,
    phoneNumber: item.phoneNumber,
  }));

  const csvHeaders = [
    { label: 'ID', key: 'id' },
    { label: 'First Name', key: 'first_name' },
    { label: 'Last Name', key: 'last_name' },
    { label: 'Email', key: 'email' },
    { label: 'Phone Number', key: 'phoneNumber' },
  ];

  const csvLinkRef = useRef(null); // Create a ref for CSVLink

  const handleExportClick = () => {
    if (csvLinkRef.current) {
      csvLinkRef.current.link.click(); // Trigger CSV export
    }
  };


  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter(row => {
      return (
        row.first_name.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.email.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.phoneNumber.includes(event.target.value)
      );
    });

    console.log(newData)
    setRecords(newData);
  }

  const numberOfEmployees = useState(data.length)

  const customStyles = {
    rows: {
      style: {
        border: '2px solid rgba(227, 225, 225, 0.332)',

      },
    },
    head: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
        border: '2px solid rgba(227, 225, 225, 0.332)',
        height: '40px',
        alignItems: 'center',
        backgroundColor: '#EAECF0'
      },
    },
    headCells: {
      style: {
        backgroundColor: '#EAECF0'
      },

    }
  };

  //------------------------------------------------------------------------------------------
  const [showForm, setShowForm] = useState(false);


  const toggleForm = () => {
    setShowForm(!showForm);
  };


  const [newEmployee, setNewEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phoneNumber: "",
  });

  const handleFormChange = (field, value) => {
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [field]: value,
    }));
  };

  const handleFormSubmit = () => {
    // Perform the submit action here
    console.log("New Employee Data:", newEmployee);

    // Clear the form and close it
    setNewEmployee({
      first_name: "",
      last_name: "",
      email: "",
      phoneNumber: "",
    });
    setShowForm(false);
  };

  const handleFormCancel = () => {
    // Clear the form and close it
    setNewEmployee({
      first_name: "",
      last_name: "",
      email: "",
      phoneNumber: "",
    });
    setShowForm(false);
  };


  return (

    <div className="employee-table">
      <div className='header'>
        <div className='left'>
          <span className='employee'>Employees</span>
          <AiOutlineQuestionCircle className='question-icon'></AiOutlineQuestionCircle>
          <span className='number'>{numberOfEmployees}</span>
        </div>
        <div className='rigth'>
          <div className='button export' onClick={handleExportClick}>
            <AiOutlineDownload></AiOutlineDownload>
            <span>Export</span>
          </div>
          <CSVLink
            ref={csvLinkRef} // Attach the ref to CSVLink
            data={csvData}
            headers={csvHeaders}
            filename={"employee_data.csv"}
            style={{ display: 'none' }} // Hide the link
          >
            Export to CSV
          </CSVLink>

          <div className=' button add-employee' onClick={toggleForm}>
            <AiOutlineUserAdd></AiOutlineUserAdd>
            <span>New Employee</span>
          </div>
        </div>
      </div>
      <div className='filter-box'>
        <BiSearchAlt className='icon' />
        <input className="text" type="text" placeholder="Search Employees by name,email or phone Number" onChange={handleFilter} />
      </div>
      <DataTable
        columns={columns}
        data={records}
        selectableRows
        pagination
        fixedHeader
        customStyles={customStyles}
      />

      {showForm && (
        <div className="form-container">
          <div className="blur-background"></div>
          <div className="form">
            <h2>Add New Employee</h2>
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                id="first_name"
                placeholder="Enter first name"
                value={newEmployee.first_name}
                onChange={(e) => handleFormChange("first_name", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                id="last_name"
                placeholder="Enter last name"
                value={newEmployee.last_name}
                onChange={(e) => handleFormChange("last_name", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter email"
                value={newEmployee.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                placeholder="Enter phone number"
                value={newEmployee.phoneNumber}
                onChange={(e) => handleFormChange("phoneNumber", e.target.value)}
              />
            </div>
            <div className="form-buttons">
              <button className="submit-btn" onClick={handleFormSubmit}>
                Submit
              </button>
              <button className="cancel-btn" onClick={handleFormCancel}>
                Cancel
              </button>
            </div>
          </div>

        </div>
      )}

    </div>

  );
};

export default EmployeeTable;
