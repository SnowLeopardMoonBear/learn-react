import React, { Component } from 'react';
import './Movie.css'; // import css for this component

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                <h2>{this.props.title}</h2>
            </div>
        )
    }

}
class MoviePoster extends Component{
    render(){
        return(
            <img src="https://wiseaboutbears.org/wp-content/uploads/2014/04/bearmountian-ashsept-2013D800.jpg" alt="bear"/>
        )
    }
}
export default Movie;