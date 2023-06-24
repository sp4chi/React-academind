import React from 'react';
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: enteredNameTouched,
    valueChangeHandler: nameInputChangeHandler, inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailTouched,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput,
  } = useInput(value => value.trim() !== '' && value.includes('@') && value.includes('.com'));

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //ONSUBMIT HANDLER
  const formSubmissionHandler = (e) => {
    e.preventDefault();


    if (!enteredNameIsValid) {
      return;
    }

    console.log('Name ', enteredName);
    console.log('Email', enteredEmail);
    resetNameInput();
    resetEmailInput();

  };

  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          value={enteredName}
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler} type='text'
          id='name'
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Email</label>
        <input
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler} type='text'
          id='email'
        />
        {emailInputIsInvalid && <p className='error-email'>Please enter a valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
