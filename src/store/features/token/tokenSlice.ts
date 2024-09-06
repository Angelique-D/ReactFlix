import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cookies } from 'react-cookie'

interface TokenState {
    value: string | null
}

const cookies = new Cookies();

const initialState: TokenState = {
    value: cookies.get('token') || null,
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
     state.value = action.payload;
     cookies.set('token', action.payload, { path: '/', maxAge: 900 });
    },
    clearToken: (state) => {
        state.value = null;
        cookies.remove('token', { path: '/'});
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken, clearToken } = tokenSlice.actions

export default tokenSlice.reducer