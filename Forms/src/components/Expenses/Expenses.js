import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');
  const getYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => item.date.getFullYear().toString() === year)


  let expenseContent = <p className='no-expense-found'>No expense found</p>

  if (filteredItems.length > 0) {
    expenseContent = (filteredItems.map((item, index) => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      )
    }))
  }
  return (
    <div className="expenses">
      <ExpensesFilter
        setDefaultYear={year}
        year={getYearHandler}
      />

      <Card >
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses;
