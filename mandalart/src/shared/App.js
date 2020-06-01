import React, { Component } from "react";
import { Route } from "react-router-dom";
import { MandalartPage, NineSquaresPage, SquarePage } from "../pages";

class App extends Component {
  render() {
    return (
      <div>
        <h1>'Start Mandalart'</h1>
        <Route exact path="/" component={MandalartPage} />
        <Route path="/nine" component={NineSquaresPage} />
        <Route path="/square" component={SquarePage} />
      </div>
    );
  }
}

export default App;
