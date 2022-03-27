
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  asyncStatus  from '../AsyncStatus';
import { createSelector } from 'reselect';

const initialState = {
    status: asyncStatus.IDLE,
    items: [],
    error: null
};

export const selectAllPeople = createSelector(
    state => state.people.items,
    people => people.map(person => person)
  );

export const fetchPeople = createAsyncThunk(
    'people/fetchPeople',
    async () => {
      const response = await fetch('https://ghibliapi.herokuapp.com/people');
      const data = await response.json();
      return data;
    }
);

export const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
    },  
    extraReducers: (builder) => {
        builder
          .addCase(fetchPeople.pending, (state) => {
            state.status = asyncStatus.LOADING;
          })
          .addCase(fetchPeople.fulfilled, (state, action) => {
            state.status = asyncStatus.SUCCEEDED;
            state.items = action.payload;
          })
          .addCase(fetchPeople.rejected, (state, action) => {
            state.status = asyncStatus.FAILED;
            state.error = action.payload;
          });
    }
});

export default peopleSlice.reducer;