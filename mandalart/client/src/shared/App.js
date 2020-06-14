import React, { Component } from "react";
import { Route } from "react-router-dom";
import { MandalartPage, NineSquaresPage, SquarePage, LoginPage} from "../pages";
import Styled from "styled-components";

// 가운데 정렬용?
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
        <Route path="/square/:index/:content" component={SquarePage} />
        <Route path="/login" component={LoginPage}/>
      </Wrapper>
    );
  }
}

export default App;
