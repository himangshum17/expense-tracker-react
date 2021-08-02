import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangehandler = (selectedyear) => {
    setFilteredYear(selectedyear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <ExpenseFilter
        selected={filteredYear}
        onChangeFillter={filterChangehandler}
      />
      <div className='divide-y divide-yellow-300 bg-yellow-100 px-4 rounded-lg mt-6'>
        <ExpensesList items={filteredExpenses} />
      </div>
    </>
  );
};

export default Expenses;
