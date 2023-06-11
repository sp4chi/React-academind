import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartCartItems = cartCtx.items.reduce((currNum, item) => { return currNum + item.amount }, 0)
    return (
        <button onClick={props.onClick} className={classes['button']}>
            <span className={classes['icon']}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes['badge']}>{numberOfCartCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;