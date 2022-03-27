import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import moviesReducer from '../features/movies/MoviesSlice';
import peopleReducer from '../features/people/PeopleSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: moviesReducer,
    people: peopleReducer
  },
});
