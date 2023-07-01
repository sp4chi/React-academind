import { createSlice } from '@reduxjs/toolkit';


const initialCounterState = {
    counter: 0,
    showCounter: true
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrease(state, action) {
            state.counter = state.counter - action.payload;
        },
        toggle(state, action) {
            state.showCounter = !state.showCounter;
        }
    }
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;