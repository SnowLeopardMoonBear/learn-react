import React, { Component } from "react";
import { Route } from "react-router-dom";
import { MandalartPage, NineSquaresPage, SquarePage } from "../pages";
import Styled from "styled-components";


// wrapper로 가운데 정렬하려는데 아직 안 먹힘
const Wrapper = Styled.div`
  margin-left: auto;
  margin-right: auto;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Route exact path="/" component={MandalartPage} />
        <Route path="/nine" component={NineSquaresPage} />
        <Route path="/square" component={SquarePage} />
      </Wrapper>
    );
  }
}

export default App;
