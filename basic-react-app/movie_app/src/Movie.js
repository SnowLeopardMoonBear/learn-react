import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css'; // import css for this component

class Movie extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    } // to check type and requirement of a prop
    // but not working well...

    render(){
        return(
            <div>
                <h2>{this.props.title}</h2>
                <MoviePoster poster={this.props.poster} />
            </div>
        )
    }

}
class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    render(){
        return(
            <img src={this.props.poster} alt="movie poster"/>
        )
    }
}
export default Movie;