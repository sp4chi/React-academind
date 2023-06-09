import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css'
import Button from '../UI/Button';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (e) => {
        e.preventDefault();

        //VALIDATION
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge.trim() < 1) {
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        //CLEARING INPUT FIELD AFTER SUBMIT
        setEnteredAge('');
        setEnteredUsername('');
    };

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value);
    };
    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input
                    id='username'
                    type='text'
                    onChange={usernameChangeHandler}
                    value={enteredUsername}

                />
                <label htmlFor='age'>Age (Years)</label>
                <input
                    id='age'
                    type='number'
                    onChange={ageChangeHandler}
                    value={enteredAge}

                />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>);
}

export default AddUser;