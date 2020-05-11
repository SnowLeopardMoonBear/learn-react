import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';

const movies = [
  "Parasite",
  "The Host",
  "Mother",
  "Snowpiercer",
  "Barking Dogs Never Bite"
];

// all components should have a render function
class App extends Component {
  render() {
    return (
      <div className="App">
        my first div!
        <Movie title={movies[0]} />
        <Movie title={movies[1]} />
        <Movie title={movies[2]} />
        <Movie title={movies[3]} />
        <Movie title={movies[4]} />
      </div>
    )
  }
}

// 이게 있어야 JS 모듈 시스템에서 컴포넌트를 가져올 수 있음
export default App;
