import React, { useEffect } from 'react';
import './Movies.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, selectAllMovies } from "./MoviesSlice";
import { fetchPeople, selectAllPeople } from "../people/PeopleSlice";
import  asyncStatus  from '../AsyncStatus';

const MovieEcxerpt = ({movie, people}) => {

  var filteredPeople = people.filter(p => p.films.filter(f => f.indexOf(movie.id) > -1).length > 0);

  return (   
    /*       
    <div>
      <h3>Title: {movie.title}</h3>
      <p>Original Tile: {movie.original_title_romanised}</p>
      <img src={movie.movie_banner} alt={movie.title} width="630px" height="420px"/>
      <p>Description: {movie.description}</p>
      <p>Director: {movie.director}</p>
      <p>Producer: {movie.producer}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Running Time: {movie.running_time}</p>
      <p>Score: {movie.rt_score}</p>
      <div>
        <label>Names:</label>
        { filteredPeople.map(p => <span>{p.name + ' | '}</span> ) }
      </div>
    </div>
    */
    <div className="card card-margin">
      <div className="media">
        <div className="media-content">
          <p className="title is-4">{movie.title}</p>
          <p className="subtitle is-4">{movie.original_title_romanised}</p>
        </div>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={movie.movie_banner} alt={movie.title} />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="content">
            {movie.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Movies = () => {

  const dispatch = useDispatch();
  const movies = useSelector(selectAllMovies);
  const people = useSelector(selectAllPeople);
  const movieStatus = useSelector(state => state.movies.status);
  const peopleStatus = useSelector(state => state.people.status);
  
  useEffect(() => {
    if (movieStatus === asyncStatus.IDLE){
      dispatch(fetchMovies());
      dispatch(fetchPeople());
    }
  }, [movieStatus, dispatch]);

  let content;

  if (movieStatus === asyncStatus.LOADING)
    content = <div className="card">
                  <div className="card-content">Loading...</div>
              </div>;
  else if (movieStatus === asyncStatus.SUCCEEDED)
    content = movies.map(m => <MovieEcxerpt key={m.id} movie={m} people={people} />);

  return (
    <div className="container is-max-desktop">
       { content }
    </div>
  );
}
