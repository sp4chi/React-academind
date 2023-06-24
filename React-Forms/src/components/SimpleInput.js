import React, { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredEmailIsValid = enteredEmail.trim() !== '' && enteredEmail.includes('@') && enteredEmail.includes('.com');
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  //ONCHANGE HANDLER
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailInputChangeHandler = (e) => {
    setEnteredEmail(e.target.value)
  };

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }


  //ONBLUR HANDLER
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };
  const emailInputBlurHandler = (e) => {
    setEnteredEmailTouched(true);
  };

  //ONSUBMIT HANDLER
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true)
    if (!enteredNameIsValid) {
      return;
    }

    console.log('Name ', enteredName);
    console.log('Email', enteredEmail)
    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
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
