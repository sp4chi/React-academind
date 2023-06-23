import React from 'react';
import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';
const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
    return (<li className='expenses-list'>{props.items.map((item, index) => {
        return (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />


        )
    })}
    </li>
    );
}

export default ExpensesList;