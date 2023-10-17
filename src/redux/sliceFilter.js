import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    search(state, action) {
      state = action.payload;
    },
  },
});

export const { search } = slice.actions;
export const sliceFilter = slice.reducer;
export const getSliceFilter = state => state.filter;
