import React, { Component } from "react";
import Movie from "./Movie.js";
import "./App.css";



// all components should have a render function
class App extends Component {
  // COMPONENT has state
  state = {}

  // componentWillMount() {
    //   console.log("will mount will be executed first");
    // }
    
    // fetch movie data from API when the component is mounted
    componentDidMount() { //Made a Promise function by adding .then().(...).catch(): 1. for asynchronous loading 2. for making scenario(success or error)
      this._getMovies();
    }
    
    // render movie title and poster with fetched data
    _renderMovies = () => { // Coding convention: custom funtion made by myself starts with '_' to distinguish it from react function(진짜 맞나??? 검증 필요)
      const movies = this.state.movies.map(movie => { // When iterating iterables with .map(), index argument is given automatically
        return <Movie title={movie.title} poster={movie.large_cover_image} key={movie.id}/>// using index as key of component can make the code run slower
      })
      return movies
    }
    
    // set State with fetched movie data
    _getMovies = async () => { // in modern JS arrow function, curly brackets mean automatically return the value inside
      const movies = await this._callApi() // wait till the code returns value and then execute the next code
      this.setState({
        movies // Grammatic sugar) equivalent to "movies: movies"
      })
    }
    
    // fetch movie data from the API
    _callApi = () => {
      return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating') // React gets movie list from the API without address bar and page refresh. check network tab of dev tool
      .then(response => response.json())// response data comes in binary so we need to JSONify it to read it
      .then(bear => bear.data.movies) // argument 'bear' is returned data from previous .then() function
      .catch(err => console.log(err)) 
    }
    
    // whenever state changes, render() is called
    render() {
      console.log(this.state.movies);
    return (
      // using map function will iterate iterables
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
      // Don't append semicolons at the end of jsx statements. They will be rendered as string.
    );
  }
}

// 이게 있어야 JS 모듈 시스템에서 컴포넌트를 가져올 수 있음
export default App;
