import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');
  const getYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => item.date.getFullYear().toString() === year)

  //console.log(filteredItems[0].date.getFullYear().toString());
  return (
    <ul className="expenses">
      <ExpensesFilter
        setDefaultYear={year}
        year={getYearHandler}
      />
      <ExpensesChart expenses={filteredItems} />
      <Card >
        <ExpensesList items={filteredItems} />
      </Card>
    </ul>
  );
}

export default Expenses;
