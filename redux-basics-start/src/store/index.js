import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const slice = createSlice({
  name: "counter",
  initialState,
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

const store = configureStore({
  reducer: slice.reducer
});

export const actions = slice.actions;
export default store;
