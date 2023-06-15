import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    console.log('Header Cart button', cartCtx.items);

    const numberOfCartCartItems = cartCtx.items.reduce((currNum, item) => currNum + item.amount, 0);

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