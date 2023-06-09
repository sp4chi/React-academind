import React, { Fragment } from 'react';
import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const ErrorModaL = (props) => {
    return (
        <Fragment>
            <div className={styles.backdrop} onClick={props.onConfirm} />
            <Card className={styles.modal}>
                <header className={styles.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={styles.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={styles.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </Fragment>

    );
}

export default ErrorModaL;