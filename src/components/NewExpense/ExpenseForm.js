import { useState } from 'react';
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const changeTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const changeAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const changeDateHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expanseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <>
      <form
        className='grid grid-cols-4 gap-4 items-end'
        onSubmit={submitHandler}
      >
        <div className='flex flex-col'>
          <label htmlFor='title' className='text-gray-200 font-medium'>
            Title
          </label>
          <input
            className='h-14 p-2 bg-gray-600 text-gray-200 rounded-sm focus:outline-none focus:ring-2 ring-yellow-100'
            type='text'
            name='title'
            id='title'
            onChange={changeTitleHandler}
            value={enteredTitle}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='amount' className='text-gray-200 font-medium'>
            Amount
          </label>
          <input
            className='h-14 p-2 bg-gray-600 text-gray-200 rounded-sm focus:outline-none focus:ring-2 ring-yellow-100'
            type='number'
            min='0.01'
            step='0.01'
            name='amount'
            id='amount'
            onChange={changeAmountHandler}
            value={enteredAmount}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor='date' className='text-gray-200 font-medium'>
            Date
          </label>
          <input
            className='h-14 p-2 bg-gray-600 text-gray-200 rounded-sm focus:outline-none focus:ring-2 ring-yellow-100'
            type='date'
            name='date'
            id='date'
            onChange={changeDateHandler}
            value={enteredDate}
          />
        </div>
        <div>
          <button
            type='submit'
            className='bg-yellow-800 text-yellow-200 px-4 py-2 h-14 cursor-pointer rounded-sm w-full'
          >
            Add Expense
          </button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
