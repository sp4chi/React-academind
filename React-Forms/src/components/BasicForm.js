import React from 'react';
import useInput from '../hooks/use-input';

const BasicForm = (props) => {

  const {
    value: enteredFirstName,
    hasError: enteredFirstNameTouched,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    isValid: enteredFirstNameIsValid,
    reset: resetFirstName,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredLastName,
    hasError: enteredLastNameTouched,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    isValid: enteredLastNameIsValid,
    reset: resetLastName,
  } = useInput(value => value.trim() !== '');


  const {
    value: enteredEmail,
    hasError: enteredEmailTouched,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: enteredEmailIsValid,
    reset: resetEmail,
  } = useInput(value => value.trim() !== '' && value.includes('@') && value.includes('.com'));

  const firstNameIsInvalid = !enteredFirstNameIsValid && enteredFirstNameTouched;

  const lastNameIsInvalid = !enteredLastNameIsValid && enteredLastNameTouched;

  const emailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;


  let formIsValid = false;

  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();

    console.log('First name ', enteredFirstName);
    console.log('Last name ', enteredLastName);
    console.log('Email ', enteredEmail);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameInputClasses = firstNameIsInvalid ? 'form-control invalid' : 'form-control';

  const lastNameInputClasses = lastNameIsInvalid ? 'form-control invalid' : 'form-control';

  const emailInputClasses = emailIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='fname'>First Name</label>
          <input
            type='text'
            id='fname'
            value={enteredFirstName}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {
            firstNameIsInvalid && <p className='error-text'>First name must not be empty</p>
          }
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='lname'>Last Name</label>
          <input
            type='text'
            id='lname'
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {
            lastNameIsInvalid && <p className='error-text'>Last name must not be empty</p>
          }
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {
          emailIsInvalid && <p className='error-text'>Please enter valid email.</p>
        }
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
