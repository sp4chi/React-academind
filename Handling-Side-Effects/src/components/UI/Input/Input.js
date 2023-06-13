import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import classes from './Input.module.css'


const Input = forwardRef(({ isValid, label, id, type, value, onChange, onBlur }, ref) => {
    const inputRef = useRef();

    // useEffect(() => {
    //     console.log('useEffect', type);
    //     inputRef.current.focus();
    // }, [type]);
    const activate = (e) => {
        inputRef.current.focus();
    };
    useImperativeHandle(ref
        ,
        () => {
            return {
                focus: activate,
            }
        },
        [],
    )

    return (
        <div
            className={`${classes.control} ${isValid === false ? classes.invalid : ''
                }`}
        >
            <label htmlFor={id}>{label}</label>
            <input
                ref={inputRef}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>);
})

export default Input;