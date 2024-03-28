import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, // Add the counter slice reducer
  },
});

export default store;