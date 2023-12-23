'use strict';
import classes from './MonthlyOverview.module.css';
import { expenseCategories } from '../../mockData';
import CategoryExpenses from '../CategoryExpenses/CategoryExpenses';
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';

const MonthlyOverview = (prop) => {
  const { expenses } = prop;
  const [selectedMonth, setSelectedMonth] = useState('01');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [monthText, setMonthText] = useState('January');
  // const [filteredExpenses, setFilteredExpenses] = useState([]);
  const monthChangeHanlder = (event) => {
    // console.log(event.target.value);
    setSelectedMonth(event.target.value);
    const selectedOption = event.target.options[event.target.selectedIndex];
    setMonthText(selectedOption.text);
  };

  const yearChangeHanlder = (event) => {
    setSelectedYear(event.target.value);
  };
  const previousMonthsExpenses = expenses.filter(
    (exp) =>
      Number(exp.date.slice(5, 7)) < Number(selectedMonth) &&
      Number(exp.date.slice(0, 4)) === Number(selectedYear)
  );

  console.log(previousMonthsExpenses);

  const filteredExpenses = expenses.filter(
    (exp) =>
      exp.date.slice(5, 7) === selectedMonth &&
      Number(exp.date.slice(0, 4)) === Number(selectedYear)
  );

  console.log(filteredExpenses);

  const toEuroCurrency = (amount) => {
    return amount.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
    });
  };
  return (
    <div className={classes.month}>
      <div className={classes.dateSelect}>
        <select
          className={classes.dropdown}
          name='month'
          id='month'
          onChange={monthChangeHanlder}
        >
          <option value='01'>January</option>
          <option value='02'>February</option>
          <option value='03'>March</option>
          <option value='04'>April</option>
          <option value='05'>May</option>
          <option value='06'>June</option>
          <option value='07'>July</option>
          <option value='08'>August</option>
          <option value='09'>September</option>
          <option value='10'>October</option>
          <option value='11'>November</option>
          <option value='12'>December</option>
        </select>
        <select
          className={classes.dropdown}
          name='year'
          id='year'
          onChange={yearChangeHanlder}
        >
          <option value='2024'>2024</option>
          <option value='2025'>2025</option>
          <option value='2026'>2026</option>
          <option value='2027'>2027</option>
          <option value='2028'>2028</option>
          <option value='2029'>2029</option>
          <option value='2030'>2030</option>
          <option value='2031'>2031</option>
          <option value='2032'>2032</option>
          <option value='2033'>2033</option>
          <option value='2034'>2034</option>
          <option value='2035'>2035</option>
        </select>
      </div>
      <div className={classes.totalExpenses}>
        <p>
          Total Expenses {monthText} {selectedYear}
        </p>
        <div className='bold'>
          {filteredExpenses.length > 0 &&
            toEuroCurrency(
              filteredExpenses.reduce((acc, exp) => acc + Number(exp.amount), 0)
            )}
        </div>
      </div>
      <div className={classes.categoriesList}>
        {expenseCategories.map((cat) => (
          <div className={classes.category} key={cat.id}>
            <p className={classes.categoryName}>{cat.name}</p>

            <CategoryExpenses
              budget={cat.budget}
              selectedMonthNumber={Number(selectedMonth)}
              previousMonthsExpenses={previousMonthsExpenses.filter(
                (exp) => exp.category === cat.name
              )}
              expenses={filteredExpenses.filter(
                (exp) => exp.category === cat.name
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyOverview;
