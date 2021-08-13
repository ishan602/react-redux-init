import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCoumter: true,
};

// This is a slice for the counter state
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      //Ideally we shouldn't mutate the states directly, but in toolkit it uses immer to do so for us.
      state.counter++;
    },
    decrement(state) {
      //Ideally we shouldn't mutate the states directly, but in toolkit it uses immer to do so for us.
      if (state.counter > 0) {
        state.counter--;
      }
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
