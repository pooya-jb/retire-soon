import { useEffect, useState } from 'react';
import './App.css';
import AddNewExpense from './components/AddNewExpense/AddNewExpense';
import BudgetOverview from './components/BudgetOverview/BudgetOverview';
import MonthlyOverview from './components/MonthlyOverview/MonthlyOverview';
import { expenses } from './mockData';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [expensesArr, setExpensesArr] = useState([]);
  useEffect(() => {
    setExpensesArr(expenses);
  }, []);

  return (
    <Router>
      <div className='app'>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route exact path='/' element={<BudgetOverview />}></Route>
          <Route
            path='/monthly-overview'
            element={<MonthlyOverview expenses={expensesArr} />}
          ></Route>
          <Route
            path='/add-new-expense'
            element={<AddNewExpense setExpensesArr={setExpensesArr} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
