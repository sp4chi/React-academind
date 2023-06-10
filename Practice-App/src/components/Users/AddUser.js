import React, { useRef, useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModaL from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';

const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();


    const [error, setError] = useState();
    const addUserHandler = (e) => {
        e.preventDefault();

        const userNameRef = nameInputRef.current.value;
        const userAgeRef = ageInputRef.current.value;

        //VALIDATION
        if (userNameRef.trim().length === 0 || userAgeRef.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            })
            return;
        }
        if (+userAgeRef.trim() < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            })
            return;
        }

        props.onAddUser(userNameRef, userAgeRef);

        //CLEARING INPUT FIELD AFTER SUBMIT
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    };



    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && <ErrorModaL title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        type='text'
                        ref={nameInputRef}

                    />
                    <label htmlFor='age'>Age (Years)</label>
                    <input
                        id='age'
                        type='number'
                        ref={ageInputRef}
                    />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;