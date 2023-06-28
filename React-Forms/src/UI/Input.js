import React from 'react';
const input = (props) => {
    return (
        <>
            <div className={props.classes}>
                <label htmlFor={props.id}>Last Name</label>
                <input {...props.input}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                />
                {
                    props.isInvalid && <p className='error-text'>Last name must not be empty</p>
                }
            </div>
        </>
    );
}

export default input;