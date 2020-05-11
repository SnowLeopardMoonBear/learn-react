import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';

const movies = [
  {title:"Parasite", poster:"https://wiseaboutbears.org/wp-content/uploads/2014/04/bearmountian-ashsept-2013D800.jpg"},
  {title:"The Host", poster:"https://wiseaboutbears.org/wp-content/uploads/2014/04/bearmountian-ashsept-2013D800.jpg"},
  {title:"Mother", poster:"https://wiseaboutbears.org/wp-content/uploads/2014/04/bearmountian-ashsept-2013D800.jpg"},
  {title:"Snowpiercer", poster:"https://wiseaboutbears.org/wp-content/uploads/2014/04/bearmountian-ashsept-2013D800.jpg"},
  {title:"Barking Dogs Never Bite", poster:"https://wiseaboutbears.org/wp-content/uploads/2014/04/bearmountian-ashsept-2013D800.jpg"}
];

// all components should have a render function
class App extends Component {
  render() {
    return (
      // using map function will iterate iterables  
      <div className="App">
        {/* index is the index of an array provided */}
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/> // recommended to provide a unique key
        })}
      </div>
      // Don't append semicolons at the end of jsx statements. They will be rendered as string.
    );
  }
}

// 이게 있어야 JS 모듈 시스템에서 컴포넌트를 가져올 수 있음
export default App;
