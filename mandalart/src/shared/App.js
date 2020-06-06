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
  
  static defaultProps = 
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 
    61, 62, 63, 64, 65, 66, 67, 68, 69, 70,
    71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81]

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
