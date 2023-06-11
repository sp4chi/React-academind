import { createContext } from 'react';

const CartContext = createContext({
    items: [],
    totalAmout: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
})

export default CartContext;