import React, { useState } from 'react';

const DaysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

const initialData = [
  { employee: 'Funcionário 1', hours: [0, 0, 0, 0, 0, 0, 0] },
  { employee: 'Funcionário 2', hours: [0, 0, 0, 0, 0, 0, 0] },
  // Adicione mais funcionários conforme necessário
];

const Calander = () => {
  const [selectedWeek, setSelectedWeek] = useState(1); // Semana selecionada
  const [timeSheetData, setTimeSheetData] = useState(initialData);

  // Função para atualizar as horas trabalhadas
  const updateHours = (employeeIndex, dayIndex, value) => {
    const updatedData = [...timeSheetData];
    updatedData[employeeIndex].hours[dayIndex] = value;
    setTimeSheetData(updatedData);
  };

  // Renderiza as colunas da tabela
  const renderTableColumns = () => {
    return DaysOfWeek.map((day, index) => (
      <td key={index}>
        {day} - {getDayOfMonth(index)}
      </td>
    ));
  };

  // Retorna o dia do mês associado ao índice do dia da semana
  const getDayOfMonth = (dayIndex) => {
    // Lógica para calcular o dia do mês baseado na semana selecionada
    // Você precisará implementar essa lógica de acordo com suas necessidades
    return (selectedWeek - 1) * 7 + dayIndex + 1;
  };

  // Renderiza as linhas da tabela
  const renderTableRows = () => {
    return timeSheetData.map((employee, employeeIndex) => (
      <tr key={employeeIndex}>
        <td>{employee.employee}</td>
        {employee.hours.map((hours, dayIndex) => (
          <td key={dayIndex}>
            <input
              type="number"
              value={hours}
              onChange={(e) => updateHours(employeeIndex, dayIndex, parseInt(e.target.value))}
            />
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className='employee-table'>
      <h1>TimeSheet</h1>
      <label>
        Semana:
        <input
          type="number"
          value={selectedWeek}
          onChange={(e) => setSelectedWeek(parseInt(e.target.value))}
        />
      </label>
      <table>
        <thead>
          <tr>
            <th>Funcionário</th>
            {renderTableColumns()}
          </tr>
        </thead>
        <tbody>
          {renderTableRows()}
        </tbody>
      </table>
    </div>
  );
};



export default Calander