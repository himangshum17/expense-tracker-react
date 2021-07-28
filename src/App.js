import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'New Mobile Phone',
    amount: 5000,
    date: new Date(2020, 5, 23),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 12500,
    date: new Date(2020, 6, 12),
  },
  {
    id: 'e3',
    title: 'Toilet Repair',
    amount: 8000,
    date: new Date(2020, 6, 20),
  },
  {
    id: 'e4',
    title: 'Bike Cover',
    amount: 500,
    date: new Date(2020, 7, 5),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className='container lg:max-w-5xl mx-auto mt-20 px-4'>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
