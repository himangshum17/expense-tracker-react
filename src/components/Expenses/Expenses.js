import ExpenseItem from './ExpenseItem';
const Expenses = () => {
  const expenselists = [
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
  return (
    <div className='divide-y divide-yellow-300 bg-yellow-100 px-4 rounded-lg'>
      {expenselists.map((expenselist) => (
        <ExpenseItem key={expenselist.id} expenselist={expenselist} />
      ))}
    </div>
  );
};

export default Expenses;
