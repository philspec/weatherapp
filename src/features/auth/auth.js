import { createSlice } from '@reduxjs/toolkit';

export const fetchedSupabaseAuthSlice = createSlice({
  name:"name",
  initialState: {
    auth: false,
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});
export const { setAuth} = fetchedSupabaseAuthSlice.actions;
export default fetchedSupabaseAuthSlice.reducer;
