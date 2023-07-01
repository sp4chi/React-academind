import { createSlice } from '@reduxjs/toolkit';

const initialshowCartState = {
    showCart: false
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialshowCartState,
    reducers: {
        toggle(state) {
            state.showCart = !state.showCart;
        },
    }
})

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;