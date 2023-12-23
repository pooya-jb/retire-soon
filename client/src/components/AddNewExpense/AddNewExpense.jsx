import classes from './AddNewExpense.module.css';
import { useState, useRef } from 'react';
import { expenseCategories } from '../../mockData';

const AddNewExpense = (prop) => {
  const { setExpensesArr } = prop;
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Grocery');
  const [date, setDate] = useState(new Date());
  const [who, setWho] = useState('Both');
  const [error, setError] = useState('');

  const amountRef = useRef();
  const commentRef = useRef();
  const paymentRef = useRef();

  const titleChangeHandler = (event) => {
    setError('');
    console.log(event.target.value);

    setTitle(event.target.value);
  };

  const categoryChangeHanlder = (event) => {
    console.log(typeof event.target.value);

    setCategory(event.target.value);
  };

  const dateChangeHanlder = (event) => {
    console.log(event.target.value);
    setDate(event.target.value);
  };

  const whoChangeHanlder = (event) => {
    setWho(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (title.trim() === '') {
      setError('Title is required!');
    }
    const newExpenseData = {
      id: Math.floor(Math.random() * 1000),
      title: title.trim(),
      amount: Number(amountRef.current.value),
      category: category,
      date: date,
      forWho: who,
      payment: paymentRef.current.value,
      comment: commentRef.current.value,
    };

    console.log(newExpenseData);

    setExpensesArr((prev) => [...prev, newExpenseData]);

    setTitle('');
    amountRef.current.value = '';
    setCategory('Grocery');
    setDate(new Date());
    setWho('Both');
    setError('');
  };

  return (
    <div className={classes.container}>
      <p className={classes.title}>Add New Expense</p>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor='title'>Title</label>
        <input
          type='text'
          id='title'
          name='title'
          placeholder='Title'
          value={title}
          onChange={titleChangeHandler}
          required
        />
        <label htmlFor='amount'>Amount</label>
        <input
          type='number'
          id='amount'
          name='amount'
          placeholder='Amount'
          ref={amountRef}
          required
          step={0.01}
          min={0}
        />
        <label htmlFor='category'>Category</label>
        <select
          type='text'
          id='category'
          name='category'
          placeholder='Category'
          value={category}
          onChange={categoryChangeHanlder}
          required
          className={classes.dropdown}
        >
          {expenseCategories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        <label htmlFor='date'>Date</label>
        <input
          type='date'
          id='date'
          name='date'
          required
          onChange={dateChangeHanlder}
          className={classes.datePicker}
        />
        <label htmlFor='who'>For Who?</label>
        <select
          type='text'
          id='who'
          name='who'
          value={who}
          onChange={whoChangeHanlder}
          required
          className={classes.dropdown}
        >
          <option value='Both'>Both</option>
          <option value='Pooya'>Pooya</option>
          <option value='Nassim'>Nassim</option>
        </select>
        <label htmlFor='payment'>Payment method</label>
        <select
          type='text'
          id='payment'
          name='payment'
          ref={paymentRef}
          required
          className={classes.dropdown}
        >
          <option value='Pooya'>Pooya's Bank</option>
          <option value='Nassim'>Nassim's Bank</option>
          <option value='Cash'>Cash</option>
        </select>
        <label htmlFor='comment'>Comment</label>
        <input
          type='text'
          id='comment'
          name='comment'
          placeholder='Comment'
          ref={commentRef}
        />
        <button className={classes.submitBTN} type='submit'>
          Add Expense
        </button>
        {error && <p className={classes.error}>{error}</p>}
      </form>
    </div>
  );
};

export default AddNewExpense;
