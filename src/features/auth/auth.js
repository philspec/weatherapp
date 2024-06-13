import { createSlice } from '@reduxjs/toolkit';

export const fetchedSupabaseAuthSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
  },
  reducers: {
    setAuth: (state) => {
      state.auth = true
    },
  },
});
export const { setAuth} = fetchedSupabaseAuthSlice.actions;
export default fetchedSupabaseAuthSlice.reducer;
