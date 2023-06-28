import React from 'react';
import useInput from '../hooks/use-input';
import Input from '../UI/Input';

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
        <Input
          input={{
            type: 'text',
            id: 'fname',
          }}
          classes={firstNameInputClasses}
          value={enteredFirstName}
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          isInvalid={firstNameIsInvalid}
        />
        <Input
          input={{
            type: 'text',
            id: 'lname',
          }}
          classes={lastNameInputClasses}
          value={enteredLastName}
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          isInvalid={lastNameIsInvalid}
        />
        <Input
          input={{
            type: 'text',
            id: 'email',
          }}
          classes={emailInputClasses}
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          isInvalid={emailIsInvalid}
        />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
