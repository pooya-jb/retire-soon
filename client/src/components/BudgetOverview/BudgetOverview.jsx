import { expenseCategories } from '../../mockData';
import classes from './BudgetOverview.module.css';
const BudgetOverview = () => {
  return (
    <div className={classes.container}>
      <div className={classes.table}>
        <div className={classes.row}>
          <div>Expense Category</div>
          <div>Monthly Budget</div>
          <div>Yearly Budget</div>
        </div>
        {expenseCategories.map((cat) => (
          <div key={cat.id} className={classes.row}>
            <div>{cat.name}</div>
            <div>
              {cat.budget.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })}
            </div>
            <div>
              {(cat.budget * 12).toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })}
            </div>
          </div>
        ))}
        <div className={classes.row}>
          <div>Total</div>
          <div>
            {expenseCategories
              .reduce((acc, cur) => acc + cur.budget, 0)
              .toLocaleString('de-DE', {
                style: 'currency',
                currency: 'EUR',
              })}
          </div>
          <div>
            {(
              expenseCategories.reduce((acc, cur) => acc + cur.budget, 0) * 12
            ).toLocaleString('de-DE', {
              style: 'currency',
              currency: 'EUR',
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetOverview;
