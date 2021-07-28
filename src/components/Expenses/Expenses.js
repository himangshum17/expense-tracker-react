import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangehandler = (selectedyear) => {
    setFilteredYear(selectedyear);
  };
  return (
    <>
      <ExpenseFilter
        selecter={filteredYear}
        onChangeFillter={filterChangehandler}
      />
      <div className='divide-y divide-yellow-300 bg-yellow-100 px-4 rounded-lg mt-6'>
        {items.map((item) => (
          <ExpenseItem key={item.id} expenselist={item} />
        ))}
      </div>
    </>
  );
};

export default Expenses;
