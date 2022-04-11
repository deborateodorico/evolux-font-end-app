import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDids } from '../api';

export const getDids = createAsyncThunk('dids/getDids', async () => {
  return await fetchDids();
});
const initialState = {
  list: [],
  status: null,
};

export const slice = createSlice({
  name: 'dids',
  initialState,
  reducers: {},
  extraReducers: {
    [getDids.pending]: (state) => {
      state.status = 'loading';
    },
    [getDids.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = 'success';
    },
    [getDids.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { addNewDids } = slice.actions;

export const selectDids = (state) => state.dids.list;

export const selectstatus = (state) => state.dids.status;

export default slice.reducer;
