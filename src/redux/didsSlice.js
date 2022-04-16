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
  reducers: {
    addNewDid(state, { payload }) {
      const newDid = payload;
      newDid.id = state.list.length + 1;
      state.list.push(payload);
    },
    deleteDid(state, { payload }) {
      state.list = state.list.filter((item) => item.id !== payload);
    },
    updateDid(state, { payload }) {
      const update = state.list.find((item) => item.id === payload.id);
      update.value = payload.value;
      update.monthyPrice = payload.monthyPrice;
      update.setupPrice = payload.setupPrice;
      update.currency = payload.currency;
    },
  },
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

export const { addNewDid, updateDid, deleteDid } = slice.actions;

export const selectDids = (state) => state.dids.list;

export const selectStatus = (state) => state.dids.status;

export default slice.reducer;
