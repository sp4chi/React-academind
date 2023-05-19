import React from 'react';
import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
  let text = props.title;

  const [title, setTitle] = useState(text)


  const onClickHandler = () => {

    setTitle('Updated!')
    console.log(title);
    //console.log('Clicked');
  }


  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={onClickHandler}>Click ME !</button>
    </Card>
  );
}

export default ExpenseItem;
