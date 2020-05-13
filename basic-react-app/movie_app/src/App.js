import React, { Component } from "react";
import Movie from "./Movie.js";
import "./App.css";



// all components should have a render function
class App extends Component {
  // COMPONENT has state
  state = {
    
  };

  // whenever state changes, render() is called
  componentWillMount() {
    console.log("will mount will be executed first");
  }

  //Made a Promise function by adding .then().(...).catch(): 1. for asynchronous loading 2. for making scenario(success or error)
  componentDidMount() {
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating') // React gets movie list from the API without address bar and page refresh. check network tab of dev tool
    .then(response => response.json())// response data comes in binary so we need to JSONify it to read it
    .then(bear => console.log(bear)) // argument 'bear' is returned data from previous .then() function
    .catch(err => console.log(err)) 
    // setTimeout(()=>{
    //   this.setState({
    //     movies: [
    //       {
    //         title: "Parasite",
    //         poster:
    //           "https://image.chosun.com/sitedata/image/202002/11/2020021100227_0.jpg",
    //       },
    //       {
    //         title: "The Host",
    //         poster: "https://t1.daumcdn.net/cfile/12110210A8F1224840",
    //       },
    //       {
    //         title: "Mother",
    //         poster:
    //           "https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F1804A4214A02B527D6",
    //       },
    //       {
    //         title: "Snowpiercer",
    //         poster: "https://t1.daumcdn.net/cfile/036DD04B51B5236718",
    //       },
    //       {
    //         title: "Barking Dogs Never Bite",
    //         poster:
    //           "https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F156F1B10AB15040D30",
    //       },
    //     ],
    //   })
    // }, 2000);
    // setTimeout(()=>{
    //   // always use this.setState() method to modify states
    //   // With setState, we can implement scroll dynamic loading! AWESOME!
    //   this.setState({
    //     movies: [...this.state.movies, { // "...[var]" means to add something after the existing iterable
    //       title: "Okja",
    //       poster: "https://i.pinimg.com/originals/97/a3/c5/97a3c5ad34f0af11f4fb2e37ed845a25.jpg"
    //     }]
    //   })
    // }, 5000);
  }
  // Coding convention: custom funtion made by myself starts with '_' to distinguish it from react function
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => { // When iterating iterables with .map(), index argument is given automatically
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    console.log("render will be the second");
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
