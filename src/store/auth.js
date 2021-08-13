import { createSlice } from '@reduxjs/toolkit';

const initialLoginState = {
  isAuthenticated: false,
};

// This is the authentication slice
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialLoginState,
  reducers: {
    setLoginStatus(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
