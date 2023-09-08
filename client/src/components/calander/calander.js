import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DaysOfWeek = ['SUN ', 'MON ', 'TUE ', 'WED ', 'THU ', 'FRI ', 'SAT '];

const initialData = [
  { employee: 'Funcionário 1', hours: [0, 0, 0, 0, 0, 0, 0] },
  { employee: 'Funcionário 2', hours: [0, 0, 0, 0, 0, 0, 0] },
  // Adicione mais funcionários conforme necessário
];

const Calander = () => {
  const [selectedWeek, setSelectedWeek] = useState(new Date()); // Semana selecionada
  const [timeSheetData, setTimeSheetData] = useState(initialData);

  // Função para atualizar as horas trabalhadas
  const updateHours = (employeeIndex, dayIndex, value) => {
    const updatedData = [...timeSheetData];
    updatedData[employeeIndex].hours[dayIndex] = value;
    setTimeSheetData(updatedData);
  };

 // Retorna o dia do mês associado ao índice do dia da semana
const getDayOfMonth = (dayIndex) => {
  const selectedDate = new Date(selectedWeek);
  const firstDayOfWeek = new Date(selectedDate);
  firstDayOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay() + dayIndex);
  return {
    day: DaysOfWeek[dayIndex],
    date: firstDayOfWeek.getDate(),
    month: firstDayOfWeek.toLocaleString('default', { month: 'short' })
  };
};

// Renderiza as colunas da tabela
const renderTableColumns = () => {
  return DaysOfWeek.map((day, index) => {
    const { day: dayName, date, month } = getDayOfMonth(index);
    return (
      <td key={index}>
        <div>
          <span>{`${dayName} - ${date} ${month}`}</span>
        </div>
      </td>
    );
  });
};
const renderTableRows = () => {
  return timeSheetData.map((employee, employeeIndex) => (
    <tr key={employeeIndex}>
      <td>{employee.employee}</td>
      {employee.hours.map((hours, dayIndex) => (
        <td key={dayIndex}>
          <div>
            <input
              type="number"
              value={hours}
              onChange={(e) => updateHours(employeeIndex, dayIndex, parseInt(e.target.value))}
            />
            <input
              type="text"
              placeholder="Descrição"
              value={employee.workDescription ? employee.workDescription[dayIndex] : ""}
              onChange={(e) => updateWorkDescription(employeeIndex, dayIndex, e.target.value)}
            />
            <input
              type="text"
              placeholder="Local"
              value={employee.workLocation ? employee.workLocation[dayIndex] : ""}
              onChange={(e) => updateWorkLocation(employeeIndex, dayIndex, e.target.value)}
            />
          </div>
        </td>
      ))}
    </tr>
  ));
};

// Função para atualizar a descrição do trabalho
const updateWorkDescription = (employeeIndex, dayIndex, value) => {
  const updatedData = [...timeSheetData];
  if (!updatedData[employeeIndex].workDescription) {
    updatedData[employeeIndex].workDescription = [];
  }
  updatedData[employeeIndex].workDescription[dayIndex] = value;
  setTimeSheetData(updatedData);
};

// Função para atualizar o local de trabalho
const updateWorkLocation = (employeeIndex, dayIndex, value) => {
  const updatedData = [...timeSheetData];
  if (!updatedData[employeeIndex].workLocation) {
    updatedData[employeeIndex].workLocation = [];
  }
  updatedData[employeeIndex].workLocation[dayIndex] = value;
  setTimeSheetData(updatedData);
};

  return (
    <div className='employee-table'>
      <h1>TimeSheet</h1>
      <label>
        Semana:
        <DatePicker
          selected={selectedWeek}
          onChange={(date) => setSelectedWeek(date)}
          dateFormat="dd/MM/yyyy"
          filterDate={(date) => date.getDay() === 0} // Somente domingos
          showWeekNumbers
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

export default Calander;
