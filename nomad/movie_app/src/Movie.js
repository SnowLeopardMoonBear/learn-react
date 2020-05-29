import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"; // import css for this component
import "./App-loading.css" // import css for loading

// The movie components doesn't need to update, so we're gonna make them as functions.
function Movie({title, poster, genres, synopsis}){ //Q)Why use curly brackets to wrap arguments?
  return(
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title}/>
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map(genre => <MovieGenre className="MovieGenre" genre={genre} key={genres.index}/>)}
        </div>
        <p className="Movie__Synopsis">
          {synopsis}
        </p>
      </div>
    </div>
  );
}

function MoviePoster({poster, alt}){
  return (
    <img
      src={poster}
      alt={alt}
      title={alt}
      className="Movie__Poster"
    />
  );
}

function MovieGenre({genre}){
  return (
    <span className="Movie__Genre">{genre} </span>
  );
}

//propTypes of Movie component. can check types or requirements of props
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  synopsis: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;
