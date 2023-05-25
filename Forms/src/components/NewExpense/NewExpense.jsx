import React, { useState } from 'react';
import './NewExpense.css'

import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const addNewExpenseHandler = () => {
        setIsEditing(true);
    }

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        setIsEditing(false)
        props.onAddExpense(expenseData);
    };
    const onCancelHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className='new-expense'>
            {isEditing &&
                <ExpenseForm
                    onCancel={onCancelHandler}
                    onSaveExpenseData={onSaveExpenseDataHandler}

                />}
            {!isEditing &&
                <button
                    onClick={addNewExpenseHandler}
                >
                    Add new Expense
                </button>
            }

        </div>);
}

export default NewExpense;