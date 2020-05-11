import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';

// all components should have a render function
class App extends Component {
  render() {
    return (
      <div className="App">
        my first div!
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
      </div>
    )
  }
}

// 이게 있어야 JS 모듈 시스템에서 컴포넌트를 가져올 수 있음
export default App;
