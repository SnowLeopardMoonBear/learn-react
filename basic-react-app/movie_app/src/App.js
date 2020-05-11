import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';

const movies = [
  {title:"Parasite"},
  {title:"The Host"},
  {title:"Mother"},
  {title:"Snowpiercer"},
  {title:"Barking Dogs Never Bite"}
];

// all components should have a render function
class App extends Component {
  render() {
    return (
      // using map function will iterate iterables  
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title}/>
        })};
      </div>
    );
  }
}

// 이게 있어야 JS 모듈 시스템에서 컴포넌트를 가져올 수 있음
export default App;
