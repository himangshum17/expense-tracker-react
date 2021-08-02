import ExpenseItem from './ExpenseItem';
const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return (
      <h2 className='py-4 px-2 text-center font-medium text-2xl'>
        No Expenses Found.
      </h2>
    );
  }
  return (
    <>
      {items.map((item) => (
        <ExpenseItem key={item.id} expenselist={item} />
      ))}
    </>
  );
};

export default ExpensesList;
