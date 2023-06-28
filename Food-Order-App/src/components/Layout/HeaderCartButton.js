import { useContext, useState, useEffect } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartCartItems = items.reduce((currNum, item) => currNum + item.amount, 0);

    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`;



    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighLighted(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return (
        <button onClick={props.onClick} className={btnClasses}>
            <span className={classes['icon']}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes['badge']}>{numberOfCartCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;