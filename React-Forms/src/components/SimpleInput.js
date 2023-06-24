import React, { useState } from 'react';

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);


  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  //ONCHANGE HANDLER
  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  let formIsValid = false

  if (enteredNameIsValid) {
    formIsValid = true;
  }


  //ONBLUR HANDLER
  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  //ONSUBMIT HANDLER
  const formSubmissionHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  };



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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
