import ExpenseDate from './ExpenseDate';
const ExpenseItem = ({ expenselist: { date, title, amount } }) => {
  return (
    <div className='flex items-center py-4 px-2'>
      <ExpenseDate date={date} />
      <h2 className='flex-1 ml-4 text-2xl font-semibold text-yellow-800'>
        {title}
      </h2>
      <h4 className='text-xl font-medium text-yellow-100 bg-yellow-700 p-2 rounded-lg'>
        ₹ {amount}
      </h4>
    </div>
  );
};

export default ExpenseItem;
