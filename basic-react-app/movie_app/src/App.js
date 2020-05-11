import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';

const movies = [
  {title:"Parasite", id:1},
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
        {/* index is the index of an array provided */}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} key={index}/> // recommended to provide a unique key
        })};
      </div>
    );
  }
}

// 이게 있어야 JS 모듈 시스템에서 컴포넌트를 가져올 수 있음
export default App;
