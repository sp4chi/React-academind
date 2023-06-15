import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
const MealItemForm = (props) => {

    const amountInputRef = useRef();

    const [amountIsValid, setAmountIsValid] = useState(true);
    const submitHandler = (e) => {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;

        //this step is necessary for two way binding 
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount"
                ref={amountInputRef}
                input={{

                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount(1-5)</p>}
        </form>
    );
}

export default MealItemForm;