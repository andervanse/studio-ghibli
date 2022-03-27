import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import  asyncStatus  from '../AsyncStatus';
import { createSelector } from 'reselect';

const initialState = {
    status: asyncStatus.IDLE,
    items: [],
    error: null
};

export const selectAllMovies = createSelector(
  state => state.movies.items,
  movies => movies.map(movie => movie)
);

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async () => {
      const response = await fetch('https://ghibliapi.herokuapp.com/films');
      const data = await response.json();
      return data;
    }
  ); 

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
    },  
    extraReducers: (builder) => {
        builder
          .addCase(fetchMovies.pending, (state) => {
            state.status = asyncStatus.LOADING;
          })
          .addCase(fetchMovies.fulfilled, (state, action) => {
            state.status = asyncStatus.SUCCEEDED;
            state.items = action.payload;
          })
          .addCase(fetchMovies.rejected, (state, action) => {
            state.status = asyncStatus.FAILED;
            state.error = action.payload;
          });
    }
});

export default movieSlice.reducer;