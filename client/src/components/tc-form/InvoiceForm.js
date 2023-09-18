import React, { useState, useEffect } from 'react';
import './invoiceForm.css';

const InvoiceForm = ({ itemList, setItemList }) => {
  const [newItem, setNewItem] = useState({
    rest: '',
    pos: '',
    montante: '',
    data: '', // Inicializado como uma string vazia
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Carregar dados do localStorage quando o componente for montado
  useEffect(() => {
    const storedInvoices = localStorage.getItem('invoices');
    if (storedInvoices) {
      setItemList(JSON.parse(storedInvoices));
    }
  }, []);

  // Atualizar o localStorage sempre que itemList for alterado
  useEffect(() => {
    localStorage.setItem('invoices', JSON.stringify(itemList));
  }, [itemList]);

  const handleFormChange = (field, value) => {
    setNewItem((prevItem) => ({
      ...prevItem,
      [field]: value,
    }));
  };

  const handleFormSubmit = () => {
    // Perform the submit action here
    console.log('New Item Data:', newItem);

    // Add the new item to the item list
    setItemList([...itemList, newItem]);

    // Clear the form, exceto pelo campo de data
    setNewItem((prevItem) => ({
      ...prevItem,
      rest: '',
      pos: '',
      montante: '',
    }));

    // Resetar a validade do formulário
    setIsFormValid(false);
  };

  // Verificar a validade do formulário com base no estado de required dos campos
  useEffect(() => {
    const isValid = Object.values(newItem).every((value) => value !== '');
    setIsFormValid(isValid);
  }, [newItem]);

  return (
    <div>
      <div className="form-inline">
        <input
          type="number"
          id="rest"
          placeholder="Restaurante"
          value={newItem.rest}
          required
          onChange={(e) => handleFormChange('rest', e.target.value)}
        />

        <input
          type="number"
          id="pos"
          placeholder="POS"
          value={newItem.pos}
          required
          onChange={(e) => handleFormChange('pos', e.target.value)}
        />

        <input
          type="number"
          id="montante"
          placeholder="Montante"
          value={newItem.montante}
          required
          onChange={(e) => handleFormChange('montante', e.target.value)}
        />

        <input
          type="date"
          id="data"
          value={newItem.data}
          required
          onChange={(e) => handleFormChange('data', e.target.value)}
        />

        <button className="submit" onClick={handleFormSubmit} disabled={!isFormValid}>
          Adicionar
        </button>
      </div>
    </div>
  );
};

export default InvoiceForm;
