import React, { Component } from "react";
import { RouteComponentProps } from 'react-router';
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
        {/* render() 함수를 사용하는게 props의 불필요한 렌더링을 막아주는 효율적인 방식. */}
        <Route exact path="/" render={()=><MandalartPage content={this.props}/>}/> 
        <Route path="/nine" component={NineSquaresPage} />
        <Route path="/square" component={SquarePage} />
      </Wrapper>
    );
  }
}

export default App;
