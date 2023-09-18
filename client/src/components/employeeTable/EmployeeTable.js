import React from 'react';
import { useState, useRef } from 'react';
import './emplyeeTable.css'
import { SlOptionsVertical } from 'react-icons/sl'
import DataTable from 'react-data-table-component';
import { BiSearchAlt } from 'react-icons/bi';
import InvoiceForm from '../tc-form/InvoiceForm';


const EmployeeTable = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [invoices, setInvoices] = useState([]);

  const columns = [
    {
      name: 'Restaurante',
      selector: row => row.rest,
      sortable: true,
    },
    {
      name: 'POS',
      selector: row => row.pos,
      sortable: true,
    },
    {
      name: 'Montante',
      selector: row => row.montante,
      sortable: true,
    },
    {
      name: 'Data da transação',
      selector: row => row.data,
      sortable: true,
    },

    {
      name: 'Ações',
      cell: (row) => (
        <div className="action-buttons">
        
          <button  className='delete' onClick={() => handleDelete(row)}>Apagar</button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
    },

  ];



  const handleDelete = (invoice) => {
    // Exibir um popup de confirmação
    const confirmDelete = window.confirm('Deseja realmente apagar este item?');

    if (confirmDelete) {
        // O usuário confirmou a exclusão
        console.log('Apagar:', invoice);

        // Crie uma nova lista de invoices excluindo o invoice a ser removido
        const updatedInvoices = invoices.filter((item) => item !== invoice);

        // Atualize o estado 'invoices' com a nova lista
        setInvoices(updatedInvoices);
    } else {
        // O usuário cancelou a exclusão
        console.log('A exclusão foi cancelada.');
    }
};

  

  function handleFilter(event) {
    const newData = invoices.filter(row => {
      return (
        row.rest.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.pos.toLowerCase().includes(event.target.value.toLowerCase()) ||
        row.montante.includes(event.target.value)
      );
    });

    console.log(newData)
    setInvoices(newData);
  }


  const handleFinalizar = () => {
    // Certifique-se de que 'invoices' contém os dados que você deseja enviar
  
    // Enviar os dados para o backend
    fetch('URL_DO_BACKEND', {
      method: 'POST', // Use o método HTTP apropriado (por exemplo, POST)
      headers: {
        'Content-Type': 'application/json', // Especifique o tipo de conteúdo como JSON
      },
      body: JSON.stringify(invoices), // Converte 'invoices' para JSON e envia no corpo da requisição
    })
      .then((response) => {
        if (response.ok) {
          // A requisição foi bem-sucedida
          // Faça algo aqui se necessário
        } else {
          // A requisição falhou
          console.error('Falha ao enviar os dados para o backend');
        }
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados:', error);
      });
  };

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


  return (

    <div className="employee-table">
      <div className='header'>
      <InvoiceForm itemList={invoices} setItemList={setInvoices} />
      </div>
      <div className='filter-box'>
        <BiSearchAlt className='icon' />
        <input className="text" type="text" placeholder="Pesquisar TC'S pelo POS, Restaurante" onChange={handleFilter} />
      </div>
      <DataTable
        columns={columns}
        data={invoices}
        pagination
        fixedHeader
        customStyles={customStyles}
      />
          <button className="submit" disabled={invoices.length===0}  onClick={handleFinalizar}>
          Finalizar
        </button>
    </div >

 

  );
};

export default EmployeeTable;
