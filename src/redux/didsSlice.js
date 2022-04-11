import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'dids',
  initialState: [],

  reducers: {
    addNewDids(state, { payload }) {
      return [...state, ...payload];
    },
  },
});

export const { addNewDids } = slice.actions;

export const selectDids = (state) => state;

export default slice.reducer;
