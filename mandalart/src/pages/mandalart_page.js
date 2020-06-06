import React from "react";
import NineSquares from "../components/nine_squares"
import Styled from "styled-components"

const Wrapper = Styled.div`
  width: 768px;
`
const Title = Styled.h1`
  text-align:center;
`


class MandalartPage extends React.Component {
  static defaultProps = {
    name: "기본props",
  };
  render() {
    return (
      <Wrapper>
        <Title>My Mandalart</Title>
        <NineSquares></NineSquares>
        <NineSquares></NineSquares>
        <NineSquares></NineSquares>
        <NineSquares></NineSquares>
        <NineSquares></NineSquares>
        <NineSquares></NineSquares>
        <NineSquares></NineSquares>
        <NineSquares></NineSquares>
        <NineSquares></NineSquares>
      </Wrapper>
    );
  }
}
export default MandalartPage;
