const ExpenseFilter = ({ onChangeFillter, selected }) => {
  const changeFilterHandler = (e) => {
    onChangeFillter(e.target.value);
  };
  return (
    <div className='flex items-center mt-6 bg-gray-800 p-4 rounded-lg'>
      <h3 className='flex-1 text-gray-100 text-lg'>Filter By</h3>
      <select
        value={selected}
        onChange={changeFilterHandler}
        className='w-36 bg-gray-600 text-gray-200 rounded-sm h-11 px-2 focus:outline-none focus:ring-2 ring-yellow-100'
      >
        <option value='2018'>2018</option>
        <option value='2019'>2019</option>
        <option value='2020'>2020</option>
        <option value='2021'>2021</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
