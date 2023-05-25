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

  return (
    <div className="expenses">
      <ExpensesFilter
        setDefaultYear={year}
        year={getYearHandler}
      />

      <Card >
        {filteredItems.map((item, index) => {
          //console.log(year)
          return (
            <ExpenseItem
              key={item.id}
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
