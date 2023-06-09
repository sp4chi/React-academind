import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModaL from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (e) => {
        e.preventDefault();

        //VALIDATION
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+enteredAge.trim() < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
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

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <ErrorModaL title={error.title} message={error.message} onConfirm={errorHandler} />}
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
            </Card>
        </>);
}

export default AddUser;