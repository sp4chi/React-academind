import React from 'react';
import './NewExpense.css'

import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        //console.log('data from NewExpense: ', expenseData);
        props.onAddExpense(expenseData);
    };
    return (<div className='new-expense'>
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>);
}

export default NewExpense;