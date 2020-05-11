import React, { Component } from 'react';
import './Movie.css'; // import css for this component

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster />
                This is a movie poster.
            </div>
        )
    }

}
class MoviePoster extends Component{
    render(){
        return(
            <img src="https://images.app.goo.gl/g5eH7rrEa4XuRCHz6"/>
        )
    }
}
export default Movie;