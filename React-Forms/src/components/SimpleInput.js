import React, { useState, useRef } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const nameInputRef = useRef();

  //ONCHANGE HANDLER
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  //ONBLUR HANDLER
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);

    if (enteredName.trim().length === 0) {
      setEnteredNameIsValid(false);
    }
  };

  //ONSUBMIT HANDLER
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim().length === 0) {

      setEnteredNameIsValid(false);
      return;
    }

    setEnteredNameIsValid(true);

    console.log(enteredName);
    setEnteredName('');


  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          value={enteredName}
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler} type='text'
          id='name'
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
