import React from 'react'
import MoviesCard from './MoviesCard';
const MovieList = ({movies}) => {
  console.log(movies);
  return (
    <div style={{display: 'flex',flexDirection:"row"}}>
      {movies.map((el ,i) => (
      <MoviesCard movie={el} key={i} />
      ))}
    </div>
  );
};

export default MovieList;