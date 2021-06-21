const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();
  return (
    <div className='text-yellow-600 font-medium bg-yellow-200 p-4 rounded-lg text-center w-28'>
      <div>{month}</div>
      <div className='text-2xl font-bold'>{day}</div>
      <div className='font-semibold'>{year}</div>
    </div>
  );
};

export default ExpenseDate;
