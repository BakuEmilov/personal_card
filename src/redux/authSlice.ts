import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  token: string | null; 
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  token: null, 
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ token: string; username: string }>) => {
      state.isLoggedIn = true;
      state.token = action.payload.token; 
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = false;
      state.token = null; 
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure } = authSlice.actions;

export default authSlice.reducer;
