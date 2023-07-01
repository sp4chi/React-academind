import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { cartActions } from '../../store/cart-slice';

const Cart = (props) => {
  const amount = useSelector(state => console.log(state.cart))
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(cartActions.add(1))
  };

  const removeItemHandler = () => {
    dispatch(cartActions.remove(1));
  };
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={{ title: 'Test Item', quantity: `${amount}`, total: 18, price: 6 }}
          onAdd={addItemHandler}
          onRemove={removeItemHandler}
        />
      </ul>
    </Card>
  );
};

export default Cart;
