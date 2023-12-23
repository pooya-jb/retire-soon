import classes from './CategoryExpenses.module.css';

const CategoryExpenses = (prop) => {
  const { selectedMonthNumber, previousMonthsExpenses, expenses, budget } =
    prop;

  const fromPreviousMonthsBudget = Number(
    (selectedMonthNumber - 1) * budget -
      previousMonthsExpenses.reduce((acc, cur) => acc + cur.amount, 0)
  );

  const toEuroCurrency = (amount) => {
    return amount.toLocaleString('de-DE', {
      style: 'currency',
      currency: 'EUR',
    });
  };

  return (
    <div>
      <div className={classes.beginning}>At the beginning of the month</div>
      <div className={classes.budgets}>
        <div className='row'>
          <div>From Previous Months</div>
          <div
            className={
              fromPreviousMonthsBudget >= 0
                ? classes.greenText
                : classes.redText
            }
          >
            {toEuroCurrency(fromPreviousMonthsBudget)}
          </div>
        </div>
        <div className='row'>
          <div>Monthly Budget</div>
          <div>{toEuroCurrency(budget)}</div>
        </div>
        <div className='row'>
          <div>Balance Budget</div>
          <div>{toEuroCurrency(fromPreviousMonthsBudget + budget)}</div>
        </div>
      </div>
      <div className={classes.expenses}>
        <div className={classes.expensesList}>Expenses List</div>
        {expenses.map((expense) => (
          <div key={expense.id} className='row'>
            <div>{expense.title}</div>
            <div>{toEuroCurrency(expense.amount)}</div>
          </div>
        ))}
        <div>
          <div>
            <div className='row'>
              <div className='bold'>Total Expenses</div>
              <div className='bold'>
                {toEuroCurrency(
                  expenses.reduce((acc, cur) => acc + cur.amount, 0)
                )}
              </div>
            </div>
            <div className='row'>
              <div className='bold'>Remaining of monthly Budget</div>
              <div
                className={`bold ${
                  budget - expenses.reduce((acc, cur) => acc + cur.amount, 0) >
                  0
                    ? classes.greenText
                    : classes.redText
                }`}
              >
                {toEuroCurrency(
                  budget - expenses.reduce((acc, cur) => acc + cur.amount, 0)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryExpenses;
