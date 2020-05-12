import React, { Component } from 'react';
import Movie from './Movie.js';
import './App.css';

const movies = [
  {title:"Parasite", poster:"https://image.chosun.com/sitedata/image/202002/11/2020021100227_0.jpg"},
  {title:"The Host", poster:"https://t1.daumcdn.net/cfile/12110210A8F1224840"},
  {title:"Mother", poster:"https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F1804A4214A02B527D6"},
  {title:"Snowpiercer", poster:"https://t1.daumcdn.net/cfile/036DD04B51B5236718"},
  {title:"Barking Dogs Never Bite", poster:"https://img1.daumcdn.net/thumb/C155x225/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F156F1B10AB15040D30"}
];

// all components should have a render function
class App extends Component {
  // whenever state changes, render() is called
  componentWillMount() {
    console.log('will mount will be executed first');
  }
  state = {
    greeting: 'Hello'
  }

  componentDidMount() {
    setTimeout(() => {
      // always use this.setState() method to modify states 
      this.setState({
        greeting: 'new hello'
      })
    }, 2000)
  }

  render() {
    console.log('render will be the second');
    return (
      // using map function will iterate iterables  
      <div className="App">
        {this.state.greeting}
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
