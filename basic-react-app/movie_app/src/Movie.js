import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"; // import css for this component

// The movie components doesn't need to update, so we're gonna make them as functions.
function Movie({title, poster}){ //Q)Why use curly brackets to wrap arguments?
  return(
    <div>
      <h2>{title}</h2>
      <MoviePoster poster={poster} />
    </div>
  );
}
function MoviePoster({poster}){
  return (
    <img
      src={poster}
      alt="movie poster"
    />
  );
}


Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
}

export default Movie;
