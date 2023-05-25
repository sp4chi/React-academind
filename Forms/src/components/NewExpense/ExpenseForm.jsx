import React, { useState } from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState('')
    const [enteredAmount, setAmount] = useState('')
    const [enteredDate, setDate] = useState('');
    const titleChangeHandler = (e) => {
        setTitle(e.target.value)
    }
    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    };

    const dateChangeHandler = (e) => {
        setDate(e.target.value)
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        //sending expenseData up 
        props.onSaveExpenseData(expenseData);

        //console.log('data from expenseForm: ', expenseData);

        //resetting 
        setTitle('');
        setAmount('');
        setDate('');
    };
    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input
                    type='text'
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input
                    type='text'
                    min='o.o1'
                    step='0.01'
                    value={enteredAmount}
                    onChange={amountChangeHandler}

                />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input
                    type='date'
                    min='2023-05-18'
                    max='2025-05-31'
                    value={enteredDate}
                    onChange={dateChangeHandler}
                />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>);
}

export default ExpenseForm;