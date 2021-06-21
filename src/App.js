import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  return (
    <div className='container lg:max-w-5xl mx-auto mt-20 px-4'>
      <NewExpense />
      <Expenses />
    </div>
  );
}

export default App;
