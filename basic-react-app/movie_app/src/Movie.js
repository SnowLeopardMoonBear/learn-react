import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css"; // import css for this component

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }; // to check type and requirement of a prop
  // but not working well...

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <MoviePoster poster={this.props.poster} />
      </div>
    );
  }
}
class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired,
  };
  render() {
    return (
      <img
        src={this.props.poster}
        alt="movie poster"
      />
    );
  }
}

// Example of dumb component: For which doesn't need state, didMount(), updating something, but only props.
// function MoviePoster(poster) {
//   return (
//     <img
//       src={poster} // doesn't need this.props.state because it's outside an object
//       width="200px"
//       height="280px"
//       alt="movie poster"
//     />
//   );
// }
export default Movie;
