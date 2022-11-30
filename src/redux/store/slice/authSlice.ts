import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState = {
  User: {},
  isAuthenticate: false,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state: any, action: PayloadAction) => {
      state.User = action.payload;
    },
    setIsAuthenticate: (state: any, action: PayloadAction) => {
      state.isAuthenticate = action.payload;
    },
  },
});

export const {setUser, setIsAuthenticate} = authSlice.actions;
export default authSlice.reducer;

export const auth = (state: any) => state.authSlice;
