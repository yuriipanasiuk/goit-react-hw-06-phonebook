import { createSlice } from '@reduxjs/toolkit';

const filter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filter,
  reducers: {
    changeFilter(state, action) {
      state = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
