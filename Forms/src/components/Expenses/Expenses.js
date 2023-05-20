import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [year, setYear] = useState('2020');
  const getYearHandler = (selectedYear) => {
    //console.log('year at expense component', year);
    setYear(selectedYear);

  };
  return (
    <div className="expenses">
      <ExpensesFilter setDefaultYear={year} year={getYearHandler} />

      <Card >
        {props.items.map((item, index) => {
          //console.log(index)
          return (
            <ExpenseItem
              key={index}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          )
        })}
      </Card>
    </div>
  );
}

export default Expenses;
